import { Request, Response, NextFunction } from 'express';
import {
  loginUser,
  refreshToken,
  forgotPassword,
  resetPassword,
} from './service';
import { successResponse } from '../utils/response';

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const { token, refreshToken } = await loginUser(email, password);
    res
      .status(200)
      .json(successResponse('Login successful', { token, refreshToken }));
  } catch (err) {
    next(err);
  }
};

export const refreshTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.body;
    const newToken = await refreshToken(token);
    res
      .status(200)
      .json(successResponse('Token refreshed successfully', newToken));
  } catch (err) {
    next(err);
  }
};

export const forgotPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const result = await forgotPassword(email);
    res.status(200).json(successResponse(result.message, null));
  } catch (err) {
    next(err);
  }
};

export const resetPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, newPassword } = req.body;
    const result = await resetPassword(token, newPassword);
    res.status(200).json(successResponse(result.message, null));
  } catch (err) {
    next(err);
  }
};
