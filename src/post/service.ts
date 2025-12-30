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

export const GetPostComments = async (
    user: UserPayload,
    postId: string,
    paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
    try {
        const { cursor, limit = 10 } = paginationParams;

        // Validate post exists
        const post = await prisma.post.findUnique({
            where: { id: postId, deletedAt: null },
            select: { id: true }
        });

        if (!post) {
            throw new NotFoundError('Post not found');
        }

        // Get top-level comments (direct replies to the post)
        const queryOptions: any = {
            where: {
                parentId: postId,
                type: 'COMMENT',
                deletedAt: null,
            },
            take: limit + 1,
            orderBy: { createdAt: 'asc' }, // Show oldest comments first
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
                // Include replies (2nd level comments)
                children: {
                    where: {
                        type: 'COMMENT',
                        deletedAt: null,
                    },
                    orderBy: { createdAt: 'asc' },
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
                            },
                        },
                        likes: {
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
            },
        };

        // Add cursor pagination for top-level comments
        if (cursor) {
            queryOptions.cursor = { id: cursor };
        }

        const comments = await prisma.post.findMany(queryOptions);

        // Transform comments with nested replies
        const transformedComments = comments.map((comment: any) => ({
            id: comment.id,
            content: comment.content,
            type: comment.type,
            user_id: comment.userId,
            parent_id: comment.parentId,
            root_id: comment.rootId,
            created_at: comment.createdAt,
            user: {
                id: comment.user.id,
                username: comment.user.username || '',
                first_name: comment.user.profile?.firstName || '',
                last_name: comment.user.profile?.lastName || '',
                avatar: comment.user.profile?.avatar || '',
            },
            stats: {
                likes: comment._count.likes,
                comments: comment._count.children, // Reply count
                reposts: 0, // Comments can't be reposted
            },
            is_liked: comment.likes.length > 0,
            is_bookmarked: false, // Comments can't be bookmarked
            is_reposted: false, // Comments can't be reposted
            // Include nested replies
            replies: comment.children.map((reply: any) => ({
                id: reply.id,
                content: reply.content,
                type: reply.type,
                user_id: reply.userId,
                parent_id: reply.parentId,
                root_id: reply.rootId,
                created_at: reply.createdAt,
                user: {
                    id: reply.user.id,
                    username: reply.user.username || '',
                    first_name: reply.user.profile?.firstName || '',
                    last_name: reply.user.profile?.lastName || '',
                    avatar: reply.user.profile?.avatar || '',
                },
                stats: {
                    likes: reply._count.likes,
                    comments: 0, // Replies don't have sub-replies in our 2-layer system
                    reposts: 0,
                },
                is_liked: reply.likes.length > 0,
                is_bookmarked: false,
                is_reposted: false,
                replies: [], // No nested replies for replies
            })),
        }));

        return createPaginatedResponse(transformedComments, limit, cursor);
    } catch (error) {
        logger.error(`Get comments error for post ${postId}:`, error);
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

// Optimized helper function to transform posts with batch queries
const transformPostsWithRepostData = async (
    posts: any[],
    user: UserPayload
): Promise<NormalizedPost[]> => {
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
    return posts.map((post) => {
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
                created_at: post.createdAt, // Use repost timestamp for ordering
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

        // Use optimized helper function
        const normalizedPosts = await transformPostsWithRepostData(posts, user);

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

        if (!post) {
            return null;
        }

        // Use optimized helper function for single post
        const normalizedPosts = await transformPostsWithRepostData([post], user);
        return normalizedPosts[0];
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

        // Use optimized helper function
        const normalizedPosts = await transformPostsWithRepostData(posts, user);

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
