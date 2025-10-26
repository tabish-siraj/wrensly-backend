import { Router } from 'express';
import {
  loginUserController,
  refreshTokenController,
  forgotPasswordController,
  resetPasswordController,
} from './controller';

const router = Router();
router.post('/login', loginUserController);
router.post('/token/refresh', refreshTokenController);
router.post('/forgot-password', forgotPasswordController);
router.post('/reset-password', resetPasswordController);

export default router;
