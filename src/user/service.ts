// src/services/users/service.ts
import { randomBytes } from 'crypto';
import prisma from '../lib/prisma';
import {
  UserInterface,
  UserSchema,
  UserUpdateInterface,
  UserUpdateSchema,
} from './schema';
import { hashPassword } from '../utils/hashing';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  AlreadyExistsError,
  InternalServerError,
} from '../utils/errors';
import { omitEmptyFields, toUserResponse } from './helper';
import { UserPayload } from '../types/express';
import { sendEmailVerificationEmail } from '../utils/email';

export async function createUser(user: UserInterface) {
  // Validate user data against the schema
  const parsed = UserSchema.safeParse(user);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`User validation failed: ${JSON.stringify(validationErrors)}`);
    throw new BadRequestError(validationErrors);
  }

  // Check if the user already exists by email
  const existingUser = await prisma.user.findUnique({
    where: { email: parsed.data.email },
  });
  if (existingUser) {
    logger.warn(`User with email ${parsed.data.email} already exists`);
    throw new AlreadyExistsError({ email: parsed.data.email });
  }

  // Hash the password before storing it
  const hashedPassword = await hashPassword(parsed.data.password);
  try {
    const createdUser = await prisma.user.create({
      data: {
        ...parsed.data,
        password: hashedPassword,
      },
    });
    if (!createdUser) {
      logger.warn('User creation failed');
      throw new InternalServerError('Failed to create user');
    }

    // Initialize profile with empty data
    const userId = createdUser.id;
    await prisma.profile.create({
      data: { userId: userId },
    });

    // Generate a verification token
    const token = randomBytes(32).toString('hex');
    const emailVerificationToken = token;
    const emailVerificationExpires = new Date(Date.now() + 3600000 * 6); // 6 hour

    await prisma.user.update({
      where: { id: createdUser.id },
      data: {
        emailVerificationToken: emailVerificationToken,
        emailVerificationExpires: emailVerificationExpires,
      },
    });

    // Send the verification email
    await sendEmailVerificationEmail(
      createdUser.username || 'User',
      createdUser.email,
      emailVerificationToken
    );

    return createdUser;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(
  user: UserPayload,
  id: string,
  payload: UserUpdateInterface
) {
  const parsed = UserUpdateSchema.safeParse(payload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(
      `User update validation failed: ${JSON.stringify(validationErrors)}`
    );
    throw new BadRequestError(validationErrors);
  }

  try {
    const username = parsed.data.username;
    delete parsed.data.username;

    // Validate that the username is provided
    if (username) {
      // check if the username is already taken
      const existingUser = await prisma.user.findFirst({
        where: { username: username, NOT: { id: id } },
      });
      if (existingUser) {
        logger.warn(`User with username ${username} already exists`);
        throw new AlreadyExistsError({ username });
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          username: username,
        },
      });
      if (!updatedUser) {
        logger.warn(`User with ID ${id} not found`);
        throw new NotFoundError(`User with ID ${id} not found`);
      }
    }

    const profile = omitEmptyFields(parsed.data);

    await prisma.profile.update({
      where: { userId: id },
      data: {
        ...profile,
      },
    });
    return;
  } catch (error) {
    throw error;
  }
}

export async function getUserById(user: UserPayload, id: string) {
  try {
    if (user.id !== id) {
      logger.warn(
        `Unauthorized access attempt by user ID ${user.id} to user ID ${id}`
      );
      throw new UnauthorizedError('You are not authorized to update this user');
    }
    // Get user with profile
    const fetchedUser = await prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with ID ${id} not found`);
      throw new NotFoundError({ id });
    }

    // Get followers and following counts separately to respect soft deletes
    const [followersCount, followingCount, follow] = await Promise.all([
      prisma.follow.count({
        where: {
          followingId: id,
          deletedAt: null,
        },
      }),
      prisma.follow.count({
        where: {
          followerId: id,
          deletedAt: null,
        },
      }),
      prisma.follow.findFirst({
        where: {
          followerId: user.id,
          followingId: id,
          deletedAt: null,
        },
      }),
    ]);

    const isFollowing = !!follow;

    // Add counts to the user object
    const userWithCounts = {
      ...fetchedUser,
      _count: {
        followers: followersCount,
        following: followingCount,
      },
    };

    return { ...toUserResponse(userWithCounts), isFollowing };
  } catch (error) {
    throw error;
  }
}

export async function getUserByEmail(user: UserPayload, email: string) {
  // case insensitive search
  email = email.toLowerCase();
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with email ${email} not found`);
      throw new NotFoundError({ email });
    }

    // Get followers and following counts separately to respect soft deletes
    const [followersCount, followingCount, follow] = await Promise.all([
      prisma.follow.count({
        where: {
          followingId: fetchedUser.id,
          deletedAt: null,
        },
      }),
      prisma.follow.count({
        where: {
          followerId: fetchedUser.id,
          deletedAt: null,
        },
      }),
      prisma.follow.findFirst({
        where: {
          followerId: user.id,
          followingId: fetchedUser.id,
          deletedAt: null,
        },
      }),
    ]);

    const isFollowing = !!follow;

    // Add counts to the user object
    const userWithCounts = {
      ...fetchedUser,
      _count: {
        followers: followersCount,
        following: followingCount,
      },
    };

    return { ...toUserResponse(userWithCounts), isFollowing };
  } catch (error) {
    throw error;
  }
}

export async function getUserByUsername(user: UserPayload, username: string) {
  // case insensitive search
  username = username.toLowerCase();
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { username },
      include: {
        profile: true,
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with username ${username} not found`);
      throw new NotFoundError({ username });
    }

    // Get followers and following counts separately to respect soft deletes
    const [followersCount, followingCount, followBy, following] = await Promise.all([
      prisma.follow.count({
        where: {
          followingId: fetchedUser.id,
          deletedAt: null,
        },
      }),
      prisma.follow.count({
        where: {
          followerId: fetchedUser.id,
          deletedAt: null,
        },
      }),
      prisma.follow.findFirst({
        where: {
          followerId: fetchedUser.id,
          followingId: user.id,
          deletedAt: null,
        },
      }),
      prisma.follow.findFirst({
        where: {
          followerId: user.id,
          followingId: fetchedUser.id,
          deletedAt: null,
        },
      }),
    ]);

    const isFollowing = !!following;
    const followingBy = !!followBy;

    // Add counts to the user object
    const userWithCounts = {
      ...fetchedUser,
      _count: {
        followers: followersCount,
        following: followingCount,
      },
    };

    return { ...toUserResponse(userWithCounts), isFollowing, followingBy };
  } catch (error) {
    throw error;
  }
}

export async function verifyEmail(token: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: {
          gt: new Date(),
        },
      },
    });
    if (!user) {
      logger.warn(`Invalid or expired email verification token`);
      throw new BadRequestError('Invalid or expired token');
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpires: null,
      },
    });

    return;
  } catch (error) {
    throw error;
  }
}

export async function resendVerifyEmail(username: string, email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      logger.warn(`User with email ${email} not found`);
      throw new NotFoundError({ email });
    }

    if (user.isEmailVerified) {
      logger.warn(`Email ${email} is already verified`);
      throw new BadRequestError('Email is already verified');
    }

    // Generate a new verification token
    const token = randomBytes(32).toString('hex');
    const emailVerificationToken = token;
    const emailVerificationExpires = new Date(Date.now() + 3600000 * 6); // 6 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerificationToken: emailVerificationToken,
        emailVerificationExpires: emailVerificationExpires,
      },
    });

    // Send the verification email
    await sendEmailVerificationEmail(
      user.username || 'User',
      user.email,
      emailVerificationToken
    );

    return;
  } catch (error) {
    throw error;
  }
}
