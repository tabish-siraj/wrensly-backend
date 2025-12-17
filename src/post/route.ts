import { Router } from 'express';
import {
  createPostController,
  getPostByIdController,
  deletePostController,
  getAllPostsByUserController,
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();
router.post('/', authenticateJWT, createPostController);
router.get('/', authenticateJWT, getAllPostsByUserController);
router.get('/:id', getPostByIdController);
router.delete('/:id', authenticateJWT, deletePostController);

export default router;
