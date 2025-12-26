import { Request, Response, NextFunction } from 'express';
import {
  CreateFollowUnfollow,
  GetFollowsByUsername,
  GetFollowersByUsername,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';
import { parsePaginationParams } from '../utils/pagination';

export const followUnfollowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  try {
    const user = req.user;
    const payload = req.body;
    const result = await CreateFollowUnfollow(user, payload);
    res
      .status(200)
      .json(successResponse(`User ${result} successfully`, { operation: result }));
  } catch (err) {
    next(err);
  }
};

export const getFollowsByUsernameController = async (
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
    const paginationParams = parsePaginationParams(req.query);
    const result = await GetFollowsByUsername(user, username, paginationParams);
    res.status(200).json(successResponse('Following list retrieved successfully', result.data, result.meta));
  } catch (err) {
    next(err);
  }
};

export const getFollowersByUsernameController = async (
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
    const paginationParams = parsePaginationParams(req.query);
    const result = await GetFollowersByUsername(user, username, paginationParams);
    res.status(200).json(successResponse('Followers list retrieved successfully', result.data, result.meta));
  } catch (err) {
    next(err);
  }
};
