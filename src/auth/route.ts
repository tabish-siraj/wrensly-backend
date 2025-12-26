import { Router } from 'express';
import {
  loginUserController,
  refreshTokenController,
  forgotPasswordController,
  resetPasswordController,
} from './controller';
import { authRateLimit } from '../middlewares/rateLimiter';

const router = Router();
router.post('/login', authRateLimit, loginUserController);
router.post('/token/refresh', authRateLimit, refreshTokenController);
router.post('/forgot-password', authRateLimit, forgotPasswordController);
router.post('/reset-password', authRateLimit, resetPasswordController);

export default router;
