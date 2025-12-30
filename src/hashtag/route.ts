import { Router } from 'express';
import {
    getTrendingHashtagsController,
    getPostsByHashtagController,
    searchHashtagsController,
    getHashtagDetailsController,
} from './controller';

const router = Router();

// Get trending hashtags
router.get('/trending', getTrendingHashtagsController);

// Search hashtags
router.get('/search', searchHashtagsController);

// Get hashtag details
router.get('/:hashtag', getHashtagDetailsController);

// Get posts by hashtag
router.get('/:hashtag/posts', getPostsByHashtagController);

export default router;