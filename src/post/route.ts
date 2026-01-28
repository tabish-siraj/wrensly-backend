import { Router } from 'express';
import {
  createPostController,
  getPostByIdController,
  deletePostController,
  getAllPostsByUserController,
  getAllPostsController,
  createCommentController,
  createQuoteController,
  createRepostController,
  getPostCommentsController,
  getLikedPostsByUserController,
} from './controller';
import { createPostRateLimit } from '../middlewares/rateLimiter';
import {
  validateBody,
  validateQuery,
  PaginationQuerySchema,
  CreatePostBodySchema,
  CreateCommentBodySchema,
  CreateQuoteBodySchema,
  CreateRepostBodySchema,
} from '../middlewares/validation';

const router = Router();
router.post(
  '/',
  createPostRateLimit,
  validateBody(CreatePostBodySchema),
  createPostController
);
router.post(
  '/:id/comment',
  createPostRateLimit,
  validateBody(CreateCommentBodySchema),
  createCommentController
);
router.post(
  '/:id/quote',
  createPostRateLimit,
  validateBody(CreateQuoteBodySchema),
  createQuoteController
);
router.post(
  '/:id/repost',
  createPostRateLimit,
  validateBody(CreateRepostBodySchema),
  createRepostController
);
router.get('/', validateQuery(PaginationQuerySchema), getAllPostsController);
router.get(
  '/user/:userId',
  validateQuery(PaginationQuerySchema),
  getAllPostsByUserController
);
router.get(
  '/user/:userId/likes',
  validateQuery(PaginationQuerySchema),
  getLikedPostsByUserController
);
router.get('/:id', getPostByIdController);
router.get(
  '/:id/comments',
  validateQuery(PaginationQuerySchema),
  getPostCommentsController
);
router.delete('/:id', deletePostController);

export default router;
