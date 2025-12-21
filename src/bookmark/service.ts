import { BookmarkSchema, BookmarkInterface } from './schema';
import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
} from '../utils/errors';
import { UserPayload } from '../types/express';

export const CreateBookmark = async (
  user: UserPayload,
  bookmarkPayload: BookmarkInterface
) => {
  const parsed = BookmarkSchema.safeParse(bookmarkPayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Bookmark validation failed: ${validationErrors}`);
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

    // Check if post is already bookmarked (if provided)
    if (parsed.data.is_bookmarked) {
      const alreadyBookmarked = await prisma.bookmark.findFirst({
        where: {
          postId: parsed.data.post_id,
          userId: user.id,
          // deletedAt: null
        },
      });
      if (alreadyBookmarked) {
        logger.warn(
          `Post with ID ${parsed.data.post_id} is already bookmarked by user ${user.id}`
        );
        throw new ForbiddenError(`You have already bookmarked this post`);
      }
      // Create the bookmark in the database
      const createdBookmark = await prisma.bookmark.create({
        data: {
          postId: parsed.data.post_id,
          userId: user.id,
        },
      });

      if (!createdBookmark) {
        logger.warn('Failed to create bookmark in the database');
        throw new InternalServerError('Failed to create bookmark');
      }

      return createdBookmark;
    }
    return;
  } catch (error) {
    throw error;
  }
};

export const DeleteBookmark = async (user: UserPayload, postId: string) => {
  if (!postId || typeof postId !== 'string') {
    logger.warn(`Invalid post ID: ${postId}`);
    throw new BadRequestError('Invalid post ID');
  }

  try {
    // Check if the post is already bookmarked
    const isBookmarked = await prisma.bookmark.findFirst({
      where: {
        postId: postId,
        userId: user.id,
        // deletedAt: null
      },
    });
    if (!isBookmarked) {
      logger.warn(
        `Bookmark with Post ID ${postId} not found for user ${user.id}`
      );
      throw new NotFoundError(
        `Bookmark with Post ID ${postId} not found for user ${user.id}`
      );
    }

    // Soft delete the bookmark by setting deletedAt TODO: Need to add deletedAt field in bookmark model
    // Hard delete the bookmark by deleting the record
    await prisma.bookmark.delete({
      where: {
        id: isBookmarked.id,
      },
    });
    return;
  } catch (error) {
    throw error;
  }
};

export const CreateDeleteBookmark = async (
  user: UserPayload,
  bookmarkPayload: BookmarkInterface
) => {
  const parsed = BookmarkSchema.safeParse(bookmarkPayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Bookmark validation failed: ${validationErrors}`);
    throw new BadRequestError(`${validationErrors}`);
  }

  try {
    if (parsed.data.is_bookmarked) {
      await CreateBookmark(user, parsed.data);
    } else {
      await DeleteBookmark(user, parsed.data.post_id);
    }
    return;
  } catch (error) {
    throw error;
  }
};
