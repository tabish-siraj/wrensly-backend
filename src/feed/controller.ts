import { GetFeed } from './service';
import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const getFeedController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    // Parse pagination parameters from the query string, with defaults
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;

    // Call the service with the user and pagination details
    const feed = await GetFeed(req.user, page, limit);
    res
      .status(200)
      .json(successResponse('Feed retrieved successfully', feed, 200));
  } catch (err) {
    next(err);
  }
};
