import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
    NotFoundError,
} from '../utils/errors';
import { UserPayload } from '../types/express';
import { CursorPaginationParams, createPaginatedResponse, PaginatedResult } from '../utils/pagination';
import { calculateRepostData, transformPostWithRepostData } from '../utils/postTransform';

/**
 * Extract hashtags from text content
 */
export const extractHashtags = (content: string): string[] => {
    if (!content) return [];

    // Regex to match hashtags: # followed by alphanumeric characters, underscores, and hyphens
    const hashtagRegex = /#[a-zA-Z0-9_-]+/g;
    const matches = content.match(hashtagRegex);

    if (!matches) return [];

    // Remove # symbol and convert to lowercase, remove duplicates
    const hashtags = matches
        .map(tag => tag.slice(1).toLowerCase())
        .filter((tag, index, arr) => arr.indexOf(tag) === index) // Remove duplicates
        .filter(tag => tag.length > 0 && tag.length <= 50); // Validate length

    return hashtags;
};

/**
 * Process hashtags for a post (create/update hashtag records and associations)
 */
export const processPostHashtags = async (postId: string, content: string): Promise<void> => {
    try {
        const hashtagNames = extractHashtags(content);

        if (hashtagNames.length === 0) {
            return;
        }

        // Use transaction to ensure data consistency
        await prisma.$transaction(async (tx) => {
            // Create hashtags that don't exist
            for (const name of hashtagNames) {
                await tx.hashtag.upsert({
                    where: { name },
                    update: {
                        postCount: { increment: 1 },
                        updatedAt: new Date(),
                    },
                    create: {
                        name,
                        postCount: 1,
                    },
                });
            }

            // Get all hashtag IDs
            const hashtags = await tx.hashtag.findMany({
                where: { name: { in: hashtagNames } },
                select: { id: true, name: true },
            });

            // Create post-hashtag associations
            const postHashtagData = hashtags.map(hashtag => ({
                postId,
                hashtagId: hashtag.id,
            }));

            await tx.postHashtag.createMany({
                data: postHashtagData,
                skipDuplicates: true,
            });
        });

        logger.info(`Processed ${hashtagNames.length} hashtags for post ${postId}: ${hashtagNames.join(', ')}`);
    } catch (error) {
        logger.error(`Error processing hashtags for post ${postId}:`, error);
        throw error;
    }
};

/**
 * Remove hashtag associations when a post is deleted
 */
export const removePostHashtags = async (postId: string): Promise<void> => {
    try {
        await prisma.$transaction(async (tx) => {
            // Get hashtags associated with this post
            const postHashtags = await tx.postHashtag.findMany({
                where: { postId, deletedAt: null },
                include: { hashtag: true },
            });

            // Soft delete post-hashtag associations
            await tx.postHashtag.updateMany({
                where: { postId, deletedAt: null },
                data: { deletedAt: new Date() },
            });

            // Decrement post count for each hashtag
            for (const postHashtag of postHashtags) {
                await tx.hashtag.update({
                    where: { id: postHashtag.hashtagId },
                    data: {
                        postCount: { decrement: 1 },
                        updatedAt: new Date(),
                    },
                });
            }
        });

        logger.info(`Removed hashtag associations for post ${postId}`);
    } catch (error) {
        logger.error(`Error removing hashtags for post ${postId}:`, error);
        throw error;
    }
};

/**
 * Get trending hashtags
 */
export const getTrendingHashtags = async (limit: number = 10): Promise<any[]> => {
    try {
        const hashtags = await prisma.hashtag.findMany({
            where: {
                deletedAt: null,
                postCount: { gt: 0 },
            },
            orderBy: [
                { postCount: 'desc' },
                { updatedAt: 'desc' },
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
        logger.error('Error getting trending hashtags:', error);
        throw error;
    }
};

/**
 * Get posts by hashtag
 */
export const getPostsByHashtag = async (
    user: UserPayload,
    hashtagName: string,
    paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
    try {
        const { cursor, limit = 10 } = paginationParams;

        // Find the hashtag
        const hashtag = await prisma.hashtag.findUnique({
            where: { name: hashtagName.toLowerCase() },
        });

        if (!hashtag) {
            throw new NotFoundError(`Hashtag #${hashtagName} not found`);
        }

        // Build query options
        const queryOptions: any = {
            where: {
                hashtagId: hashtag.id,
                deletedAt: null,
                post: {
                    deletedAt: null,
                    type: { in: ['POST', 'QUOTE'] }, // Only show main posts and quotes
                },
            },
            take: limit + 1,
            orderBy: { createdAt: 'desc' },
            include: {
                post: {
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
                },
            },
        };

        if (cursor) {
            queryOptions.cursor = { id: cursor };
        }

        const postHashtags = await prisma.postHashtag.findMany(queryOptions);

        // Extract posts from postHashtags
        const posts = postHashtags.map((ph: any) => ph.post);

        // Calculate repost data for all posts
        const { repostCountMap, userRepostSet } = await calculateRepostData(posts, user);

        // Transform to post format with correct repost data
        const transformedPosts = posts.map((post: any) =>
            transformPostWithRepostData(post, repostCountMap, userRepostSet)
        );

        return createPaginatedResponse(transformedPosts, limit, cursor);
    } catch (error) {
        logger.error(`Error getting posts for hashtag ${hashtagName}:`, error);
        throw error;
    }
};

/**
 * Search hashtags by name
 */
export const searchHashtags = async (query: string, limit: number = 10): Promise<any[]> => {
    try {
        if (!query || query.length < 1) {
            return [];
        }

        const searchTerm = query.toLowerCase().replace('#', '');

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
            },
        });

        return hashtags.map(hashtag => ({
            id: hashtag.id,
            name: hashtag.name,
            post_count: hashtag.postCount,
        }));
    } catch (error) {
        logger.error(`Error searching hashtags with query "${query}":`, error);
        throw error;
    }
};

/**
 * Get hashtag details
 */
export const getHashtagDetails = async (hashtagName: string): Promise<any> => {
    try {
        const hashtag = await prisma.hashtag.findUnique({
            where: { name: hashtagName.toLowerCase() },
            select: {
                id: true,
                name: true,
                postCount: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!hashtag) {
            throw new NotFoundError(`Hashtag #${hashtagName} not found`);
        }

        return {
            id: hashtag.id,
            name: hashtag.name,
            post_count: hashtag.postCount,
            created_at: hashtag.createdAt,
            updated_at: hashtag.updatedAt,
        };
    } catch (error) {
        logger.error(`Error getting hashtag details for ${hashtagName}:`, error);
        throw error;
    }
};