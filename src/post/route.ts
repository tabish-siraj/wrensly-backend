import { Router } from 'express';
import {
  createPostController,
  getPostByIdController,
  deletePostController,
  getAllPostsByUserController,
  createCommentController,
  createQuoteController,
  createRepostController,
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();
router.post('/', authenticateJWT, createPostController);
router.post('/:id/comment', authenticateJWT, createCommentController);
router.post('/:id/quote', authenticateJWT, createQuoteController);
router.post('/:id/repost', authenticateJWT, createRepostController);
router.get('/', authenticateJWT, getAllPostsByUserController);
router.get('/:id', getPostByIdController);
router.delete('/:id', authenticateJWT, deletePostController);

export default router;
