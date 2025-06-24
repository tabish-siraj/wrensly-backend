import { GetFeed } from "./service";
import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/response";

export const getFeedController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const feed = await GetFeed(user);
        res.status(200).json(successResponse("Feed retrieved successfully", feed, 200));
    } catch (err: any) {
        next(err);
    }
};