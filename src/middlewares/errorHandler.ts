import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors";
import { errorResponse } from "../utils/response";

export const globalErrorHandler = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(err);

    if (err instanceof AppError) {
        res
            .status(err.statusCode)
            .json(errorResponse(err.message, err.details, err.statusCode));
    } else {
        res
            .status(500)
            .json(errorResponse("Internal Server Error", (err as Error).message));
    }
};