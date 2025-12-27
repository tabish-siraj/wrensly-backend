import { Router } from 'express';
import {
  followUnfollowController,
  getFollowsByUsernameController,
  getFollowersByUsernameController,
} from './controller';
import { followRateLimit } from '../middlewares/rateLimiter';

const router = Router();

// Apply authentication to all follow routes
router.post('/', followRateLimit, followUnfollowController);
router.get('/following/:username', getFollowsByUsernameController);
router.get('/followers/:username', getFollowersByUsernameController);

export default router;