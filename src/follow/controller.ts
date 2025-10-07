import { Request, Response, NextFunction } from 'express';
import {
  CreateFollowUnfollow,
  GetFollowsByUsername,
  GetFollowersByUsername,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

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
    const follow = await CreateFollowUnfollow(user, payload);
    res
      .status(200)
      .json(successResponse('Follow created successfully', follow, 200));
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
    const follow = await GetFollowsByUsername(user, username);
    res.status(200).json(successResponse('Follow model list', follow, 200));
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
    const follow = await GetFollowersByUsername(user, username);
    res.status(200).json(successResponse('Follow model list', follow, 200));
  } catch (err) {
    next(err);
  }
};
