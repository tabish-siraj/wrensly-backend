import prisma from '../lib/prisma';
import { PostSchema, PostInterface } from './schema';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload, NormalizedPost } from '../types/express';

export const CreatePost = async (user: UserPayload, post: PostInterface) => {
  try {
    const parsed = PostSchema.safeParse(post);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Post validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    let { rootId } = parsed.data;
    const { content, type, parentId } = parsed.data;

    if (type !== 'POST' && parentId) {
      const parentPost = await prisma.post.findUnique({
        where: { id: parentId },
      });
      if (!parentPost) throw new BadRequestError('Parent post not found');

      rootId = parentPost.rootId || parentPost.id;
    }

    const createdPost = await prisma.post.create({
      data: {
        content,
        type,
        parentId: parentId || null,
        rootId,
        userId: user.id,
      },
    });

    if (type === 'POST' && !createdPost.rootId) {
      await prisma.post.update({
        where: { id: createdPost.id },
        data: { rootId: createdPost.id },
      });
      createdPost.rootId = createdPost.id;
    }

    if (!createdPost) {
      logger.error(`Failed to create post: ${JSON.stringify(post)}`);
      throw new InternalServerError('Failed to create post');
    }

    return createdPost;
  } catch (error) {
    throw error;
  }
};

export const GetPostById = async (user: UserPayload, id: string) => {
  try {
    if (!id || typeof id !== 'string') {
      logger.warn(`Invalid post ID: ${id}`);
      throw new BadRequestError('Invalid post ID');
    }

    const post = await prisma.post.findUnique({
      where: { id, deletedAt: null },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        _count: {
          select: {
            likes: true,
            bookmarks: true,
          },
        },
        likes: {
          where: { userId: user.id },
          select: {
            id: true,
          },
        },
        bookmarks: {
          where: { userId: user.id },
          select: {
            id: true,
          },
        },
        parent: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                username: true,
                profile: {
                  select: {
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!post) {
      logger.warn(`Post with ID ${id} not found`);
      throw new NotFoundError(`Post with ID ${id} not found`);
    }
    const counts = await prisma.post.groupBy({
      by: ['type'],
      where: { parentId: post.id, deletedAt: null },
      _count: { type: true },
    });

    const normalizedPost = {
      id: post.id,
      createdAt: post.createdAt,
      content: post.content,
      parentId: post.parentId,
      parent: post.parent
        ? {
            id: post.parent.id,
            content: post.parent.content,
            createdAt: post.parent.createdAt,
            user: {
              id: post.parent.user.id,
              username: post.parent.user.username,
              firstName: post.parent.user.profile?.firstName,
              lastName: post.parent.user.profile?.lastName,
            },
          }
        : null,
      user: {
        id: post.user.id,
        username: post.user.username,
        firstName: post?.user?.profile?.firstName,
        lastName: post?.user?.profile?.lastName,
      },
      stats: {
        likes: post._count.likes,
        comments:
          counts.find((c) => c.type === 'COMMENT' || c.type === 'QUOTE')?._count
            .type || 0,
        reposts: counts.find((c) => c.type === 'REPOST')?._count || 0,
      },
      isLiked: post.likes.length > 0,
      isBookmarked: post.bookmarks.length > 0,
    } as NormalizedPost;

    return normalizedPost;
  } catch (error) {
    throw error;
  }
};

export const DeletePost = async (user: UserPayload, postId: string) => {
  try {
    if (!postId || typeof postId !== 'string') {
      logger.warn(`Invalid post ID: ${postId}`);
      throw new BadRequestError('Invalid post ID');
    }

    const post = await prisma.post.findUnique({
      where: { id: postId, userId: user.id, deletedAt: null },
    });

    if (!post) {
      logger.warn(`Post with ID ${postId} not found`);
      throw new NotFoundError(`Post with ID ${postId} not found`);
    }

    await prisma.post.update({
      where: { id: postId },
      data: { deletedAt: new Date() },
    });

    return;
  } catch (error) {
    throw error;
  }
};
