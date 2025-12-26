import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';

export const CreateLike = async (user: UserPayload, postId: string) => {
  try {
    if (!postId || typeof postId !== 'string') {
      logger.warn(`Invalid post ID: ${postId}`);
      throw new BadRequestError('Invalid post ID');
    }

    // Check if the post exists
    const post = await prisma.post.findUnique({
      where: { id: postId, deletedAt: null },
    });
    if (!post) {
      logger.warn(`Post with ID ${postId} not found`);
      throw new NotFoundError(`Post with ID ${postId} not found`);
    }

    // Check if post is already liked
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    if (existingLike) {
      logger.warn(
        `Post with ID ${postId} is already liked by user ${user.id}`
      );
      throw new BadRequestError('Post already liked');
    }

    // Create the like in the database
    await prisma.like.create({
      data: {
        postId,
        userId: user.id,
      },
    });

    return { is_liked: true };
  } catch (error) {
    throw error;
  }
};

export const DeleteLike = async (user: UserPayload, postId: string) => {
  try {
    if (!postId || typeof postId !== 'string') {
      logger.warn(`Invalid post ID: ${postId}`);
      throw new BadRequestError('Invalid post ID');
    }

    // Check if the like exists
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    if (!existingLike) {
      logger.warn(`Like with Post ID ${postId} not found for user ${user.id}`);
      throw new NotFoundError('Like not found');
    }

    // Delete the like
    await prisma.like.delete({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    return { is_liked: false };
  } catch (error) {
    throw error;
  }
};
