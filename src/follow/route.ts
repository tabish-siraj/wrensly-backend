import { Router } from 'express';
import {
  followUnfollowController,
  getFollowsByUsernameController,
  getFollowersByUsernameController,
} from './controller';
import { followRateLimit } from '../middlewares/rateLimiter';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.post('/', followRateLimit, authenticateJWT, followUnfollowController);
router.get('/following/:username', authenticateJWT, getFollowsByUsernameController);
router.get('/followers/:username', authenticateJWT, getFollowersByUsernameController);

export default router;
