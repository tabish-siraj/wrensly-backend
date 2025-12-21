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

    WHERE p.user_id IN (${followingIds.join(',')}) AND p.deleted_at IS NULL AND p.type IN ('POST', 'QUOTE', 'REPOST')
    ORDER BY p.created_at DESC;
  `;

  return posts;
};
