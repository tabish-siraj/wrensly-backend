import { Request, Response, NextFunction } from 'express';
import {
  loginUser,
  refreshToken,
  forgotPassword,
  resetPassword,
} from './service';
import { successResponse } from '../utils/response';
import { LoginSchema, ForgotPasswordSchema, ResetPasswordSchema, RefreshTokenSchema } from './schema';

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = LoginSchema.parse(req.body);
    const result = await loginUser(validatedData.email, validatedData.password);
    res
      .status(200)
      .json(successResponse('Login successful', result));
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
    const validatedData = RefreshTokenSchema.parse(req.body);
    const result = await refreshToken(validatedData.token);
    res
      .status(200)
      .json(successResponse('Token refreshed successfully', result));
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
    const validatedData = ForgotPasswordSchema.parse(req.body);
    const result = await forgotPassword(validatedData.email);
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
    const validatedData = ResetPasswordSchema.parse(req.body);
    const result = await resetPassword(validatedData.token, validatedData.password);
    res.status(200).json(successResponse(result.message, null));
  } catch (err) {
    next(err);
  }
};
