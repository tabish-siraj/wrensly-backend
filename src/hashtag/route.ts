import { Router } from 'express';
import {
    getTrendingHashtagsController,
    getPostsByHashtagController,
    searchHashtagsController,
    getHashtagDetailsController,
} from './controller';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

// Get trending hashtags (public)
router.get('/trending', getTrendingHashtagsController);

// Search hashtags (public)
router.get('/search', searchHashtagsController);

// Get hashtag details (public)
router.get('/:hashtag', getHashtagDetailsController);

// Get posts by hashtag (requires auth)
router.get('/:hashtag/posts', authenticateJWT, getPostsByHashtagController);

export default router;