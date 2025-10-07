import { Router } from 'express';
import {
  createBookmarkController,
  // getBookmarkByIdController,
  // getBookmarksByPostIdController,
  deleteBookmarkController,
} from './controller';

const router = Router();
router.post('/', createBookmarkController);
// router.get("/:id", getBookmarkByIdController);
// router.get("/post/:id", getBookmarksByPostIdController);
router.delete('/:id', deleteBookmarkController);

export default router;
