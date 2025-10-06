import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { errorResponse } from '../utils/response';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json(errorResponse(err.message, err.error || null, err.statusCode));
  } else {
    res.status(500).json(errorResponse('Internal Server Error', err));
  }
};
