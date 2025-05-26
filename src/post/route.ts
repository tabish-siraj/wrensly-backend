import { Router } from 'express';
import {
    createPostController
} from './controller';

const router = Router();
router.post('/', createPostController);


export default router;