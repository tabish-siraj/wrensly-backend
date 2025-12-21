import prisma from '../lib/prisma';
import { UserPayload, NormalizedPost, GlobalParams } from '../types/express';

export const GetFeed = async (
  user: UserPayload,
  params: GlobalParams
): Promise<NormalizedPost[]> => {
  /*
   Original implementation (kept for reference): used Prisma query builders
   to fetch posts, related user/profile, counts and per-user like/bookmark
   presence. The block below replaces that with a raw SQL query to
   reduce round-trips and have finer control over joins and counts.
  */

  const follows = await prisma.follow.findMany({
    where: { followerId: user.id, deletedAt: null },
    select: { followingId: true },
  });
  const followingIds = follows.map((f) => f.followingId);
  followingIds.push(user.id);

  // Map allowed sort keys from API to actual DB columns to avoid SQL injection.
  const sortColumnMap: Record<string, string> = {
    createdAt: 'p.created_at',
    updatedAt: 'p.updated_at',
    id: 'p.id',
  };
  const orderBy = sortColumnMap[params.sortBy] ?? 'p.created_at';
  const sortOrder = params.sortOrder && params.sortOrder.toLowerCase() === 'asc' ? 'ASC' : 'DESC';

  // Raw SQL: select posts with user/profile, parent when QUOTE, per-post
  // counts for likes/comments/reposts, and booleans for current user's
  // like/bookmark/repost presence.
  const sql = `
    SELECT
      p.id,
      p.content,
      p.type,
      p.root_id,
      p.parent_id,
      p.created_at,
      u.id as user_id,
      u.username as user_username,
      pr.first_name as user_first_name,
      pr.last_name as user_last_name,
      pr.avatar as user_avatar,

      -- parent fields (only meaningful for QUOTE type)
      parent.id as parent_post_id,
      parent.content as parent_content,
      parent.type as parent_type,
      parent.created_at as parent_created_at,
      pu.id as parent_user_id,
      pu.username as parent_user_username,
      ppr.first_name as parent_user_first_name,
      ppr.last_name as parent_user_last_name,
      ppr.avatar as parent_user_avatar,

      -- stats
      (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id AND l.deleted_at IS NULL) AS likes_count,
      (SELECT COUNT(*) FROM posts pc WHERE pc.root_id = p.id AND pc.type = 'COMMENT' AND pc.deleted_at IS NULL) AS comments_count,
      (SELECT COUNT(*) FROM posts prt WHERE prt.root_id = p.id AND prt.type = 'REPOST' AND prt.deleted_at IS NULL) AS reposts_count,

      -- current user flags
      EXISTS(SELECT 1 FROM likes l2 WHERE l2.post_id = p.id AND l2.user_id = $2 AND l2.deleted_at IS NULL) AS is_liked,
      EXISTS(SELECT 1 FROM bookmarks b WHERE b.post_id = p.id AND b.user_id = $2 AND b.deleted_at IS NULL) AS is_bookmarked,
      EXISTS(SELECT 1 FROM posts rp WHERE rp.root_id = p.id AND rp.user_id = $2 AND rp.type = 'REPOST' AND rp.deleted_at IS NULL) AS is_reposted

    FROM posts p
    JOIN users u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = u.id

    -- parent post info for QUOTE type
    LEFT JOIN posts parent ON parent.id = p.parent_id AND parent.deleted_at IS NULL
    LEFT JOIN users pu ON pu.id = parent.user_id
    LEFT JOIN profiles ppr ON ppr.user_id = pu.id

    WHERE p.user_id = ANY($1::text[]) AND p.type IN ('POST','QUOTE','REPOST') AND p.deleted_at IS NULL
    ORDER BY ${orderBy} ${sortOrder}
    LIMIT $3 OFFSET $4
  `;

  // Execute raw query. Parameters: followingIds array, current user id, limit, offset
  const rows: any[] = await prisma.$queryRawUnsafe(sql, followingIds, user.id, params.limit, params.offset);

  // Normalize rows to the shape expected by the rest of the app.
  const normalizedFeed = rows.map((r) => ({
    id: r.id,
    content: r.content,
    type: r.type,
    created_at: r.created_at,
    root_id: r.root_id,
    parent_id: r.parent_id,
    parent: r.parent_post_id
      ? {
        id: r.parent_post_id,
        content: r.parent_content,
        type: r.parent_type,
        created_at: r.parent_created_at,
        user: {
          id: r.parent_user_id,
          username: r.parent_user_username,
          first_name: r.parent_user_first_name ?? null,
          last_name: r.parent_user_last_name ?? null,
          avatar: r.parent_user_avatar ?? null,
        },
      }
      : null,
    user: {
      id: r.user_id,
      username: r.user_username,
      first_name: r.user_first_name ?? null,
      last_name: r.user_last_name ?? null,
      avatar: r.user_avatar ?? null,
    },
    stats: {
      likes: Number(r.likes_count) || 0,
      comments: Number(r.comments_count) || 0,
      reposts: Number(r.reposts_count) || 0,
    },
    is_liked: Boolean(r.is_liked),
    is_reposted: Boolean(r.is_reposted),
    is_bookmarked: Boolean(r.is_bookmarked),
  })) as NormalizedPost[];

  return normalizedFeed;
  // return rows;
};
