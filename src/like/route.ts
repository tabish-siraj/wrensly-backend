import { Router } from 'express';
import {
  createLikeController,
  deleteLikeController,
} from './controller';

const router = Router();
router.post('/', createLikeController);
router.delete('/:postId', deleteLikeController);
router.delete('/:post_id', deleteLikeController); // Support snake_case parameter

export default router;
