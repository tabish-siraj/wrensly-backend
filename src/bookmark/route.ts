import { Router } from 'express';
import {
  createBookmarkController,
  deleteBookmarkController,
} from './controller';

const router = Router();
router.post('/', createBookmarkController);
router.delete('/:postId', deleteBookmarkController);
router.delete('/:post_id', deleteBookmarkController); // Support snake_case parameter

export default router;
