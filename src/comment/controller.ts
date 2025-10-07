import { Request, Response, NextFunction } from 'express';
import {
  CreateComment,
  GetCommentById,
  GetCommentsByPostId,
  DeleteComment,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const createCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const commentData = req.body;

    const comment = await CreateComment(user, commentData);
    res
      .status(201)
      .json(successResponse('Comment created successfully', comment, 201));
  } catch (error) {
    next(error);
  }
};

export const getCommentByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const commentId = req.params.id;

    const comment = await GetCommentById(user, commentId);
    res
      .status(200)
      .json(successResponse('Comment retrieved successfully', comment, 200));
  } catch (error) {
    next(error);
  }
};

export const getCommentsByPostIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const postId = req.params.id;

    const comments = await GetCommentsByPostId(user, postId);
    res
      .status(200)
      .json(successResponse('Comments retrieved successfully', comments, 200));
  } catch (error) {
    next(error);
  }
};

export const deleteCommentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const commentId = req.params.id;

    await DeleteComment(user, commentId);
    res
      .status(204)
      .json(successResponse('Comment deleted successfully', null, 204));
  } catch (error) {
    next(error);
  }
};
