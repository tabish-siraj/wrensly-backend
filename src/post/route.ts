import { Router } from 'express';
import {
  createPostController,
  getPostByIdController,
  getPostsByUserIdController,
  getPostsByUsernameController,
  deletePostController,
  getAllPostsController,
} from './controller';
import { authenticate } from '../middlewares/auth';

const router = Router();
router.post('/', authenticate, createPostController);
router.get('/', getAllPostsController);
router.get('/:id', getPostByIdController);
router.get('/username/:username', getPostsByUsernameController);
router.get('/user/:id', getPostsByUserIdController);
router.delete('/:id', authenticate, deletePostController);

export default router;
