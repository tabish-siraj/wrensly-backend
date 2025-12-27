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

    // Get posts including reposts
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

    // Extract all post IDs that need repost counts (both original posts and parent posts)
    const allPostIds = new Set<string>();
    posts.forEach(post => {
      allPostIds.add(post.id);
      if (post.parent) {
        allPostIds.add(post.parent.id);
      }
    });

    // Batch query: Get all repost counts in one query
    const repostCounts = await prisma.post.groupBy({
      by: ['parentId'],
      where: {
        parentId: { in: Array.from(allPostIds) },
        type: 'REPOST',
        deletedAt: null,
      },
      _count: { id: true },
    });

    // Batch query: Get all user reposts in one query
    const userReposts = await prisma.post.findMany({
      where: {
        userId: user.id,
        parentId: { in: Array.from(allPostIds) },
        type: 'REPOST',
        deletedAt: null,
      },
      select: { parentId: true },
    });

    // Create lookup maps for O(1) access
    const repostCountMap = new Map(repostCounts.map(r => [r.parentId!, r._count.id]));
    const userRepostSet = new Set(userReposts.map(r => r.parentId!));

    // Transform posts with Twitter-like repost behavior
    const normalizedPosts: NormalizedPost[] = posts.map((post) => {
      if (post.type === 'REPOST' && post.parent) {
        // For reposts, show the original post with repost metadata
        const originalPost = post.parent;

        return {
          id: originalPost.id, // Use original post ID
          content: originalPost.content,
          type: originalPost.type,
          user_id: originalPost.userId,
          parent_id: originalPost.parentId,
          root_id: originalPost.rootId,
          created_at: post.createdAt, // Use repost timestamp for feed ordering
          user: {
            id: originalPost.user.id,
            username: originalPost.user.username || '',
            first_name: originalPost.user.profile?.firstName || '',
            last_name: originalPost.user.profile?.lastName || '',
            avatar: originalPost.user.profile?.avatar || '',
          },
          // Add repost metadata (who reposted it)
          reposted_by: {
            id: post.user.id,
            username: post.user.username || '',
            first_name: post.user.profile?.firstName || '',
            last_name: post.user.profile?.lastName || '',
            avatar: post.user.profile?.avatar || '',
            reposted_at: post.createdAt,
          },
          stats: {
            likes: originalPost._count?.likes || 0,
            comments: originalPost._count?.children || 0,
            reposts: repostCountMap.get(originalPost.id) || 0,
          },
          is_liked: originalPost.likes?.length > 0 || false,
          is_bookmarked: originalPost.bookmarks?.length > 0 || false,
          is_reposted: userRepostSet.has(originalPost.id),
          parent: null, // Original posts don't have parents in this context
        };
      } else {
        // For regular posts and quotes, show normally
        return {
          id: post.id,
          content: post.content,
          type: post.type,
          user_id: post.userId,
          parent_id: post.parentId,
          root_id: post.rootId,
          created_at: post.createdAt,
          user: {
            id: post.user.id,
            username: post.user.username || '',
            first_name: post.user.profile?.firstName || '',
            last_name: post.user.profile?.lastName || '',
            avatar: post.user.profile?.avatar || '',
          },
          reposted_by: null, // No repost metadata for original posts
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
          stats: {
            likes: post._count.likes,
            comments: post._count.children,
            reposts: repostCountMap.get(post.id) || 0,
          },
          is_liked: post.likes.length > 0,
          is_bookmarked: post.bookmarks.length > 0,
          is_reposted: userRepostSet.has(post.id),
        };
      }
    });

    return createPaginatedResponse(normalizedPosts, limit, cursor);
  } catch (error) {
    throw error;
  }
};