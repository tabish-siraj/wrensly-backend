import { Request, Response, NextFunction } from 'express';
import {
  CreatePost,
  DeletePost,
  GetPostById,
  GetPostsByUserId,
  GetPostsByUsername,
  GetAllPosts,
  ToggleRepost,
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

export const toggleRepostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const post = await ToggleRepost(user, req.body);
    res
      .status(201)
      .json(successResponse('Repost toggled successfully.', post, 201));
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

export const getPostsByUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const userId = req.params.id;
    const posts = await GetPostsByUserId(user, userId);
    res
      .status(200)
      .json(successResponse('Posts retrieved successfully', posts, 200));
  } catch (err) {
    next(err);
  }
};
export const getPostsByUsernameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const username = req.params.username;
    const posts = await GetPostsByUsername(user, username);
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
    const posts = await GetAllPosts(user);
    res
      .status(200)
      .json(successResponse('All posts retrieved successfully', posts, 200));
  } catch (err) {
    next(err);
  }
};
