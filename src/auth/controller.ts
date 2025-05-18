import { loginUser, refreshToken } from "./service";

import { Request, Response } from "express";
import { successResponse, errorResponse } from "../utils/response";
import logger from "../utils/logger";

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { token, refreshToken } = await loginUser(email, password);
        res.status(200).json(successResponse("Login successful", { token, refreshToken }));
    } catch (err: any) {
        logger.error(`loginUser failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse("Login failed", errorDetails));
    }
};

export const refreshTokenController = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const newToken = await refreshToken(token);
        res.status(200).json(successResponse("Token refreshed successfully", newToken));
    } catch (err: any) {
        logger.error(`refreshToken failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse("Token refresh failed", errorDetails));
    }
};