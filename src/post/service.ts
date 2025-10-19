import prisma from '../lib/prisma';
import {
  PostSchema,
  PostInterface,
  RepostSchema,
  RepostInterface,
} from './schema';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';

export const CreatePost = async (user: UserPayload, post: PostInterface) => {
  try {
    // Validate post data against the schema
    const parsed = PostSchema.safeParse(post);
    if (!parsed.success) {
      // const validationErrors = parsed.error.errors.map(err => `${err.path.join('.')} - ${err.message}`).join(', ');
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Post validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    if (post.parentId) {
      // Check if the parent post exists
      const parentPost = await prisma.post.findUnique({
        where: { id: post.parentId },
      });
      if (!parentPost) {
        logger.warn(`Parent post with ID ${post.parentId} not found`);
        throw new NotFoundError(
          `Parent post with ID ${post.parentId} not found`
        );
      }
    }

    // Create the post in the database
    const createdPost = await prisma.post.create({
      data: {
        content: parsed.data.content,
        parentId: parsed.data.parentId,
        userId: user.id,
      },
    });

    if (!createdPost) {
      logger.warn('Failed to create post in the database');
      throw new InternalServerError('Failed to create post');
    }

    return createdPost;
  } catch (error) {
    throw error;
  }
};

export const ToggleRepost = async (
  user: UserPayload,
  post: RepostInterface
) => {
  try {
    // Validate incoming repost data
    const parsed = RepostSchema.safeParse(post);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Repost validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    const postId = parsed.data.postId;
    if (!postId || postId === '') {
      logger.error('postId is required to repost.');
      throw new BadRequestError('postId is required to repost.');
    }

    // Check if repost already exists
    const existingRepost = await prisma.repost.findFirst({
      where: {
        userId: user.id,
        postId,
      },
    });

    if (existingRepost) {
      // Delete existing repost (undo repost)
      await prisma.repost.delete({
        where: { id: existingRepost.id },
      });

      logger.info(`${user.id} undone repost for post ${postId}`);
      return { action: 'deleted', message: 'Repost undone successfully.' };
    } else {
      // Create a new repost
      await prisma.repost.create({
        data: {
          userId: user.id,
          postId,
        },
      });

      logger.info(`${user.id} reposted post ${postId}`);
      return { action: 'created', message: 'Repost created successfully.' };
    }
  } catch (err) {
    logger.error(`Error toggling repost: ${(err as Error).message}`);
    throw err;
  }
};
export const GetPostById = async (user: UserPayload, id: string) => {
  try {
    // Validate the ID format
    if (!id || typeof id !== 'string') {
      logger.warn(`Invalid post ID: ${id}`);
      throw new BadRequestError('Invalid post ID');
    }

    // Fetch the post from the database
    const post = await prisma.post.findUnique({
      where: { id, deletedAt: null }, // Ensure we only fetch non-deleted posts
      include: {
        user: true, // Include user details if needed
        comments: true,
      },
    });

    if (!post) {
      logger.warn(`Post with ID ${id} not found`);
      throw new NotFoundError(`Post with ID ${id} not found`);
    }

    return post;
  } catch (error) {
    throw error;
  }
};

export const GetPostsByUserId = async (user: UserPayload, userId: string) => {
  try {
    // Validate the user ID format
    if (!userId || typeof userId !== 'string') {
      logger.warn(`Invalid user ID: ${userId}`);
      throw new BadRequestError('Invalid user ID');
    }

    // Fetch posts by user ID
    const posts = await prisma.post.findMany({
      where: { userId, deletedAt: null }, // Ensure we only fetch non-deleted posts
      orderBy: { createdAt: 'desc' }, // Optional: order by creation date
    });

    if (!posts || posts.length === 0) {
      logger.warn(`No posts found for user ID ${userId}`);
      throw new NotFoundError(`No posts found for user ID ${userId}`);
    }

    return posts;
  } catch (error) {
    throw error;
  }
};

export const GetPostsByUsername = async (
  user: UserPayload,
  username: string
) => {
  try {
    // Validate the username format
    if (!username || typeof username !== 'string') {
      logger.warn(`Invalid user ID: ${username}`);
      throw new BadRequestError('Invalid user ID');
    }

    // Fetch posts by user ID
    const posts = await prisma.post.findMany({
      where: { user: { username }, deletedAt: null }, // Ensure we only fetch non-deleted posts
      orderBy: { createdAt: 'desc' }, // Optional: order by creation date
    });

    if (!posts || posts.length === 0) {
      logger.warn(`No posts found for user ID ${username}`);
      throw new NotFoundError(`No posts found for user ID ${username}`);
    }

    return posts;
  } catch (error) {
    throw error;
  }
};

export const DeletePost = async (user: UserPayload, postId: string) => {
  try {
    // Validate the post ID format
    if (!postId || typeof postId !== 'string') {
      logger.warn(`Invalid post ID: ${postId}`);
      throw new BadRequestError('Invalid post ID');
    }

    // Fetch the post to check ownership
    const post = await prisma.post.findUnique({
      where: { id: postId, userId: user.id, deletedAt: null }, // Ensure we only fetch non-deleted posts
    });

    if (!post) {
      logger.warn(`Post with ID ${postId} not found`);
      throw new NotFoundError(`Post with ID ${postId} not found`);
    }

    await prisma.post.update({
      where: { id: postId },
      data: { deletedAt: new Date() }, // Soft delete the post
    });

    return;
  } catch (error) {
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GetAllPosts = async (_user: UserPayload) => {
  try {
    // Fetch all posts from the database
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
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
        // also include comments count
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    if (!posts || posts.length === 0) {
      logger.warn('No posts found');
      throw new NotFoundError('No posts found');
    }

    return posts;
  } catch (error) {
    throw error;
  }
};
