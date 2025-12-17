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

export const GetPostById = async (
  user: UserPayload,
  id: string
): Promise<NormalizedPost | null> => {
  try {
    if (!id || typeof id !== 'string') {
      logger.warn(`Invalid post ID: ${id}`);
      throw new BadRequestError('Invalid post ID');
    }

    const post = await prisma.$queryRaw<NormalizedPost[]>`
      SELECT
        p.id,
        p.createdAt,
        p.content,
        p.type,

        json_build_object(
          'id', u.id,
          'username', u.username,
          'firstName', pr.firstName,
          'lastName', pr.lastName
        ) AS user,

        CASE
          WHEN p.parentId IS NOT NULL THEN (
            SELECT json_build_object(
              'id', pp.id,
              'content', pp.content,
              'createdAt', pp.createdAt,
              'user', json_build_object(
                'id', pu.id,
                'username', pu.username,
                'firstName', ppr.firstName,
                'lastName', ppr.lastName
              )
            )
            FROM Post pp
            JOIN User pu ON pu.id = pp.userId
            LEFT JOIN Profile ppr ON ppr.userId = pu.id
            WHERE pp.id = p.parentId AND pp.deletedAt IS NULL
          )
        END AS parent,

        json_build_object(
          'likes', (SELECT COUNT(*) FROM Like l WHERE l.postId = p.id),
          'comments', (SELECT COUNT(*) FROM Post c WHERE c.parentId = p.id AND c.type = 'COMMENT' AND c.deletedAt IS NULL),
          'reposts', (SELECT COUNT(*) FROM Post r WHERE r.parentId = p.id AND r.type = 'REPOST' AND r.deletedAt IS NULL)
        ) AS stats,

        EXISTS (
          SELECT 1 FROM Like l WHERE l.postId = p.id AND l.userId = ${user.id}
        ) AS isLiked,

        EXISTS (
          SELECT 1 FROM Bookmark b WHERE b.postId = p.id AND b.userId = ${user.id}
        ) AS isBookmarked,

        (
          SELECT json_agg(json_build_object(
            'id', c.id,
            'content', c.content,
            'type', c.type,
            'createdAt', c.createdAt,
            'user', json_build_object(
              'id', cu.id,
              'username', cu.username,
              'firstName', cpr.firstName,
              'lastName', cpr.lastName
            ),
            'stats', json_build_object(
              'likes', (SELECT COUNT(*) FROM Like l2 WHERE l2.postId = c.id),
              'comments', (SELECT COUNT(*) FROM Post cc WHERE cc.parentId = c.id AND cc.type = 'COMMENT' AND cc.deletedAt IS NULL),
              'reposts', (SELECT COUNT(*) FROM Post cr WHERE cr.parentId = c.id AND cr.type = 'REPOST' AND cr.deletedAt IS NULL)
            ),
            'isLiked', EXISTS (
              SELECT 1 FROM Like l3 WHERE l3.postId = c.id AND l3.userId = ${user.id}
            ),
            'isBookmarked', EXISTS (
              SELECT 1 FROM Bookmark b3 WHERE b3.postId = c.id AND b3.userId = ${user.id}
            )
          ))
          FROM Post c
          JOIN User cu ON cu.id = c.userId
          LEFT JOIN Profile cpr ON cpr.userId = cu.id
          WHERE c.parentId = p.id AND c.type = 'COMMENT' AND c.deletedAt IS NULL
        ) AS comments

      FROM Post p
      JOIN User u ON u.id = p.userId
      LEFT JOIN Profile pr ON pr.userId = u.id
      WHERE p.id = ${id} AND p.deletedAt IS NULL
      LIMIT 1;
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
      p."createdAt",
      p.content,
      p.type,
      p."parentId",

      json_build_object(
        'id', u.id,
        'username', u.username,
        'firstName', prf."firstName",
        'lastName', prf."lastName",
        'avatar', prf.avatar
      ) AS "user",

      parent.parent,

      json_build_object(
        'likes', stats.likes,
        'comments', stats.comments,
        'reposts', stats.reposts
      ) AS stats,

      flags."isLiked",
      flags."isBookmarked",
      flags."isReposted"

    FROM "Post" p
    JOIN "User" u ON u.id = p."userId"
    LEFT JOIN "Profile" prf ON prf."userId" = u.id

    LEFT JOIN LATERAL (
      SELECT json_build_object(
        'id', pp.id,
        'content', pp.content,
        'createdAt', pp."createdAt",
        'type', pp.type,
        'user', json_build_object(
          'id', pu.id,
          'username', pu.username,
          'firstName', ppr."firstName",
          'lastName', ppr."lastName"
        )
      ) AS parent
      FROM "Post" pp
      JOIN "User" pu ON pu.id = pp."userId"
      LEFT JOIN "Profile" ppr ON ppr."userId" = pu.id
      WHERE pp.id = p."parentId"
        AND pp.type = 'QUOTE'
        AND pp."deletedAt" IS NULL
    ) parent ON p."parentId" IS NOT NULL

    LEFT JOIN LATERAL (
      SELECT
        COUNT(l.id) AS likes,
        COUNT(c.id) AS comments,
        COUNT(r.id) AS reposts
      FROM "Post" base
      LEFT JOIN "Like" l
        ON l."postId" = base.id
       AND l."deletedAt" IS NULL
      LEFT JOIN "Post" c
        ON c."parentId" = base.id
       AND c.type = 'COMMENT'
       AND c."deletedAt" IS NULL
      LEFT JOIN "Post" r
        ON r."parentId" = base.id
       AND r.type = 'REPOST'
       AND r."deletedAt" IS NULL
      WHERE base.id = p.id
    ) stats ON true

    LEFT JOIN LATERAL (
      SELECT
        EXISTS (
          SELECT 1
          FROM "Like" l
          WHERE l."postId" = p.id
            AND l."userId" = ${user.id}
            AND l."deletedAt" IS NULL
        ) AS "isLiked",

        EXISTS (
          SELECT 1
          FROM "Bookmark" b
          WHERE b."postId" = p.id
            AND b."userId" = ${user.id}
            AND b."deletedAt" IS NULL
        ) AS "isBookmarked",

        EXISTS (
          SELECT 1
          FROM "Post" pr
          WHERE pr."parentId" = p.id
            AND pr."userId" = ${user.id}
            AND pr.type = 'REPOST'
            AND pr."deletedAt" IS NULL
        ) AS "isReposted"
    ) flags ON true

    WHERE p."userId" = ${user.id}
      AND p."deletedAt" IS NULL

    ORDER BY p."createdAt" DESC;
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
