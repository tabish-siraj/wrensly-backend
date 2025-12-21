import { Request, Response, NextFunction } from 'express';
import {
  CreatePost,
  CreateComment,
  CreateQuote,
  CreateRepost,
  DeletePost,
  GetAllPostsByUser,
  GetPostById,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const createPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const post = await CreatePost(user, req.body);
    res
      .status(201)
      .json(successResponse('Post created successfully', post, 201));
  } catch (err) {
    next(err);
  }
};

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
    const parent_id = req.params.id;
    const post = await CreateComment(user, { ...req.body, parent_id });
    res
      .status(201)
      .json(successResponse('Comment created successfully', post, 201));
  } catch (err) {
    next(err);
  }
};

export const createQuoteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const parent_id = req.params.id;
    const post = await CreateQuote(user, { ...req.body, parent_id });
    res
      .status(201)
      .json(successResponse('Quote created successfully', post, 201));
  } catch (err) {
    next(err);
  }
};

export const createRepostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const parent_id = req.params.id;
    const post = await CreateRepost(user, { parent_id });
    res
      .status(201)
      .json(successResponse('Repost created successfully', post, 201));
  } catch (err) {
    next(err);
  }
};

export const getPostByIdController = async (
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
    const post = await GetPostById(user, postId);
    res
      .status(200)
      .json(successResponse('Post retrieved successfully', post, 200));
  } catch (err) {
    next(err);
  }
};

export const getAllPostsByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const posts = await GetAllPostsByUser(user);
    res
      .status(200)
      .json(successResponse('Posts retrieved successfully', posts, 200));
  } catch (err) {
    next(err);
  }
};

export const deletePostController = async (
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
    await DeletePost(user, postId);
    res
      .status(204)
      .json(successResponse('Post deleted successfully', null, 204));
  } catch (err) {
    next(err);
  }
};
