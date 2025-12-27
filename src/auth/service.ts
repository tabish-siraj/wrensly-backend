import crypto from 'crypto';
import prisma from '../lib/prisma';
import { comparePassword, hashPassword } from '../utils/hashing';
import {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/auth';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError, InternalServerError, AppError } from '../utils/errors';
import { sendPasswordResetEmail } from '../utils/email';

export const loginUser = async (email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new BadRequestError('Email and password are required');
    }

    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive', // Case insensitive search
        },
        isActive: true,
        isBanned: false,
      },
      include: {
        profile: true, // Include profile data
      },
    });

    if (!user) {
      logger.warn(`Login attempt with non-existent or inactive email: ${email}`);
      throw new NotFoundError('Invalid credentials');
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      logger.warn(`Invalid password for user: ${email}`);
      throw new BadRequestError('Invalid credentials');
    }

    const token = generateToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
    });

    // Return user data with snake_case variable names (Prisma properties remain camelCase)
    const user_data = {
      id: user.id,
      username: user.username,
      email: user.email,
      first_name: user.profile?.firstName,
      last_name: user.profile?.lastName,
      avatar: user.profile?.avatar,
      is_email_verified: user.isEmailVerified,
    };

    logger.info(`User logged in successfully: ${email}`);
    return { token, refresh_token: refreshToken, user: user_data };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    logger.error(`Unexpected error during login for ${email}:`, error);
    throw new InternalServerError('Login failed');
  }
};

export const refreshToken = async (token: string) => {
  try {
    // Verify the token and extract user information
    const userData = verifyRefreshToken(token);
    if (!userData) {
      logger.error(`Invalid refresh token`);
      throw new BadRequestError('Invalid token');
    }

    // Generate new tokens (rotate refresh token for security)
    const new_token = generateToken({ id: userData.id, email: userData.email });
    const new_refresh_token = generateRefreshToken({ id: userData.id, email: userData.email });

    logger.info(`Token refreshed for user: ${userData.email}`);
    return { token: new_token, refresh_token: new_refresh_token };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    logger.error('Unexpected error during token refresh:', error);
    throw new BadRequestError('Invalid token');
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
      include: {
        profile: true,
      },
    });

    if (!user) {
      logger.error(`User not found for password reset: ${email}`);
      throw new NotFoundError('User not found');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken,
        passwordResetExpires,
      },
    });

    // Send email to user with the reset token
    await sendPasswordResetEmail(
      user.profile?.firstName || 'User',
      user.email,
      resetToken
    );

    logger.info(`Password reset requested for user: ${email}`);
    return { message: 'Password reset link has been sent to your email.' };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    logger.error(`Unexpected error during password reset for ${email}:`, error);
    throw new InternalServerError('Password reset failed');
  }
};

export const resetPassword = async (token: string, password: string) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: { gt: new Date() },
      },
    });

    if (!user) {
      throw new BadRequestError(
        'Password reset token is invalid or has expired'
      );
    }

    const hashedPassword = await hashPassword(password);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    return { message: 'Password has been reset successfully.' };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    logger.error('Unexpected error during password reset:', error);
    throw new InternalServerError('Password reset failed');
  }
};
