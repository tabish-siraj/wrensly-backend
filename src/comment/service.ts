import { CommentSchema, CommentInterface } from "./schema"
import prisma from "../lib/prisma";
import logger from "../utils/logger";
import { NotFoundError, BadRequestError, ForbiddenError, InternalServerError } from "../utils/errors";

export const CreateComment = async (user: any, comment: CommentInterface) => {
    const parsed = CommentSchema.safeParse(comment);
    if (!parsed.success) {
        // const validationErrors = parsed.error.errors.map(err => `${err.path.join('.')} - ${err.message}`).join(', ');
        const validationErrors = parsed.error.flatten().fieldErrors;
        logger.warn(`Comment validation failed: ${validationErrors}`);
        throw new BadRequestError(`${validationErrors}`);
    }
    try {
        // Check if the post exists
        const post = await prisma.post.findUnique({
            where: { id: comment.postId },
        });
        if (!post) {
            logger.warn(`Post with ID ${comment.postId} not found`);
            throw new NotFoundError(`Post with ID ${comment.postId} not found`);
        }

        // Check if parent comment exists (if provided)
        if (comment.parentId) {
            const parentComment = await prisma.comment.findUnique({
                where: { id: comment.parentId },
            });
            if (!parentComment) {
                logger.warn(`Parent comment with ID ${comment.parentId} not found`);
                throw new NotFoundError(`Parent comment with ID ${comment.parentId} not found`);
            }
        }

        // Create the comment in the database
        const createdComment = await prisma.comment.create({
            data: {
                content: parsed.data.content,
                postId: parsed.data.postId,
                parentId: parsed.data.parentId || null, // Ensure parentId is null if not provided
                userId: user.id, // Add userId as required by the schema
            },
        });

        if (!createdComment) {
            logger.warn('Failed to create comment in the database');
            throw new InternalServerError('Failed to create comment');
        }

        return createdComment;
    } catch (error) {
        throw error;
    }
}

export const GetCommentById = async (user: any, id: string) => {
    if (!id || typeof id !== 'string') {
        logger.warn(`Invalid comment ID: ${id}`);
        throw new BadRequestError('Invalid comment ID');
    }

    try {
        // Fetch the comment from the database
        const comment = await prisma.comment.findUnique({
            where: { id },
        });

        if (!comment) {
            logger.warn(`Comment with ID ${id} not found`);
            throw new NotFoundError(`Comment with ID ${id} not found`);
        }

        return comment;
    } catch (error) {
        throw error;
    }
}

export const GetCommentsByPostId = async (user: any, postId: string) => {
    if (!postId) {
        logger.warn(`Invalid post ID: ${postId}`);
        throw new BadRequestError('Invalid post ID');
    }

    try {
        // Fetch comments for the specified post
        const comments = await prisma.comment.findMany({
            where: { postId },
            orderBy: { createdAt: 'desc' }, // Optional: order by creation date
        });

        if (!comments || comments.length === 0) {
            logger.warn(`No comments found for post ID ${postId}`);
            throw new NotFoundError(`No comments found for post ID ${postId}`);
        }

        return comments;
    } catch (error) {
        throw error;
    }
}

export const DeleteComment = async (user: any, commentId: string) => {
    if (!commentId || typeof commentId !== 'string') {
        logger.warn(`Invalid comment ID: ${commentId}`);
        throw new BadRequestError('Invalid comment ID');
    }

    try {
        // Check if the comment exists
        const comment = await prisma.comment.findUnique({
            where: { id: commentId, userId: user.id, deletedAt: null }
        });
        if (!comment) {
            logger.warn(`Comment with ID ${commentId} not found or does not belong to the user`);
            throw new NotFoundError(`Comment not found.`);
        }

        // Soft delete the comment by setting deletedAt
        await prisma.comment.update({
            where: { id: commentId },
            data: { deletedAt: new Date() },
        });
        return;
    } catch (error) {
        throw error;
    }
}