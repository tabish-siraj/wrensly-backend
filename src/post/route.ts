import { Router } from 'express';
import {
  createPostController,
  getPostByIdController,
  getPostsByUserIdController,
  getPostsByUsernameController,
  deletePostController,
  getAllPostsController,
  toggleRepostController
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();
router.post('/', authenticateJWT, createPostController);
router.post('/repost', authenticateJWT, toggleRepostController)
router.get('/', getAllPostsController);
router.get('/:id', getPostByIdController);
router.get('/username/:username', getPostsByUsernameController);
router.get('/user/:id', getPostsByUserIdController);
router.delete('/:id', authenticateJWT, deletePostController);

export default router;