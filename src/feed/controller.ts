import { GetFeed } from './service';
import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';
import { parsePaginationParams } from '../utils/pagination';

export const getFeedController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const paginationParams = parsePaginationParams(req.query);
    const result = await GetFeed(req.user, paginationParams);
    res
      .status(200)
      .json(successResponse('Feed retrieved successfully', result.data, result.meta));
  } catch (err) {
    next(err);
  }
};
