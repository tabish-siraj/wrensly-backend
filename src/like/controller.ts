import { Request, Response, NextFunction } from "express";
import { CreateLike, DeleteLike } from "./service";
import { successResponse } from "../utils/response";

export const createLikeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const likeData = req.body;

        const like = await CreateLike(user, likeData);
        res.status(201).json(successResponse("Like created successfully", like, 201));
    } catch (error) {
        next(error);
    }
};


export const deleteLikeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const likeId = req.params.id;

        await DeleteLike(user, likeId);
        res.status(204).json(successResponse("Like deleted successfully", null, 204));
    } catch (error) {
        next(error);
    }
};

// export const getCommentByIdController = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = (req as any).user;
//         const commentId = req.params.id;

//         const comment = await GetCommentById(user, commentId);
//         res.status(200).json(successResponse("Comment retrieved successfully", comment, 200));
//     } catch (error) {
//         next(error);
//     }
// };

// export const getCommentsByPostIdController = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = (req as any).user;
//         const postId = req.params.id;

//         const comments = await GetCommentsByPostId(user, postId);
//         res.status(200).json(successResponse("Comments retrieved successfully", comments, 200));
//     } catch (error) {
//         next(error);
//     }
// };
