import { Router } from 'express';
import { loginUserController, refreshTokenController } from './controller';

const router = Router();
router.post('/login', loginUserController);
router.post('/token/refresh', refreshTokenController); // Assuming you want to use the same controller for refresh token

export default router;
