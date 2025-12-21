import prisma from '../lib/prisma';
import {
  PostSchema,
  PostInterface,
  CommentSchema,
  CommentInterface,
  QuoteSchema,
  QuoteInterface,
  RepostSchema,
  RepostInterface,
} from './schema';
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

    const { content } = parsed.data;
    const createdPost = await prisma.post.create({
      data: {
        content,
        type: 'POST',
        userId: user.id,
      },
    });

    if (!createdPost) {
      logger.error(`Failed to create post: ${JSON.stringify(post)}`);
      throw new InternalServerError('Failed to create post');
    }

    return createdPost;
  } catch (error) {
    throw error;
  }
};

export const CreateComment = async (
  user: UserPayload,
  comment: CommentInterface
) => {
  try {
    const parsed = CommentSchema.safeParse(comment);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Comment validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    const { content, parent_id } = parsed.data;

    const parentPost = await prisma.post.findUnique({
      where: { id: parent_id },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    const rootId = parentPost.rootId || parentPost.id;
    const createdPost = await prisma.post.create({
      data: {
        content,
        type: 'COMMENT',
        parentId: parent_id,
        rootId,
        userId: user.id,
      },
    });

    if (!createdPost) {
      logger.error(`Failed to create comment: ${JSON.stringify(comment)}`);
      throw new InternalServerError('Failed to create comment');
    }

    return createdPost;
  } catch (error) {
    throw error;
  }
};

export const CreateQuote = async (user: UserPayload, quote: QuoteInterface) => {
  try {
    const parsed = QuoteSchema.safeParse(quote);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Quote validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    const { content, parent_id } = parsed.data;

    const parentPost = await prisma.post.findUnique({
      where: { id: parent_id },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    const rootId = parentPost.rootId || parentPost.id;

    const createdPost = await prisma.post.create({
      data: {
        content,
        type: 'QUOTE',
        parentId: parent_id,
        rootId,
        userId: user.id,
      },
    });

    if (!createdPost) {
      logger.error(`Failed to create quote: ${JSON.stringify(quote)}`);
      throw new InternalServerError('Failed to create quote');
    }

    return createdPost;
  } catch (error) {
    throw error;
  }
};

export const CreateRepost = async (
  user: UserPayload,
  repost: RepostInterface
) => {
  try {
    const parsed = RepostSchema.safeParse(repost);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Repost validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    const { parent_id } = parsed.data;
    const parentPost = await prisma.post.findUnique({
      where: { id: parent_id },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    if (parentPost.type !== 'POST' && parentPost.type !== 'QUOTE') throw new BadRequestError('Only posts and quotes can be reposted');

    // Toggle behavior: if a repost by this user for this parent exists,
    // soft-delete it (undo) or restore it; otherwise create a new repost.
    const existingRepost = await prisma.post.findFirst({
      where: { parentId: parent_id, userId: user.id, type: 'REPOST' },
      orderBy: { createdAt: 'desc' },
    });

    if (existingRepost) {
      if (!existingRepost.deletedAt) {
        // undo repost (soft delete)
        const undone = await prisma.post.update({
          where: { id: existingRepost.id },
          data: { deletedAt: new Date() },
        });

        return undone;
      }

      // previously deleted -> restore it
      const restored = await prisma.post.update({
        where: { id: existingRepost.id },
        data: { deletedAt: null, createdAt: new Date() },
      });

      return restored;
    }

    const rootId = parentPost.rootId || parentPost.id;
    const createdPost = await prisma.post.create({
      data: {
        type: 'REPOST',
        parentId: parent_id,
        rootId,
        userId: user.id,
        content: '',
      },
    });

    if (!createdPost) {
      logger.error(`Failed to create repost: ${JSON.stringify(repost)}`);
      throw new InternalServerError('Failed to create repost');
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

    const post = await prisma.$queryRaw<NormalizedPost[]>`
      SELECT 
        p.id, 
        p.content, 
        p.type, 
        p.user_id,
        p.parent_id, 
        p.root_id, 
        p.created_at,
        COALESCE(EXISTS(SELECT 1 FROM likes l WHERE l.user_id=p.user_id AND l.post_id=p.id AND l.deleted_at IS NULL), false) AS is_liked,
          COALESCE(EXISTS(SELECT 1 FROM bookmarks b WHERE b.user_id=p.user_id AND b.post_id=p.id), false) AS is_bookmarked,
          COALESCE(EXISTS(SELECT 1 FROM posts rp WHERE rp.user_id=p.user_id AND rp.parent_id=p.id AND type='REPOST'), false) AS is_reposted,
        json_build_object(
          'likes', (SELECT COUNT(*) FROM likes l WHERE l.post_id=p.id AND l.deleted_at IS NULL),
          'comments', (SELECT COUNT(*) FROM posts pc WHERE pc.root_id=p.id AND pc.type='COMMENT' AND pc.deleted_at IS NULL),
          'reposts', (SELECT COUNT(*) FROM posts pr WHERE pr.root_id=p.id AND pr.type='REPOST' AND pr.deleted_at IS NULL)
        ) AS stats,
        json_build_object(
          'id', u.id,
          'username', u.username,
          'first_name', COALESCE(NULLIF(prf.first_name, ''), ''),
          'last_name', COALESCE(NULLIF(prf.last_name, ''), ''),
          'avatar', COALESCE(NULLIF(prf.avatar, ''), '')
        ) AS user,
        CASE 
          WHEN p.type='QUOTE' THEN json_build_object
          (
          'id', parent.id,
          'content', parent.content,
          'type', parent.type,
          'created_at', parent.created_at,
          'user', json_build_object(
            'id', pu.id,
            'username', pu.username,
            'first_name', COALESCE(NULLIF(ppr.first_name, ''), ''),
            'last_name', COALESCE(NULLIF(ppr.last_name, ''), ''),
            'avatar', COALESCE(NULLIF(ppr.avatar, ''), '')
          )
        ) ELSE NULL 
        END AS parent

      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN profiles prf ON prf.user_id=u.id

      LEFT JOIN posts rep ON rep.parent_id=p.id AND p.type='POST'
      LEFT JOIN users repu ON repu.id=rep.user_id
      LEFT JOIN profiles repuf ON repuf.user_id=repu.id

      LEFT JOIN posts parent ON parent.id=p.parent_id AND p.type='QUOTE' AND parent.deleted_at IS NULL
      LEFT JOIN users pu ON pu.id=parent.user_id
      LEFT JOIN profiles ppr ON ppr.user_id = pu.id

      WHERE p.id=${id} AND p.deleted_at IS NULL
      ORDER BY p.created_at DESC;
    `;

    return post[0] || null;
  } catch (error) {
    throw error;
  }
};

export const GetAllPostsByUser = async (
  user: UserPayload
): Promise<NormalizedPost[]> => {
  const posts = await prisma.$queryRaw<NormalizedPost[]>`
    SELECT 
      p.id, 
      p.content, 
      p.type, 
      p.user_id,
      p.parent_id, 
      p.root_id, 
      p.created_at,
      COALESCE(EXISTS(SELECT 1 FROM likes l WHERE l.user_id=p.user_id AND l.post_id=p.id AND l.deleted_at IS NULL), false) AS is_liked,
        COALESCE(EXISTS(SELECT 1 FROM bookmarks b WHERE b.user_id=p.user_id AND b.post_id=p.id), false) AS is_bookmarked,
        COALESCE(EXISTS(SELECT 1 FROM posts rp WHERE rp.user_id=p.user_id AND rp.parent_id=p.id AND type='REPOST'), false) AS is_reposted,
      json_build_object(
        'likes', (SELECT COUNT(*) FROM likes l WHERE l.post_id=p.id AND l.deleted_at IS NULL),
        'comments', (SELECT COUNT(*) FROM posts pc WHERE pc.root_id=p.id AND pc.type='COMMENT' AND pc.deleted_at IS NULL),
        'reposts', (SELECT COUNT(*) FROM posts pr WHERE pr.root_id=p.id AND pr.type='REPOST' AND pr.deleted_at IS NULL)
      ) AS stats,
      json_build_object(
        'id', u.id,
        'username', u.username,
        'first_name', COALESCE(NULLIF(prf.first_name, ''), ''),
        'last_name', COALESCE(NULLIF(prf.last_name, ''), ''),
        'avatar', COALESCE(NULLIF(prf.avatar, ''), '')
      ) AS user,
      CASE 
        WHEN p.type='QUOTE' THEN json_build_object
        (
        'id', parent.id,
        'content', parent.content,
        'type', parent.type,
        'created_at', parent.created_at,
        'user', json_build_object(
          'id', pu.id,
          'username', pu.username,
          'first_name', COALESCE(NULLIF(ppr.first_name, ''), ''),
          'last_name', COALESCE(NULLIF(ppr.last_name, ''), ''),
          'avatar', COALESCE(NULLIF(ppr.avatar, ''), '')
        )
      ) ELSE NULL 
      END AS parent

    FROM posts p
    JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles prf ON prf.user_id=u.id

    LEFT JOIN posts rep ON rep.parent_id=p.id AND p.type='POST'
    LEFT JOIN users repu ON repu.id=rep.user_id
    LEFT JOIN profiles repuf ON repuf.user_id=repu.id

    LEFT JOIN posts parent ON parent.id=p.parent_id AND p.type='QUOTE' AND parent.deleted_at IS NULL
    LEFT JOIN users pu ON pu.id=parent.user_id
    LEFT JOIN profiles ppr ON ppr.user_id = pu.id

    WHERE p.user_id=${user.id} AND p.deleted_at IS NULL AND p.type IN ('POST', 'QUOTE', 'REPOST')
    ORDER BY p.created_at DESC;
  `;

  return posts;
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
