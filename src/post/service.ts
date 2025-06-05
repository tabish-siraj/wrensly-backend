import prisma from "../lib/prisma";
import { PostSchema, PostInterface } from "./schema";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, UnauthorizedError, InternalServerError } from "../utils/errors";

export const CreatePost = async (user: any, post: PostInterface) => {
    try {
        // Validate post data against the schema
        const parsed = PostSchema.safeParse(post);
        if (!parsed.success) {
            // const validationErrors = parsed.error.errors.map(err => `${err.path.join('.')} - ${err.message}`).join(', ');
            const validationErrors = parsed.error.flatten().fieldErrors;
            logger.warn(`Post validation failed: ${JSON.stringify(validationErrors)}`);
            throw new BadRequestError(validationErrors);
        }

        if (post.parentId) {
            // Check if the parent post exists
            const parentPost = await prisma.post.findUnique({
                where: { id: post.parentId },
            });
            if (!parentPost) {
                logger.warn(`Parent post with ID ${post.parentId} not found`);
                throw new NotFoundError(`Parent post with ID ${post.parentId} not found`);
            }
        }

        // Create the post in the database
        const createdPost = await prisma.post.create({
            data: {
                content: parsed.data.content,
                parentId: parsed.data.parentId || null, // Ensure parentId is null if not provided
                userId: user.id, // Add userId as required by the schema
            },
        });

        if (!createdPost) {
            logger.warn('Failed to create post in the database');
            throw new InternalServerError('Failed to create post');
        }

        return createdPost;
    } catch (error) {
        throw error;
    }
}

export const GetPostById = async (user: any, id: string) => {
    try {
        // Validate the ID format
        if (!id || typeof id !== 'string') {
            logger.warn(`Invalid post ID: ${id}`);
            throw new BadRequestError('Invalid post ID');
        }

        // Fetch the post from the database
        const post = await prisma.post.findUnique({
            where: { id, deletedAt: null }, // Ensure we only fetch non-deleted posts
            include: {
                user: true, // Include user details if needed
                Comment: true
            }
        });

        if (!post) {
            logger.warn(`Post with ID ${id} not found`);
            throw new NotFoundError(`Post with ID ${id} not found`);
        }

        return post;
    } catch (error) {
        throw error;
    }
}

export const GetPostsByUserId = async (user: any, userId: string) => {
    try {
        // Validate the user ID format
        if (!userId || typeof userId !== 'string') {
            logger.warn(`Invalid user ID: ${userId}`);
            throw new BadRequestError('Invalid user ID');
        }

        // Fetch posts by user ID
        const posts = await prisma.post.findMany({
            where: { userId, deletedAt: null }, // Ensure we only fetch non-deleted posts
            orderBy: { createdAt: 'desc' }, // Optional: order by creation date
        });

        if (!posts || posts.length === 0) {
            logger.warn(`No posts found for user ID ${userId}`);
            throw new NotFoundError(`No posts found for user ID ${userId}`);
        }

        return posts;
    } catch (error) {
        throw error;
    }
}

export const DeletePost = async (user: any, postId: string) => {
    try {
        // Validate the post ID format
        if (!postId || typeof postId !== 'string') {
            logger.warn(`Invalid post ID: ${postId}`);
            throw new BadRequestError('Invalid post ID');
        }

        // Fetch the post to check ownership
        const post = await prisma.post.findUnique({
            where: { id: postId, userId: user.id, deletedAt: null }, // Ensure we only fetch non-deleted posts
        });

        if (!post) {
            logger.warn(`Post with ID ${postId} not found`);
            throw new NotFoundError(`Post with ID ${postId} not found`);
        }

        await prisma.post.update({
            where: { id: postId },
            data: { deletedAt: new Date() }, // Soft delete the post
        });

        return;
    } catch (error) {
        throw error;
    }
}

// TEMPORARY
export const GetAllPosts = async (user: any) => {
    try {
        // Fetch all posts from the database
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' }, // Optional: order by creation date
        });

        if (!posts || posts.length === 0) {
            logger.warn('No posts found');
            throw new NotFoundError('No posts found');
        }

        return posts;
    } catch (error) {
        throw error;
    }
}