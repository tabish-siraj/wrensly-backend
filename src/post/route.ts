import { Router } from 'express';
import {
    createPostController,
    getPostByIdController,
    getPostsByUserIdController,
    getPostsByUsernameController,
    deletePostController,
    getAllPostsController
} from './controller';

const router = Router();
router.post('/', createPostController);
router.get('/', getAllPostsController);
router.get('/:id', getPostByIdController);
router.get('/username/:username', getPostByIdController);
router.get('/user/:id', getPostsByUserIdController);
router.delete('/:id', deletePostController);

export default router;