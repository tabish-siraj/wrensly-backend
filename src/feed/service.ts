import prisma from '../lib/prisma';
import { UserPayload, NormalizedPost } from '../types/express';
import { CursorPaginationParams, createPaginatedResponse, PaginatedResult } from '../utils/pagination';

export const GetFeed = async (
  user: UserPayload,
  paginationParams: CursorPaginationParams
): Promise<PaginatedResult<NormalizedPost>> => {
  try {
    const { cursor, limit = 10 } = paginationParams;

    // Get user's following list
    const follows = await prisma.follow.findMany({
      where: { followerId: user.id, deletedAt: null },
      select: { followingId: true },
    });

    const followingIds = follows.map((f) => f.followingId);
    followingIds.push(user.id); // Include user's own posts

    // Build cursor condition for raw query
    const cursorCondition = cursor ? `AND p.id < '${cursor}'` : '';

    const posts = await prisma.$queryRaw<NormalizedPost[]>`
      SELECT 
        p.id, 
        p.content, 
        p.type, 
        p.user_id,
        p.parent_id, 
        p.root_id, 
        p.created_at,
        COALESCE(EXISTS(SELECT 1 FROM likes l WHERE l.user_id=${user.id} AND l.post_id=p.id AND l.deleted_at IS NULL), false) AS is_liked,
        COALESCE(EXISTS(SELECT 1 FROM bookmarks b WHERE b.user_id=${user.id} AND b.post_id=p.id AND b.deleted_at IS NULL), false) AS is_bookmarked,
        COALESCE(EXISTS(SELECT 1 FROM posts rp WHERE rp.user_id=${user.id} AND rp.parent_id=p.id AND rp.type='REPOST' AND rp.deleted_at IS NULL), false) AS is_reposted,
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
          WHEN p.type IN ('QUOTE', 'REPOST') THEN json_build_object(
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
      LEFT JOIN profiles prf ON prf.user_id = u.id
      LEFT JOIN posts parent ON parent.id = p.parent_id AND p.type IN ('QUOTE', 'REPOST') AND parent.deleted_at IS NULL
      LEFT JOIN users pu ON pu.id = parent.user_id
      LEFT JOIN profiles ppr ON ppr.user_id = pu.id

      WHERE p.user_id IN (${followingIds.join(',')}) AND p.deleted_at IS NULL AND p.type IN ('POST', 'QUOTE', 'REPOST') ${cursorCondition}
      ORDER BY p.created_at DESC
      LIMIT ${limit + 1};
    `;

    return createPaginatedResponse(posts, limit, cursor);
  } catch (error) {
    throw error;
  }
};