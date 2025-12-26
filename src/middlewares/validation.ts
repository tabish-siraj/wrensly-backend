import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { errorResponse } from '../utils/response';

export const validateBody = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const validationErrors = error.flatten().fieldErrors;
                return res.status(400).json(
                    errorResponse('Validation failed', validationErrors)
                );
            }
            next(error);
        }
    };
};

export const validateQuery = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.query);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const validationErrors = error.flatten().fieldErrors;
                return res.status(400).json(
                    errorResponse('Query validation failed', validationErrors)
                );
            }
            next(error);
        }
    };
};

export const validateParams = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.params);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const validationErrors = error.flatten().fieldErrors;
                return res.status(400).json(
                    errorResponse('Parameter validation failed', validationErrors)
                );
            }
            next(error);
        }
    };
};

// Common validation schemas
export const PostIdSchema = z.object({
    postId: z.string().cuid('Invalid post ID format'),
});

export const UserIdSchema = z.object({
    userId: z.string().cuid('Invalid user ID format'),
});

export const UsernameSchema = z.object({
    username: z.string().min(1, 'Username is required'),
});

export const PaginationQuerySchema = z.object({
    cursor: z.string().cuid().optional(),
    limit: z.coerce.number().min(1).max(50).optional(),
});

export const CreatePostBodySchema = z.object({
    content: z.string().trim().min(1).max(280),
});

export const CreateCommentBodySchema = z.object({
    content: z.string().trim().min(1).max(280),
});

export const CreateQuoteBodySchema = z.object({
    content: z.string().trim().min(1).max(280),
});

export const CreateRepostBodySchema = z.object({
    // No content required for reposts
});

export const LikeBodySchema = z.object({
    postId: z.string().cuid('Invalid post ID format'),
});

export const BookmarkBodySchema = z.object({
    postId: z.string().cuid('Invalid post ID format'),
});

export const FollowBodySchema = z.object({
    following: z.string().cuid('Invalid user ID format'),
    operation: z.enum(['follow', 'unfollow']),
});