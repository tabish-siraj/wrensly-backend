import { Router } from 'express';
import {
    getUserByEmailController,
    getUserByIDController,
    registerUserController,
    updateUserController
} from './controller';

const router = Router();
router.post('/', registerUserController);           // Create user
router.put('/:id', updateUserController);           // Update user by ID
router.get('/email/:email', getUserByEmailController); // Get user by email
router.get('/:id', getUserByIDController);          // Get user by ID

export default router;