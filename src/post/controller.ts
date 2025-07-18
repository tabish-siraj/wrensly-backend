import { Request, Response, NextFunction } from "express";
import { CreatePost, DeletePost, GetPostById, GetPostsByUserId, GetPostsByUsername, GetAllPosts } from "./service";
import { successResponse } from "../utils/response";

export const createPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const post = await CreatePost(user, req.body);
        res.status(201).json(successResponse("Post created successfully", post, 201));
    } catch (err: any) {
        next(err);
    }
};

export const getPostByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const postId = req.params.id;
        const post = await GetPostById(user, postId);
        res.status(200).json(successResponse("Post retrieved successfully", post, 200));
    } catch (err: any) {
        next(err);
    }
}

export const getPostsByUserIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const userId = req.params.id;
        const posts = await GetPostsByUserId(user, userId);
        res.status(200).json(successResponse("Posts retrieved successfully", posts, 200));
    } catch (err: any) {
        next(err);
    }
};
export const getPostsByUsernameController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const username = req.params.username;
        const posts = await GetPostsByUsername(user, username);
        res.status(200).json(successResponse("Posts retrieved successfully", posts, 200));
    } catch (err: any) {
        next(err);
    }
};

export const deletePostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const postId = req.params.id;
        await DeletePost(user, postId);
        res.status(204).json(successResponse("Post deleted successfully", null, 204));
    } catch (err: any) {
        next(err);
    }
};

export const getAllPostsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const posts = await GetAllPosts(user);
        res.status(200).json(successResponse("All posts retrieved successfully", posts, 200));
    } catch (err: any) {
        next(err);
    }
}