import { Router } from 'express';
import {
    createPostController,
    getPostByIdController,
    getPostsByUserIdController,
    deletePostController
} from './controller';

const router = Router();
router.post('/', createPostController);
router.get('/:id', getPostByIdController);
router.get('/user/:id', getPostsByUserIdController);
router.delete('/:id', deletePostController);

export default router;