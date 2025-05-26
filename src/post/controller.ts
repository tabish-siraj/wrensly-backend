import { Request, Response, NextFunction } from "express";
import { CreatePost } from "./service";
import { successResponse } from "../utils/response";
/**
 * Controller to handle the creation of a new post.
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function for error handling
 */

export const createPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await CreatePost(req.body);
        res.status(201).json(successResponse("Post created successfully", post, 201));
    } catch (err: any) {
        next(err);
    }
};