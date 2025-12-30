import { Router } from 'express';
import {
    searchAllController,
    searchPostsController,
    searchUsersController,
    searchHashtagsController,
    getSearchSuggestionsController,
} from './controller';

const router = Router();

// Unified search across all content types
router.get('/', searchAllController);

// Search specific content types
router.get('/posts', searchPostsController);
router.get('/users', searchUsersController);
router.get('/hashtags', searchHashtagsController);

// Get search suggestions/autocomplete
router.get('/suggestions', getSearchSuggestionsController);

export default router;