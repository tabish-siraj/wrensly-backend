import { Request, Response, NextFunction } from 'express';
import { CreateBookmark, DeleteBookmark } from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const createBookmarkController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    // Handle both camelCase (from middleware transform) and snake_case
    const postId = req.body.postId || req.body.post_id;

    const result = await CreateBookmark(user, postId);
    res
      .status(200)
      .json(successResponse('Post bookmarked successfully', result));
  } catch (error) {
    next(error);
  }
};

export const deleteBookmarkController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    // Handle both camelCase and snake_case parameter names
    const postId = req.params.postId || req.params.post_id;

    const result = await DeleteBookmark(user, postId);
    res
      .status(200)
      .json(successResponse('Bookmark removed successfully', result));
  } catch (error) {
    next(error);
  }
};
