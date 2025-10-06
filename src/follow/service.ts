import prisma from '../lib/prisma';
import { FollowInterface, FollowSchema } from './schema';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError } from '../utils/errors';

export const CreateFollowUnfollow = async (
  user: any,
  payload: FollowInterface
) => {
  try {
    // Validate follow data against the schema
    const parsed = FollowSchema.safeParse(payload);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Follow validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    // Check if the followed user exists
    const followedUser = await prisma.user.findUnique({
      where: { id: parsed.data.following },
    });
    if (!followedUser) {
      logger.warn(
        `User you're trying to ${
          parsed.data.operation ? 'follow' : 'unfollow'
        } with ID ${parsed.data.following} not found`
      );
      throw new NotFoundError(
        `User you're trying to ${
          parsed.data.operation ? 'follow' : 'unfollow'
        } with ID ${parsed.data.following} not found`
      );
    }

    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: user.id,
        followingId: parsed.data.following,
      },
    });

    if (existingFollow && !existingFollow.deletedAt) {
      await prisma.follow.update({
        where: { id: existingFollow.id },
        data: { deletedAt: new Date() },
      });
      return 'unfollowed';
    } else if (existingFollow && existingFollow.deletedAt) {
      await prisma.follow.update({
        where: { id: existingFollow.id },
        data: { deletedAt: null },
      });
      return 'followed';
    } else {
      await prisma.follow.create({
        data: {
          followerId: user.id,
          followingId: parsed.data.following,
        },
      });
      return 'followed';
    }
  } catch (error) {
    logger.error(`Follow error: ${error}`);
    throw error;
  }
};

export const GetFollowsByUsername = async (user: any, username: string) => {
  try {
    // Validate the username format
    if (!username || typeof username !== 'string') {
      logger.warn(`Invalid username: ${username}`);
      throw new BadRequestError('Invalid username');
    }

    const foundUser = await prisma.user.findFirst({
      where: { username, deletedAt: null },
    });

    if (!foundUser) {
      logger.warn(`User with username ${username} not found`);
      throw new NotFoundError(`User with username ${username} not found`);
    }

    const follows = await prisma.follow.findMany({
      where: {
        followerId: foundUser.id,
        deletedAt: null,
      },
      select: {
        followingId: true,
      },
    });

    if (follows.length === 0) return [];

    const followingIds = follows.map((follow) => follow.followingId);

    const followingUsers = await prisma.user.findMany({
      where: {
        id: { 
          in: followingIds,
        },
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        Profile: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return followingUsers.map((user) => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        firstName: user.Profile?.firstName,
        lastName: user.Profile?.lastName,
        avatar: user.Profile?.avatar,
      };
    });
  } catch (error) {
    logger.error(`Get follows error: ${error}`);
    throw error;
  }
};

export const GetFollowersByUsername = async (user: any, username: string) => {
  try {
    // Validate the username format
    if (!username || typeof username !== 'string') {
      logger.warn(`Invalid username: ${username}`);
      throw new BadRequestError('Invalid username');
    }

    const foundUser = await prisma.user.findFirst({
      where: { username, deletedAt: null },
    });

    if (!foundUser) {
      logger.warn(`User with username ${username} not found`);
      throw new NotFoundError(`User with username ${username} not found`);
    }

    const follows = await prisma.follow.findMany({
      where: {
        followingId: foundUser.id,
        deletedAt: null,
      },
      select: {
        followerId: true,
      },
    });

    if (follows.length === 0) return [];

    const followerIds = follows.map((follow) => follow.followerId);

    const followerUsers = await prisma.user.findMany({
      where: {
        id: {
          in: followerIds,
        },
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        Profile: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return followerUsers.map((user) => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        firstName: user.Profile?.firstName,
        lastName: user.Profile?.lastName,
        avatar: user.Profile?.avatar,
      };
    });
  } catch (error) {
    logger.error(`Get followers error: ${error}`);
    throw error;
  }
};
