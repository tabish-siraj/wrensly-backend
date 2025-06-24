import { Request, Response, NextFunction } from "express";
import { CreateFollowUnfollow } from "./service";
import { successResponse } from "../utils/response";

export const followUnfollowController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;
        const payload = req.body;
        const follow = await CreateFollowUnfollow(user, payload);
        res.status(200).json(successResponse("Follow created successfully", follow, 200));
    } catch (err: any) {
        next(err);
    }
};