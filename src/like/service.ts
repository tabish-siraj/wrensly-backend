import { LikeSchema, LikeInterface } from './schema';
import prisma from '../lib/prisma';
import logger from '../utils/logger';
import {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
} from '../utils/errors';

export const CreateLike = async (user: any, likePayload: LikeInterface) => {
  const parsed = LikeSchema.safeParse(likePayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Like validation failed: ${validationErrors}`);
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

    // Check if post is already liked (if provided)
    if (parsed.data.isLiked) {
      const alreadyLiked = await prisma.like.findFirst({
        where: {
          postId: parsed.data.postId,
          userId: user.id,
          // deletedAt: null
        },
      });
      if (alreadyLiked) {
        logger.warn(
          `Post with ID ${parsed.data.postId} is already liked by user ${user.id}`
        );
        throw new ForbiddenError(`You have already liked this post`);
      }
      // Create the like in the database
      const createdLike = await prisma.like.create({
        data: {
          postId: parsed.data.postId,
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

export const DeleteLike = async (user: any, postId: string) => {
  if (!postId || typeof postId !== 'string') {
    logger.warn(`Invalid post ID: ${postId}`);
    throw new BadRequestError('Invalid post ID');
  }

  try {
    // Check if the post is already liked
    const isLiked = await prisma.like.findFirst({
      where: {
        postId: postId,
        userId: user.id,
        // deletedAt: null
      },
    });
    if (!isLiked) {
      logger.warn(`Like with Post ID ${postId} not found for user ${user.id}`);
      throw new NotFoundError(
        `Like with Post ID ${postId} not found for user ${user.id}`
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
  user: any,
  likePayload: LikeInterface
) => {
  const parsed = LikeSchema.safeParse(likePayload);
  if (!parsed.success) {
    const validationErrors = parsed.error.flatten().fieldErrors;
    logger.warn(`Like validation failed: ${validationErrors}`);
    throw new BadRequestError(`${validationErrors}`);
  }

  try {
    if (parsed.data.isLiked) {
      await CreateLike(user, parsed.data);
    } else {
      await DeleteLike(user, parsed.data.postId);
    }
    return;
  } catch (error) {
    throw error;
  }
};

// export const GetCommentById = async (user: any, id: string) => {
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

// export const GetCommentsByPostId = async (user: any, postId: string) => {
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
