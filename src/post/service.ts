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

    const { content, parentId } = parsed.data;

    const parentPost = await prisma.post.findUnique({
      where: { id: parentId },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    const rootId = parentPost.rootId || parentPost.id;
    const createdPost = await prisma.post.create({
      data: {
        content,
        type: 'COMMENT',
        parentId: parentId,
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

    const { content, parentId } = parsed.data;

    const parentPost = await prisma.post.findUnique({
      where: { id: parentId },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    const rootId = parentPost.rootId || parentPost.id;

    const createdPost = await prisma.post.create({
      data: {
        content,
        type: 'QUOTE',
        parentId: parentId,
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

    const { parentId } = parsed.data;

    const parentPost = await prisma.post.findUnique({
      where: { id: parentId },
    });
    if (!parentPost) throw new BadRequestError('Parent post not found');

    const rootId = parentPost.rootId || parentPost.id;

    const createdPost = await prisma.post.create({
      data: {
        type: 'REPOST',
        parentId: parentId,
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
        COALESCE(EXISTS(SELECT 1 FROM likes l WHERE l.user_id=p.user_id AND l.post_id=p.id AND l.deleted_at IS NULL), false) AS isLiked,
          COALESCE(EXISTS(SELECT 1 FROM bookmarks b WHERE b.user_id=p.user_id AND b.post_id=p.id), false) AS isBookmarked,
          COALESCE(EXISTS(SELECT 1 FROM posts rp WHERE rp.user_id=p.user_id AND rp.parent_id=p.id AND type='REPOST'), false) AS isReposted,
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

// export const GetPostById = async (user: UserPayload, id: string) => {
//   try {
//     if (!id || typeof id !== 'string') {
//       logger.warn(`Invalid post ID: ${id}`);
//       throw new BadRequestError('Invalid post ID');
//     }

//     const post = await prisma.post.findUnique({
//       where: { id, deletedAt: null },
//       include: {
//         user: {
//           select: {
//             id: true,
//             username: true,
//             profile: { select: { firstName: true, lastName: true } },
//           },
//         },
//         _count: { select: { likes: true, bookmarks: true } },
//         likes: { where: { userId: user.id }, select: { id: true } },
//         bookmarks: { where: { userId: user.id }, select: { id: true } },
//         parent: {
//           select: {
//             id: true,
//             content: true,
//             createdAt: true,
//             user: {
//               select: {
//                 id: true,
//                 username: true,
//                 profile: { select: { firstName: true, lastName: true } },
//               },
//             },
//           },
//         },
//       },
//     });

//     if (!post) {
//       logger.warn(`Post with ID ${id} not found`);
//       throw new NotFoundError(`Post with ID ${id} not found`);
//     }

//     const comments = await prisma.post.findMany({
//       where: { parentId: post.id, type: 'COMMENT', deletedAt: null },
//       include: {
//         user: {
//           select: {
//             id: true,
//             username: true,
//             profile: { select: { firstName: true, lastName: true } },
//           },
//         },
//         _count: { select: { likes: true, bookmarks: true } },
//         likes: { where: { userId: user.id }, select: { id: true } },
//         bookmarks: { where: { userId: user.id }, select: { id: true } },
//       },
//     });

//     const postCounts = await prisma.post.groupBy({
//       by: ['type'],
//       where: { id, deletedAt: null },
//       _count: { type: true },
//     });

//     const commentCounts = await prisma.post.groupBy({
//       by: ['parentId', 'type'],
//       where: {
//         parentId: { in: comments.map((c) => c.id) },
//         deletedAt: null,
//       },
//       _count: { type: true },
//     });

//     const normalizedComments = comments.map((comment) => ({
//       id: comment.id,
//       createdAt: comment.createdAt,
//       content: comment.content,
//       type: comment.type,
//       parentId: comment.parentId,
//       user: {
//         id: comment.user.id,
//         username: comment.user.username,
//         firstName: comment?.user?.profile?.firstName,
//         lastName: comment?.user?.profile?.lastName,
//       },
//       stats: {
//         likes: comment._count.likes,
//         comments:
//           commentCounts.find((c) => c.type === 'COMMENT')?._count.type || 0,
//         reposts:
//           commentCounts.find((c) => c.type === 'REPOST')?._count.type || 0,
//       },
//       isLiked: comment.likes.length > 0,
//       isBookmarked: comment.bookmarks.length > 0,
//       hasReplies:
//         (commentCounts.find((c) => c.type === 'COMMENT')?._count.type || 0) > 0,
//     }));

//     const normalizedPost = {
//       id: post.id,
//       createdAt: post.createdAt,
//       content: post.content,
//       type: post.type,
//       parentId: post.parentId,
//       parent: post.parent
//         ? {
//             id: post.parent.id,
//             content: post.parent.content,
//             createdAt: post.parent.createdAt,
//             user: {
//               id: post.parent.user.id,
//               username: post.parent.user.username,
//               firstName: post.parent.user.profile?.firstName,
//               lastName: post.parent.user.profile?.lastName,
//             },
//           }
//         : null,
//       user: {
//         id: post.user.id,
//         username: post.user.username,
//         firstName: post?.user?.profile?.firstName,
//         lastName: post?.user?.profile?.lastName,
//       },
//       stats: {
//         likes: post._count.likes,
//         comments:
//           postCounts.find((c) => c.type === 'COMMENT')?._count.type || 0,
//         reposts: postCounts.find((c) => c.type === 'REPOST')?._count.type || 0,
//       },
//       isLiked: post.likes.length > 0,
//       isBookmarked: post.bookmarks.length > 0,
//       hasReplies:
//         (postCounts.find((c) => c.type === 'COMMENT')?._count.type || 0) > 0,
//       comments: normalizedComments,
//     } as NormalizedPost;

//     return normalizedPost;
//   } catch (error) {
//     throw error;
//   }
// };

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
      COALESCE(EXISTS(SELECT 1 FROM likes l WHERE l.user_id=p.user_id AND l.post_id=p.id AND l.deleted_at IS NULL), false) AS isLiked,
        COALESCE(EXISTS(SELECT 1 FROM bookmarks b WHERE b.user_id=p.user_id AND b.post_id=p.id), false) AS isBookmarked,
        COALESCE(EXISTS(SELECT 1 FROM posts rp WHERE rp.user_id=p.user_id AND rp.parent_id=p.id AND type='REPOST'), false) AS isReposted,
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

// -- SELECT
// --   p.id,
// --   p.created_at,
// --   p.content,
// --   p.type,
// --   p.parent_id,

// --   json_build_object(
// --     'id', u.id,
// --     'username', u.username,
// --     'firstName', prf.first_name,
// --     'lastName', prf.last_name,
// --     'avatar', prf.avatar
// --   ) AS "user",

// --   parent.parent,

// --   json_build_object(
// --     'likes', stats.likes,
// --     'comments', stats.comments,
// --     'reposts', stats.reposts
// --   ) AS stats,

// --   flags.is_liked,
// --   flags.is_bookmarked,
// --   flags.is_reposted

// -- FROM posts p
// -- JOIN users u ON u.id = p.user_id
// -- LEFT JOIN profiles prf ON prf.user_id = u.id

// -- LEFT JOIN LATERAL (
// --   SELECT json_build_object(
// --     'id', pp.id,
// --     'content', pp.content,
// --     'createdAt', pp.created_at,
// --     'type', pp.type,
// --     'user', json_build_object(
// --       'id', pu.id,
// --       'username', pu.username,
// --       'firstName', ppr.first_name,
// --       'lastName', ppr.last_name
// --     )
// --   ) AS parent
// --   FROM posts pp
// --   JOIN users pu ON pu.id = pp.user_id
// --   LEFT JOIN profiles ppr ON ppr.user_id = pu.id
// --   WHERE pp.id = p.parent_id
// --     AND pp.type = 'QUOTE'
// --     AND pp.deleted_at IS NULL
// -- ) parent ON p.parent_id IS NOT NULL

// -- LEFT JOIN LATERAL (
// --   SELECT
// --     COUNT(l.id) AS likes,
// --     COUNT(c.id) AS comments,
// --     COUNT(r.id) AS reposts
// --   FROM posts base
// --   LEFT JOIN likes l
// --     ON l.post_id = base.id
// --    AND l.deleted_at IS NULL
// --   LEFT JOIN posts c
// --     ON c.parent_id = base.id
// --    AND c.type = 'COMMENT'
// --    AND c.deleted_at IS NULL
// --   LEFT JOIN posts r
// --     ON r.parent_id = base.id
// --    AND r.type = 'REPOST'
// --    AND r.deleted_at IS NULL
// --   WHERE base.id = p.id
// -- ) stats ON true

// -- LEFT JOIN LATERAL (
// --   SELECT
// --     EXISTS (
// --       SELECT 1
// --       FROM likes l
// --       WHERE l.post_id = p.id
// --         AND l.user_id = 'cmjai7ezf000029g77z72dah1'
// --         AND l.deleted_at IS NULL
// --     ) AS is_liked,

// --     EXISTS (
// --       SELECT 1
// --       FROM bookmarks b
// --       WHERE b.post_id = p.id
// --         AND b.user_id = 'cmjai7ezf000029g77z72dah1'
// --         AND b.deleted_at IS NULL
// --     ) AS is_bookmarked,

// --     EXISTS (
// --       SELECT 1
// --       FROM posts pr
// --       WHERE pr.parent_id = p.id
// --         AND pr.user_id = 'cmjai7ezf000029g77z72dah1'
// --         AND pr.type = 'REPOST'
// --         AND pr.deleted_at IS NULL
// --     ) AS is_reposted
// -- ) flags ON true

// -- WHERE p.user_id = 'cmjai7ezf000029g77z72dah1'
// --   AND p.deleted_at IS NULL

// -- ORDER BY p.created_at DESC;

// -- SELECT * FROM posts WHERE user_id='cmjai7ezf000029g77z72dah1' AND type IN ('POST', 'QUOTE', 'REPOST');
