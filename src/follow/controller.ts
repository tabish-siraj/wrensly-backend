import { Request, Response, NextFunction } from 'express';
import {
  CreateFollowUnfollow,
  GetFollowsByUsername,
  GetFollowersByUsername,
} from './service';
import { successResponse } from '../utils/response';

export const followUnfollowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as any).user;
    const payload = req.body;
    const follow = await CreateFollowUnfollow(user, payload);
    res
      .status(200)
      .json(successResponse('Follow created successfully', follow, 200));
  } catch (err: any) {
    next(err);
  }
};

export const getFollowsByUsernameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as any).user;
    const username = req.params.username;
    const follow = await GetFollowsByUsername(user, username);
    res.status(200).json(successResponse('Follow model list', follow, 200));
  } catch (err: any) {
    next(err);
  }
};

export const getFollowersByUsernameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = (req as any).user;
    const username = req.params.username;
    const follow = await GetFollowersByUsername(user, username);
    res.status(200).json(successResponse('Follow model list', follow, 200));
  } catch (err: any) {
    next(err);
  }
};
