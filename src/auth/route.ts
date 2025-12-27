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
router.post('/logout', (req, res) => {
  // Since we're using stateless JWT, logout is handled client-side
  // This endpoint exists for consistency and future token blacklisting
  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
    data: null,
    meta: {
      timestamp: new Date().toISOString(),
    },
  });
});
router.post('/token/refresh', authRateLimit, refreshTokenController);
router.post('/forgot-password', authRateLimit, forgotPasswordController);
router.post('/reset-password', authRateLimit, resetPasswordController);

export default router;
