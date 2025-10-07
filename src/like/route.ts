import { Router } from 'express';
import {
  createLikeController,
  // getLikeByIdController,
  // getLikesByPostIdController,
  deleteLikeController,
} from './controller';

const router = Router();
router.post('/', createLikeController);
// router.get("/:id", getLikeByIdController);
// router.get("/post/:id", getLikesByPostIdController);
router.delete('/:id', deleteLikeController);

export default router;
