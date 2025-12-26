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

    // Use Prisma ORM instead of raw SQL to avoid parameter issues
    const posts = await prisma.post.findMany({
      where: {
        userId: { in: followingIds },
        deletedAt: null,
        type: { in: ['POST', 'QUOTE', 'REPOST'] },
        ...(cursor && { id: { lt: cursor } }),
      },
      take: limit + 1,
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
                avatar: true,
              },
            },
          },
        },
        parent: {
          where: { deletedAt: null },
          include: {
            user: {
              select: {
                id: true,
                username: true,
                profile: {
                  select: {
                    firstName: true,
                    lastName: true,
                    avatar: true,
                  },
                },
              },
            },
          },
        },
        _count: {
          select: {
            likes: { where: { deletedAt: null } },
            children: { where: { type: 'COMMENT', deletedAt: null } },
          },
        },
        likes: {
          where: { userId: user.id, deletedAt: null },
          select: { id: true },
        },
        bookmarks: {
          where: { userId: user.id, deletedAt: null },
          select: { id: true },
        },
      },
    });

    // Get repost counts separately
    const postIds = posts.map(p => p.id);
    const repostCounts = await prisma.post.groupBy({
      by: ['parentId'],
      where: {
        parentId: { in: postIds },
        type: 'REPOST',
        deletedAt: null,
      },
      _count: { id: true },
    });

    // Check if user has reposted any of these posts
    const userReposts = await prisma.post.findMany({
      where: {
        userId: user.id,
        parentId: { in: postIds },
        type: 'REPOST',
        deletedAt: null,
      },
      select: { parentId: true },
    });

    const repostCountMap = new Map(repostCounts.map(r => [r.parentId, r._count.id]));
    const userRepostSet = new Set(userReposts.map(r => r.parentId));

    // Transform to normalized format
    const normalizedPosts: NormalizedPost[] = posts.map((post) => ({
      id: post.id,
      content: post.content,
      type: post.type,
      user_id: post.userId,
      parent_id: post.parentId,
      root_id: post.rootId,
      created_at: post.createdAt,
      is_liked: post.likes.length > 0,
      is_bookmarked: post.bookmarks.length > 0,
      is_reposted: userRepostSet.has(post.id),
      stats: {
        likes: post._count.likes,
        comments: post._count.children,
        reposts: repostCountMap.get(post.id) || 0,
      },
      user: {
        id: post.user.id,
        username: post.user.username || '',
        first_name: post.user.profile?.firstName || '',
        last_name: post.user.profile?.lastName || '',
        avatar: post.user.profile?.avatar || '',
      },
      parent: post.parent ? {
        id: post.parent.id,
        content: post.parent.content,
        type: post.parent.type,
        created_at: post.parent.createdAt,
        user: {
          id: post.parent.user.id,
          username: post.parent.user.username || '',
          first_name: post.parent.user.profile?.firstName || '',
          last_name: post.parent.user.profile?.lastName || '',
          avatar: post.parent.user.profile?.avatar || '',
        },
      } : null,
    }));

    return createPaginatedResponse(normalizedPosts, limit, cursor);
  } catch (error) {
    throw error;
  }
};