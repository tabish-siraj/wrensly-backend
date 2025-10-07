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
    const feed = await GetFeed(req.user);
    res
      .status(200)
      .json(successResponse('Feed retrieved successfully', feed, 200));
  } catch (err) {
    next(err);
  }
};
