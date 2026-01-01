import prisma from '../lib/prisma';
import { UserPayload } from '../types/express';

export async function calculateRepostData(posts: any[], user: UserPayload) {
    // Collect all post IDs for batch queries
    const allPostIds = new Set<string>();
    posts.forEach((post) => {
        allPostIds.add(post.id);
        if (post.parent?.id) {
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

    // Create lookup maps for O(1) access with explicit types
    const repostCountMap = new Map<string, number>(
        repostCounts.map((r: any) => [r.parentId!, r._count.id])
    );
    const userRepostSet = new Set<string>(
        userReposts.map((r: any) => r.parentId!).filter(Boolean)
    );

    return { repostCountMap, userRepostSet };
}

export function transformPostWithRepostData(
    post: any,
    repostCountMap: Map<string, number>,
    userRepostSet: Set<string>
) {
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
        hashtags: post.hashtags?.map((ph: any) => ph.hashtag.name) || [],
    };
}