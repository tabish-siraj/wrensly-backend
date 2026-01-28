import { Router } from 'express';
import {
  loginUserController,
  refreshTokenController,
  forgotPasswordController,
  resetPasswordController,
} from './controller';
import { authRateLimit } from '../middlewares/rateLimiter';
import { validateBody } from '../middlewares/validation';
import {
  LoginSchema,
  RefreshTokenSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from './schema';

const router = Router();
router.post('/login', authRateLimit, validateBody(LoginSchema), loginUserController);
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
router.post(
  '/token/refresh',
  authRateLimit,
  validateBody(RefreshTokenSchema),
  refreshTokenController
);
router.post(
  '/forgot-password',
  authRateLimit,
  validateBody(ForgotPasswordSchema),
  forgotPasswordController
);
router.post(
  '/reset-password',
  authRateLimit,
  validateBody(ResetPasswordSchema),
  resetPasswordController
);

export default router;
