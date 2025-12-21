import { LikeSchema, LikeInterface } from './schema';
import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';

export const CreateLike = async (
  user: UserPayload,
  likePayload: LikeInterface
) => {
  const parsed = LikeSchema.safeParse(likePayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Like validation failed: ${validationErrors}`);
    throw new BadRequestError(`${validationErrors}`);
  }
  try {
    // Check if the post exists
    const post = await prisma.post.findUnique({
      where: { id: parsed.data.post_id },
    });
    if (!post) {
      logger.warn(`Post with ID ${parsed.data.post_id} not found`);
      throw new NotFoundError(`Post with ID ${parsed.data.post_id} not found`);
    }

    // Check if post is already liked (if provided)
    if (parsed.data.is_liked) {
      const alreadyLiked = await prisma.like.findFirst({
        where: {
          postId: parsed.data.post_id,
          userId: user.id,
          // deletedAt: null
        },
      });
      if (alreadyLiked) {
        logger.warn(
          `Post with ID ${parsed.data.post_id} is already liked by user ${user.id}`
        );
        throw new ForbiddenError(`You have already liked this post`);
      }
      // Create the like in the database
      const createdLike = await prisma.like.create({
        data: {
          postId: parsed.data.post_id,
          userId: user.id,
        },
      });

      if (!createdLike) {
        logger.warn('Failed to create like in the database');
        throw new InternalServerError('Failed to create like');
      }

      return createdLike;
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const DeleteLike = async (user: UserPayload, post_id: string) => {
  if (!post_id || typeof post_id !== 'string') {
    logger.warn(`Invalid post ID: ${post_id}`);
    throw new BadRequestError('Invalid post ID');
  }

  try {
    // Check if the post is already liked
    const isLiked = await prisma.like.findFirst({
      where: {
        postId: post_id,
        userId: user.id,
        // deletedAt: null
      },
    });
    if (!isLiked) {
      logger.warn(`Like with Post ID ${post_id} not found for user ${user.id}`);
      throw new NotFoundError(
        `Like with Post ID ${post_id} not found for user ${user.id}`
      );
    }

    // Soft delete the like by setting deletedAt TODO: Need to add deletedAt field in like model
    // Hard delete the like by deleting the record
    await prisma.like.delete({
      where: {
        id: isLiked.id,
      },
    });
    return;
  } catch (error) {
    throw error;
  }
};

export const CreateDeleteLike = async (
  user: UserPayload,
  likePayload: LikeInterface
) => {
  const parsed = LikeSchema.safeParse(likePayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Like validation failed: ${validationErrors}`);
    throw new BadRequestError(`${validationErrors}`);
  }

  try {
    if (parsed.data.is_liked) {
      await CreateLike(user, parsed.data);
    } else {
      await DeleteLike(user, parsed.data.post_id);
    }
    return;
  } catch (error) {
    throw error;
  }
};
