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

const router = Router();
router.post('/', registerUserController); // Create user
router.post('/resend-verify-email', resendVerifyEmailController); // Resend verification email
router.post('/verify-email', verifyEmailController); // Verify email
router.get('/email/:email', authenticateJWT, getUserByEmailController); // Get user by email
router.get('/username/:username', authenticateJWT, getUserByUsernameController); // Get user by username
router.get('/me', authenticateJWT, getMyUserController); // Get current user profile
router.put('/:id', authenticateJWT, updateUserController); // Update user by ID
router.get('/:id', authenticateJWT, getUserByIDController); // Get user by ID

export default router;
