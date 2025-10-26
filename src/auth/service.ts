import crypto from 'crypto';
import prisma from '../lib/prisma';
import { comparePassword, hashPassword } from '../utils/hashing';
import {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/auth';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError } from '../utils/errors';
import { sendPasswordResetEmail } from '../utils/email';

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive', // Case insensitive search
        },
      },
    });

    if (!user) {
      logger.error(`User not found: ${email}`);
      throw new NotFoundError('User not found');
    }

    // Assuming you have a function to compare passwords
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      logger.error(`Invalid password for user: ${email}`);
      throw new BadRequestError('Invalid password');
    }

    // Generate a token for the user
    const token = generateToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
    });
    return { token, refreshToken };
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (token: string) => {
  try {
    // Verify the token and extract user information
    const userData = verifyRefreshToken(token);
    if (!userData) {
      logger.error(`Invalid token: ${token}`);
      throw new BadRequestError('Invalid token');
    }

    // Generate a new token
    const newToken = generateToken({ id: userData.id, email: userData.email });
    return { token: newToken };
  } catch (error) {
    throw error;
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
    await sendPasswordResetEmail(user.email, resetToken);

    logger.info(`Password reset requested for user: ${email}`);
    return { message: 'Password reset link has been sent to your email.' };
  } catch (error) {
    throw error;
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
    throw error;
  }
};
