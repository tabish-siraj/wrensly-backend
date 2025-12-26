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
import { CursorPaginationParams, createPaginatedResponse, PaginatedResult } from '../utils/pagination';

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

        const { content, parent_id } = parsed.data;

        const parentPost = await prisma.post.findUnique({
            where: { id: parent_id },
        });
        if (!parentPost) throw new BadRequestError('Parent post not found');

        const rootId = parentPost.rootId || parentPost.id;
        const createdPost = await prisma.post.create({
            data: {
                content,
                type: 'COMMENT',
                parentId: parent_id,
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

        const { content, parent_id } = parsed.data;

        const parentPost = await prisma.post.findUnique({
            where: { id: parent_id },
        });
        if (!parentPost) throw new BadRequestError('Parent post not found');

        const rootId = parentPost.rootId || parentPost.id;

        const createdPost = await prisma.post.create({
            data: {
                content,
                type: 'QUOTE',
                parentId: parent_id,
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

        const { parent_id } = parsed.data;
        const parentPost = await prisma.post.findUnique({
            where: { id: parent_id },
        });
        if (!parentPost) throw new BadRequestError('Parent post not found');

        if (parentPost.type !== 'POST' && parentPost.type !== 'QUOTE') throw new BadRequestError('Only posts and quotes can be reposted');

        // Toggle behavior: if a repost by this user for this parent exists,
        // soft-delete it (undo) or restore it; otherwise create a new repost.
        const existingRepost = await prisma.post.findFirst({
            where: { parentId: parent_id, userId: user.id, type: 'REPOST' },
            orderBy: { createdAt: 'desc' },
        });

        if (existingRepost) {
            if (!existingRepost.deletedAt) {
                // undo repost (soft delete)
                const undone = await prisma.post.update({
                    where: { id: existingRepost.id },
                    data: { deletedAt: new Date() },
                });

                return undone;
            }

            // previously deleted -> restore it
            const restored = await prisma.post.update({
                where: { id: existingRepost.id },
                data: { deletedAt: null, createdAt: new Date() },
            });

            return restored;
        }

        const rootId = parentPost.rootId || parentPost.id;
        const createdPost = await prisma.post.create({
            data: {
                type: 'REPOST',
                parentId: parent_id,
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

export const GetAllPosts = async (
    user: UserPayload,
    paginationParams: CursorPaginationParams
): Promise<PaginatedResult<NormalizedPost>> => {
    try {
        const { cursor, limit = 10 } = paginationParams;

        const posts = await prisma.post.findMany({
            where: {
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

        // Get repost counts and user reposts separately
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

export const GetPostById = async (user: UserPayload, id: string) => {
    try {
        if (!id || typeof id !== 'string') {
            logger.warn(`Invalid post ID: ${id}`);
            throw new BadRequestError('Invalid post ID');
        }

        const post = await prisma.post.findUnique({
            where: { id, deletedAt: null },
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

        if (!post) {
            return null;
        }

        // Get repost count and user repost status
        const repostCount = await prisma.post.count({
            where: {
                parentId: post.id,
                type: 'REPOST',
                deletedAt: null,
            },
        });

        const userRepost = await prisma.post.findFirst({
            where: {
                userId: user.id,
                parentId: post.id,
                type: 'REPOST',
                deletedAt: null,
            },
        });

        // Transform to normalized format
        const normalizedPost: NormalizedPost = {
            id: post.id,
            content: post.content,
            type: post.type,
            user_id: post.userId,
            parent_id: post.parentId,
            root_id: post.rootId,
            created_at: post.createdAt,
            is_liked: post.likes.length > 0,
            is_bookmarked: post.bookmarks.length > 0,
            is_reposted: !!userRepost,
            stats: {
                likes: post._count.likes,
                comments: post._count.children,
                reposts: repostCount,
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
        };

        return normalizedPost;
    } catch (error) {
        throw error;
    }
};

export const GetAllPostsByUser = async (
    user: UserPayload,
    paginationParams: CursorPaginationParams,
    targetUserId?: string
): Promise<PaginatedResult<NormalizedPost>> => {
    try {
        const { cursor, limit = 10 } = paginationParams;
        const userId = targetUserId || user.id;

        const posts = await prisma.post.findMany({
            where: {
                userId: userId,
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

        // Get repost counts and user reposts separately
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
