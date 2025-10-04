import { Request, Response, NextFunction } from "express";
import { CreateBookmark, DeleteBookmark } from "./service";
import { successResponse } from "../utils/response";

export const createBookmarkController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const bookmarkData = req.body;

        const bookmark = await CreateBookmark(user, bookmarkData);
        res.status(201).json(successResponse("Bookmark created successfully", bookmark, 201));
    } catch (error) {
        next(error);
    }
};


export const deleteBookmarkController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const bookmarkId = req.params.id;

        await DeleteBookmark(user, bookmarkId);
        res.status(204).json(successResponse("Bookmark deleted successfully", null, 204));
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
