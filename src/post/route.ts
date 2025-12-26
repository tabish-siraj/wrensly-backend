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
} from './controller';
import { createPostRateLimit } from '../middlewares/rateLimiter';

const router = Router();
router.post('/', createPostRateLimit, createPostController);
router.post('/:id/comment', createPostRateLimit, createCommentController);
router.post('/:id/quote', createPostRateLimit, createQuoteController);
router.post('/:id/repost', createPostRateLimit, createRepostController);
router.get('/', getAllPostsController);
router.get('/user/:userId', getAllPostsByUserController);
router.get('/:id', getPostByIdController);
router.delete('/:id', deletePostController);

export default router;
