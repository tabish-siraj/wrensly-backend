import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/errors';
import prisma from '../lib/prisma';
import logger from '../utils/logger';

export const requireEmailVerification = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (!req.user) {
            throw new UnauthorizedError('Authentication required');
        }

        // Fetch user from database to get latest email verification status
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { isEmailVerified: true, email: true },
        });

        if (!user) {
            throw new UnauthorizedError('User not found');
        }

        if (!user.isEmailVerified) {
            logger.warn(`Unverified user attempted to access protected route: ${user.email}`);
            throw new UnauthorizedError('Email verification required. Please check your email and verify your account.');
        }

        next();
    } catch (error) {
        next(error);
    }
};