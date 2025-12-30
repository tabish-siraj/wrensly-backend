import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
    BadRequestError,
    InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';
import { CursorPaginationParams, createPaginatedResponse, PaginatedResult } from '../utils/pagination';

export interface SearchFilters {
    type?: 'all' | 'posts' | 'users' | 'hashtags';
    dateRange?: 'all' | 'today' | 'week' | 'month' | 'year';
    sortBy?: 'relevance' | 'recent' | 'popular';
}

/**
 * Unified search across posts, users, and hashtags
 */
export const searchAll = async (
    user: UserPayload,
    query: string,
    filters: SearchFilters = {},
    paginationParams: CursorPaginationParams
): Promise<{
    posts: any[];
    users: any[];
    hashtags: any[];
    total: number;
}> => {
    try {
        if (!query || query.trim().length < 1) {
            return { posts: [], users: [], hashtags: [], total: 0 };
        }

        const searchTerm = query.trim();
        const { type = 'all' } = filters;

        const results = await Promise.all([
            type === 'all' || type === 'posts' ? searchPosts(user, searchTerm, filters, { ...paginationParams, limit: 5 }) : { data: [] },
            type === 'all' || type === 'users' ? searchUsers(user, searchTerm, filters, { ...paginationParams, limit: 5 }) : { data: [] },
            type === 'all' || type === 'hashtags' ? searchHashtags(searchTerm, 5) : [],
        ]);

        const [postsResult, usersResult, hashtagsResult] = results;

        return {
            posts: postsResult.data || [],
            users: usersResult.data || [],
            hashtags: hashtagsResult || [],
            total: (postsResult.data?.length || 0) + (usersResult.data?.length || 0) + (hashtagsResult?.length || 0),
        };
    } catch (error) {
        logger.error(`Search error for query "${query}":`, error);
        throw error;
    }
};

/**
 * Search posts by content
 */
export const searchPosts = async (
    user: UserPayload,
    query: string,
    filters: SearchFilters = {},
    paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
    try {
        if (!query || query.trim().length < 1) {
            return createPaginatedResponse([], paginationParams.limit || 10);
        }

        const { cursor, limit = 10 } = paginationParams;
        const { dateRange = 'all', sortBy = 'relevance' } = filters;
        const searchTerm = query.trim();

        // Build date filter
        let dateFilter = {};
        if (dateRange !== 'all') {
            const now = new Date();
            let startDate = new Date();

            switch (dateRange) {
                case 'today':
                    startDate.setHours(0, 0, 0, 0);
                    break;
                case 'week':
                    startDate.setDate(now.getDate() - 7);
                    break;
                case 'month':
                    startDate.setMonth(now.getMonth() - 1);
                    break;
                case 'year':
                    startDate.setFullYear(now.getFullYear() - 1);
                    break;
            }
            dateFilter = { createdAt: { gte: startDate } };
        }

        // Build sort order
        let orderBy: any = { createdAt: 'desc' }; // Default to recent
        if (sortBy === 'popular') {
            // For popularity, we'll order by like count (simplified)
            orderBy = [
                { likes: { _count: 'desc' } },
                { createdAt: 'desc' }
            ];
        }

        const queryOptions: any = {
            where: {
                deletedAt: null,
                type: { in: ['POST', 'QUOTE'] }, // Only searchable post types
                content: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
                ...dateFilter,
            },
            take: limit + 1,
            orderBy,
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
                hashtags: {
                    where: { deletedAt: null },
                    include: {
                        hashtag: {
                            select: { name: true },
                        },
                    },
                },
            },
        };

        if (cursor) {
            queryOptions.cursor = { id: cursor };
        }

        const posts = await prisma.post.findMany(queryOptions);

        // Transform posts to normalized format
        const transformedPosts = posts.map((post: any) => ({
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
                reposts: 0, // TODO: Calculate reposts
            },
            is_liked: post.likes.length > 0,
            is_bookmarked: post.bookmarks.length > 0,
            is_reposted: false, // TODO: Calculate repost status
            hashtags: post.hashtags.map((ph: any) => ph.hashtag.name),
        }));

        return createPaginatedResponse(transformedPosts, limit, cursor);
    } catch (error) {
        logger.error(`Post search error for query "${query}":`, error);
        throw error;
    }
};

/**
 * Search users by username, first name, last name
 */
export const searchUsers = async (
    user: UserPayload,
    query: string,
    filters: SearchFilters = {},
    paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
    try {
        if (!query || query.trim().length < 1) {
            return createPaginatedResponse([], paginationParams.limit || 10);
        }

        const { cursor, limit = 10 } = paginationParams;
        const searchTerm = query.trim();

        const queryOptions: any = {
            where: {
                deletedAt: null,
                isActive: true,
                OR: [
                    {
                        username: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        profile: {
                            firstName: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            },
                        },
                    },
                    {
                        profile: {
                            lastName: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            },
                        },
                    },
                ],
            },
            take: limit + 1,
            orderBy: [
                { isVerified: 'desc' }, // Verified users first
                { username: 'asc' },
            ],
            include: {
                profile: {
                    select: {
                        firstName: true,
                        lastName: true,
                        avatar: true,
                        bio: true,
                    },
                },
            },
        };

        if (cursor) {
            queryOptions.cursor = { id: cursor };
        }

        const users = await prisma.user.findMany(queryOptions);

        // Get follow counts and follow status for each user
        const userIds = users.map(u => u.id);

        const [followCounts, followStatuses] = await Promise.all([
            // Get follower/following counts for all users
            prisma.user.findMany({
                where: { id: { in: userIds } },
                select: {
                    id: true,
                    _count: {
                        select: {
                            followers: { where: { deletedAt: null } },
                            following: { where: { deletedAt: null } },
                        },
                    },
                },
            }),
            // Get current user's follow status for these users
            prisma.follow.findMany({
                where: {
                    followerId: user.id,
                    followingId: { in: userIds },
                    deletedAt: null,
                },
                select: { followingId: true },
            }),
        ]);

        const followCountMap = new Map(followCounts.map(u => [u.id, u._count]));
        const followingSet = new Set(followStatuses.map(f => f.followingId));

        // Transform users to normalized format
        const transformedUsers = users.map((foundUser: any) => {
            const counts = followCountMap.get(foundUser.id) || { followers: 0, following: 0 };

            return {
                id: foundUser.id,
                username: foundUser.username || '',
                email: foundUser.email,
                first_name: foundUser.profile?.firstName || '',
                last_name: foundUser.profile?.lastName || '',
                bio: foundUser.profile?.bio || '',
                avatar: foundUser.profile?.avatar || '',
                is_verified: foundUser.isVerified,
                is_active: foundUser.isActive,
                followers_count: counts.followers,
                following_count: counts.following,
                created_at: foundUser.createdAt,
                is_following: followingSet.has(foundUser.id),
                is_current_user: foundUser.id === user.id,
            };
        });

        return createPaginatedResponse(transformedUsers, limit, cursor);
    } catch (error) {
        logger.error(`User search error for query "${query}":`, error);
        throw error;
    }
};

/**
 * Search hashtags by name
 */
export const searchHashtags = async (query: string, limit: number = 10): Promise<any[]> => {
    try {
        if (!query || query.trim().length < 1) {
            return [];
        }

        const searchTerm = query.trim().toLowerCase().replace('#', '');

        const hashtags = await prisma.hashtag.findMany({
            where: {
                name: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
                deletedAt: null,
                postCount: { gt: 0 },
            },
            orderBy: [
                { postCount: 'desc' },
                { name: 'asc' },
            ],
            take: limit,
            select: {
                id: true,
                name: true,
                postCount: true,
                updatedAt: true,
            },
        });

        return hashtags.map(hashtag => ({
            id: hashtag.id,
            name: hashtag.name,
            post_count: hashtag.postCount,
            updated_at: hashtag.updatedAt,
        }));
    } catch (error) {
        logger.error(`Hashtag search error for query "${query}":`, error);
        throw error;
    }
};

/**
 * Get search suggestions based on query
 */
export const getSearchSuggestions = async (
    user: UserPayload,
    query: string
): Promise<{
    users: any[];
    hashtags: any[];
    recent_searches: string[];
}> => {
    try {
        if (!query || query.trim().length < 2) {
            return { users: [], hashtags: [], recent_searches: [] };
        }

        const [users, hashtags] = await Promise.all([
            searchUsers(user, query, {}, { limit: 3 }),
            searchHashtags(query, 3),
        ]);

        // TODO: Implement recent searches from user preferences/cache
        const recent_searches: string[] = [];

        return {
            users: users.data,
            hashtags,
            recent_searches,
        };
    } catch (error) {
        logger.error(`Search suggestions error for query "${query}":`, error);
        throw error;
    }
};