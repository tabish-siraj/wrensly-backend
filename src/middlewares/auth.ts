// middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/errors';
import { UserPayload } from '../types/express';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Authorization header is missing or malformed', 401);
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;

    // Type guard to ensure the decoded payload is an object and not a string
    if (typeof decoded === 'string') {
      throw new AppError('Invalid token payload', 403);
    }

    req.user = decoded; // Now TypeScript knows decoded is a UserPayload object
    next();
  } catch (error) {
    // Catch JWT errors (like expiration) and our custom errors
    const errorMessage =
      error instanceof jwt.JsonWebTokenError
        ? 'Forbidden: Invalid token'
        : (error as Error).message;
    const statusCode = error instanceof AppError ? error.statusCode : 403;
    next(new AppError(errorMessage, statusCode, error));
  }
};
