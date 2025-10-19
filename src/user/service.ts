// src/services/users/service.ts
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
    // also get profile and followers/following count
    const fetchedUser = await prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with ID ${id} not found`);
      throw new NotFoundError({ id });
    }

    let isFollowing = false;
    const follow = await prisma.follow.findFirst({
      where: {
        followerId: user.id,
        followingId: id,
        deletedAt: null, // if you use soft deletes
      },
    });
    isFollowing = !!follow;

    return { ...toUserResponse(fetchedUser), isFollowing };
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
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with email ${email} not found`);
      throw new NotFoundError({ email });
    }

    let isFollowing = false;
    const follow = await prisma.follow.findFirst({
      where: {
        followerId: user.id,
        followingId: fetchedUser.id,
        deletedAt: null, // if you use soft deletes
      },
    });
    isFollowing = !!follow;

    return { ...toUserResponse(fetchedUser), isFollowing };
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
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
      },
    });
    if (!fetchedUser) {
      logger.warn(`User with username ${username} not found`);
      throw new NotFoundError({ username });
    }

    let isFollowing = false;
    let followingBy = false;
    const followBy = await prisma.follow.findFirst({
      where: {
        followerId: fetchedUser.id,
        followingId: user.id,
        deletedAt: null, // if you use soft deletes
      },
    });
    const following = await prisma.follow.findFirst({
      where: {
        followerId: user.id,
        followingId: fetchedUser.id,
        deletedAt: null, // if you use soft deletes
      },
    });
    isFollowing = !!following;
    followingBy = !!followBy;

    return { ...toUserResponse(fetchedUser), isFollowing, followingBy };
  } catch (error) {
    throw error;
  }
}
