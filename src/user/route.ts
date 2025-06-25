import { Router } from 'express';
import {
    getUserByEmailController,
    getUserByIDController,
    registerUserController,
    updateUserController,
    // updateProfileController,
    // getProfileController,
    getMyUserController
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();
router.post('/', registerUserController);               // Create user
router.put('/:id', updateUserController);               // Update user by ID
// router.put('/profile/:id', updateProfileController);    // Update user profile by ID
router.get('/email/:email', getUserByEmailController);  // Get user by email
router.get('/me', authenticateJWT, getMyUserController); // Get current user profile
// router.get('/profile/:id', getProfileController);       // Get user profile by ID
router.get('/:id', getUserByIDController);              // Get user by ID

export default router;