import { Request, Response, NextFunction } from 'express';
import {
  CreatePost,
  CreateComment,
  CreateQuote,
  CreateRepost,
  DeletePost,
  GetAllPostsByUser,
  GetPostById,
  GetAllPosts,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';
import { parsePaginationParams } from '../utils/pagination';

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
      .json(successResponse('Post created successfully', post));
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
      .json(successResponse('Comment created successfully', post));
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
      .json(successResponse('Quote created successfully', post));
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

    // Determine if this was a create or undo based on deletedAt
    const message = post.deletedAt
      ? 'Repost undone successfully'
      : 'Repost created successfully';

    res
      .status(201)
      .json(successResponse(message, post));
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
      .json(successResponse('Post retrieved successfully', post));
  } catch (err) {
    next(err);
  }
};

export const getAllPostsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const paginationParams = parsePaginationParams(req.query);
    const result = await GetAllPosts(user, paginationParams);
    res
      .status(200)
      .json(successResponse('Posts retrieved successfully', result.data, result.meta));
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
    const userId = req.params.userId;
    const paginationParams = parsePaginationParams(req.query);
    const result = await GetAllPostsByUser(user, paginationParams, userId);
    res
      .status(200)
      .json(successResponse('Posts retrieved successfully', result.data, result.meta));
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
      .status(200)
      .json(successResponse('Post deleted successfully', null));
  } catch (err) {
    next(err);
  }
};
