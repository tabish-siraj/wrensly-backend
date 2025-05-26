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
            logger.warn(`Post validation failed: ${validationErrors}`);
            throw new BadRequestError(`${validationErrors}`);
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