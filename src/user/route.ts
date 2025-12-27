import { Router } from 'express';
import {
  getUserByEmailController,
  getUserByIDController,
  registerUserController,
  updateUserController,
  getMyUserController,
  getUserByUsernameController,
  verifyEmailController,
  resendVerifyEmailController,
} from './controller';
import { authenticateJWT } from '../middlewares/auth';
import { requireEmailVerification } from '../middlewares/emailVerification';

const router = Router();
router.post('/', registerUserController); // Create user
router.post('/resend-verify-email', resendVerifyEmailController); // Resend verification email
router.post('/verify-email', verifyEmailController); // Verify email
router.put('/:id', authenticateJWT, requireEmailVerification, updateUserController); // Update user by ID (requires verification)
router.get('/email/:email', authenticateJWT, getUserByEmailController); // Get user by email
router.get('/username/:username', authenticateJWT, getUserByUsernameController); // Get user by username
router.get('/me', authenticateJWT, getMyUserController); // Get current user profile (no verification required for basic profile access)
router.get('/:id', authenticateJWT, getUserByIDController); // Get user by ID

export default router;
