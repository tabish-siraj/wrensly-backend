import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';

export const CreateBookmark = async (user: UserPayload, postId: string) => {
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

    // Check if post is already bookmarked
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    if (existingBookmark) {
      logger.warn(
        `Post with ID ${postId} is already bookmarked by user ${user.id}`
      );
      throw new BadRequestError('Post already bookmarked');
    }

    // Create the bookmark in the database
    await prisma.bookmark.create({
      data: {
        postId,
        userId: user.id,
      },
    });

    return { is_bookmarked: true };
  } catch (error) {
    throw error;
  }
};

export const DeleteBookmark = async (user: UserPayload, postId: string) => {
  try {
    if (!postId || typeof postId !== 'string') {
      logger.warn(`Invalid post ID: ${postId}`);
      throw new BadRequestError('Invalid post ID');
    }

    // Check if the bookmark exists
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    if (!existingBookmark) {
      logger.warn(`Bookmark with Post ID ${postId} not found for user ${user.id}`);
      throw new NotFoundError('Bookmark not found');
    }

    // Delete the bookmark
    await prisma.bookmark.delete({
      where: {
        userId_postId: { userId: user.id, postId },
      },
    });

    return { is_bookmarked: false };
  } catch (error) {
    throw error;
  }
};
