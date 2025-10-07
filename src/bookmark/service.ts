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
      where: { id: parsed.data.postId },
    });
    if (!post) {
      logger.warn(`Post with ID ${parsed.data.postId} not found`);
      throw new NotFoundError(`Post with ID ${parsed.data.postId} not found`);
    }

    // Check if post is already bookmarked (if provided)
    if (parsed.data.isBookmarked) {
      const alreadyBookmarked = await prisma.bookmark.findFirst({
        where: {
          postId: parsed.data.postId,
          userId: user.id,
          // deletedAt: null
        },
      });
      if (alreadyBookmarked) {
        logger.warn(
          `Post with ID ${parsed.data.postId} is already bookmarked by user ${user.id}`
        );
        throw new ForbiddenError(`You have already bookmarked this post`);
      }
      // Create the bookmark in the database
      const createdBookmark = await prisma.bookmark.create({
        data: {
          postId: parsed.data.postId,
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
    if (parsed.data.isBookmarked) {
      await CreateBookmark(user, parsed.data);
    } else {
      await DeleteBookmark(user, parsed.data.postId);
    }
    return;
  } catch (error) {
    throw error;
  }
};

// export const GetCommentById = async (user: UserPayload, id: string) => {
//     if (!id || typeof id !== 'string') {
//         logger.warn(`Invalid comment ID: ${id}`);
//         throw new BadRequestError('Invalid comment ID');
//     }

//     try {
//         // Fetch the comment from the database
//         const comment = await prisma.comment.findUnique({
//             where: { id },
//         });

//         if (!comment) {
//             logger.warn(`Comment with ID ${id} not found`);
//             throw new NotFoundError(`Comment with ID ${id} not found`);
//         }

//         return comment;
//     } catch (error) {
//         throw error;
//     }
// }

// export const GetCommentsByPostId = async (user: UserPayload, postId: string) => {
//     if (!postId) {
//         logger.warn(`Invalid post ID: ${postId}`);
//         throw new BadRequestError('Invalid post ID');
//     }

//     try {
//         // Fetch comments for the specified post
//         const comments = await prisma.comment.findMany({
//             where: { postId },
//             orderBy: { createdAt: 'desc' }, // Optional: order by creation date
//         });

//         if (!comments || comments.length === 0) {
//             logger.warn(`No comments found for post ID ${postId}`);
//             throw new NotFoundError(`No comments found for post ID ${postId}`);
//         }

//         return comments;
//     } catch (error) {
//         throw error;
//     }
// }
