import { Router } from 'express';
import userRoutes from '../user/route';
import authRoutes from '../auth/route';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.use('/user', userRoutes); // /api/user
router.use('/auth', authRoutes); // /api/auth

export default router;