import { Request, Response, NextFunction } from "express";
import { CreatePost, DeletePost, GetPostById, GetPostsByUserId } from "./service";
import { successResponse } from "../utils/response";
/**
 * Controller to handle the creation of a new post.
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function for error handling
 */

export const createPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user; // Assuming user is set by the authenticateJWT middleware
        const post = await CreatePost(user, req.body);
        res.status(201).json(successResponse("Post created successfully", post, 201));
    } catch (err: any) {
        next(err.details);
    }
};

export const getPostByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user; // Assuming user is set by the authenticateJWT middleware
        const postId = req.params.id;
        const post = await GetPostById(user, postId);
        res.status(200).json(successResponse("Post retrieved successfully", post, 200));
    } catch (err: any) {
        next(err.details);
    }
}

export const getPostsByUserIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user; // Assuming user is set by the authenticateJWT middleware
        const userId = req.params.id;
        const posts = await GetPostsByUserId(user, userId);
        res.status(200).json(successResponse("Posts retrieved successfully", posts, 200));
    } catch (err: any) {
        next(err.details);
    }
};

export const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user; // Assuming user is set by the authenticateJWT middleware
        const postId = req.params.id;
        await DeletePost(user, postId);
        res.status(204).json(successResponse("Post deleted successfully", null, 204));
    } catch (err: any) {
        next(err.details);
    }
};