import { Request, Response, NextFunction } from 'express';
import { loginUser, refreshToken } from './service';
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
  } catch (err: any) {
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
  } catch (err: any) {
    next(err);
  }
};
