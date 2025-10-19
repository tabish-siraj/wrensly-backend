import { Router } from 'express';
import {
  getUserByEmailController,
  getUserByIDController,
  registerUserController,
  updateUserController,
  getMyUserController,
  getUserByUsernameController,
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();
router.post('/', registerUserController); // Create user
router.put('/:id', authenticateJWT, updateUserController); // Update user by ID
router.get('/email/:email', authenticateJWT, getUserByEmailController); // Get user by email
router.get('/username/:username', authenticateJWT, getUserByUsernameController); // Get user by username
router.get('/me', authenticateJWT, getMyUserController); // Get current user profile
router.get('/:id', authenticateJWT, getUserByIDController); // Get user by ID

export default router;
