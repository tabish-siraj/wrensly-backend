import prisma from '../lib/prisma';
import { FollowInterface, FollowSchema } from './schema';
import logger from '../utils/logger';
import { NotFoundError, BadRequestError } from '../utils/errors';
import { UserPayload } from '../types/express';
import { CursorPaginationParams, createPaginatedResponse, PaginatedResult } from '../utils/pagination';

export const CreateFollowUnfollow = async (
  user: UserPayload,
  payload: FollowInterface
) => {
  try {
    const parsed = FollowSchema.safeParse(payload);
    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      logger.warn(
        `Follow validation failed: ${JSON.stringify(validationErrors)}`
      );
      throw new BadRequestError(validationErrors);
    }

    const followedUser = await prisma.user.findUnique({
      where: { id: parsed.data.following },
    });
    if (!followedUser) {
      logger.warn(
        `User you're trying to ${parsed.data.operation === 'follow' ? 'follow' : 'unfollow'} with ID ${parsed.data.following} not found`
      );
      throw new NotFoundError(
        `User you're trying to ${parsed.data.operation === 'follow' ? 'follow' : 'unfollow'} with ID ${parsed.data.following} not found`
      );
    }

    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: user.id,
        followingId: parsed.data.following,
      },
    });

    if (parsed.data.operation === 'follow') {
      if (existingFollow && !existingFollow.deletedAt) {
        throw new BadRequestError('Already following this user');
      } else if (existingFollow && existingFollow.deletedAt) {
        await prisma.follow.update({
          where: { id: existingFollow.id },
          data: { deletedAt: null },
        });
      } else {
        await prisma.follow.create({
          data: {
            followerId: user.id,
            followingId: parsed.data.following,
          },
        });
      }
      return 'followed';
    } else if (parsed.data.operation === 'unfollow') {
      if (!existingFollow || existingFollow.deletedAt) {
        throw new BadRequestError('Not following this user');
      }
      await prisma.follow.update({
        where: { id: existingFollow.id },
        data: { deletedAt: new Date() },
      });
      return 'unfollowed';
    }

    throw new BadRequestError('Invalid operation');
  } catch (error) {
    logger.error(`Follow error: ${error}`);
    throw error;
  }
};

export const GetFollowsByUsername = async (
  _user: UserPayload,
  username: string,
  paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
  try {
    const { cursor, limit = 10 } = paginationParams;

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
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        following: {
          select: {
            id: true,
            username: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    const transformedFollows = follows.map((follow) => ({
      id: follow.id,
      user: {
        id: follow.following.id,
        username: follow.following.username,
        firstName: follow.following.profile?.firstName || '',
        lastName: follow.following.profile?.lastName || '',
        avatar: follow.following.profile?.avatar || '',
      },
      createdAt: follow.createdAt,
    }));

    return createPaginatedResponse(transformedFollows, limit, cursor);
  } catch (error) {
    logger.error(`Get follows error: ${error}`);
    throw error;
  }
};

export const GetFollowersByUsername = async (
  _user: UserPayload,
  username: string,
  paginationParams: CursorPaginationParams
): Promise<PaginatedResult<any>> => {
  try {
    const { cursor, limit = 10 } = paginationParams;

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
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        follower: {
          select: {
            id: true,
            username: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    const transformedFollows = follows.map((follow) => ({
      id: follow.id,
      user: {
        id: follow.follower.id,
        username: follow.follower.username,
        firstName: follow.follower.profile?.firstName || '',
        lastName: follow.follower.profile?.lastName || '',
        avatar: follow.follower.profile?.avatar || '',
      },
      createdAt: follow.createdAt,
    }));

    return createPaginatedResponse(transformedFollows, limit, cursor);
  } catch (error) {
    logger.error(`Get followers error: ${error}`);
    throw error;
  }
};
