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
    const likeData = req.body;

    const like = await CreateLike(user, likeData);
    res
      .status(201)
      .json(successResponse('Like created successfully', like, 201));
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
    const likeId = req.params.id;

    await DeleteLike(user, likeId);
    res
      .status(204)
      .json(successResponse('Like deleted successfully', null, 204));
  } catch (error) {
    next(error);
  }
};
