import { Request, Response, NextFunction } from 'express';
import { CreateLike, DeleteLike } from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const createLikeController = async (
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

    const result = await CreateLike(user, postId);
    res
      .status(200)
      .json(successResponse('Post liked successfully', result));
  } catch (error) {
    next(error);
  }
};

export const deleteLikeController = async (
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
    const postId = req.params.post_id;

    const result = await DeleteLike(user, postId);
    res
      .status(200)
      .json(successResponse('Post unliked successfully', result));
  } catch (error) {
    next(error);
  }
};
