import { Router } from 'express';
import userRoutes from './users/route';

const router = Router();

router.use('/user', userRoutes); // /api/user

export default router;
// This file is responsible for defining the routes for the application.
// It imports the necessary modules and sets up the routes for the application.