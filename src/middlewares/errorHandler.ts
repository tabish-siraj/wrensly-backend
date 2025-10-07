import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { errorResponse } from '../utils/response';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction // next is required for Express to recognize this as an error handler
): void => {
  // It's good practice to log the error for debugging purposes
  console.error(err);

  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json(errorResponse(err.message, err.error || null, err.statusCode));
  } else if (err instanceof Error) {
    // Handle generic Error instances
    res.status(500).json(errorResponse('Internal Server Error', err.message));
  } else {
    // Handle cases where a non-Error was thrown
    res
      .status(500)
      .json(errorResponse('An unexpected internal server error occurred', err));
  }
};
