import { Router } from 'express';
import userRoutes from '../user/route';
import authRoutes from '../auth/route';
import postRoutes from '../post/route';
import { authenticateJWT } from '../middlewares/auth';


const router = Router();

router.use('/user', userRoutes); // /api/user
router.use('/auth', authRoutes); // /api/auth
router.use('/post', postRoutes); // /api/post

export default router;