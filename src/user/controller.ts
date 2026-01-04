// src/controllers/users/controller.ts
import { Request, Response, NextFunction } from 'express';
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  getUserByUsername,
  verifyEmail,
  resendVerifyEmail,
  getSuggestedUsers,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError } from '../utils/errors';

export const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(successResponse('User created successfully', user));
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  const { id } = req.params;
  const user = req.user;

  try {
    const fetchedUser = await updateUser(user, id, req.body);
    res
      .status(200)
      .json(successResponse('User updated successfully', fetchedUser));
  } catch (err) {
    next(err);
  }
};

export const getMyUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  const { id } = req.user;
  const user = req.user;

  try {
    const fetchedUser = await getUserById(user, id);
    res
      .status(200)
      .json(successResponse('User retrieved successfully', fetchedUser));
  } catch (err) {
    next(err);
  }
};

export const getUserByIDController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  const { id } = req.params;
  const user = req.user;

  try {
    const fetchedUser = await getUserById(user, id);
    res
      .status(200)
      .json(successResponse('User retrieved successfully', fetchedUser));
  } catch (err) {
    next(err);
  }
};

export const getUserByEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  const { email } = req.params;
  const user = req.user;

  try {
    const fetchedUser = await getUserByEmail(user, email);
    res
      .status(200)
      .json(successResponse('User retrieved successfully', fetchedUser));
  } catch (err) {
    next(err);
  }
};

export const getUserByUsernameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }
  const { username } = req.params;
  const user = req.user;

  try {
    const fetchedUser = await getUserByUsername(user, username);
    res
      .status(200)
      .json(successResponse('User retrieved successfully', fetchedUser));
  } catch (err) {
    next(err);
  }
};

export const verifyEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;

  try {
    if (typeof token !== 'string') {
      throw new UnauthorizedError('Invalid token');
    }
    await verifyEmail(token);
    res.status(200).json(successResponse('Email verified successfully', null));
  } catch (err) {
    next(err);
  }
};

export const resendVerifyEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email } = req.body;

  try {
    await resendVerifyEmail(username, email);
    res
      .status(200)
      .json(successResponse('Verification email resent successfully', null));
  } catch (err) {
    next(err);
  }
};

export const getSuggestedUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new UnauthorizedError('You must be logged in to perform this action');
  }

  const user = req.user;
  const { cursor, limit } = req.query;
  const paginationParams = {
    cursor: cursor as string | undefined,
    limit: limit ? parseInt(limit as string) : 10,
  };

  try {
    const result = await getSuggestedUsers(user, paginationParams);
    res
      .status(200)
      .json(successResponse('Suggested users retrieved successfully', result.data, result.meta));
  } catch (err) {
    next(err);
  }
};
