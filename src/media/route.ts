// Media upload routes
import { Router } from 'express';
import {
    generateUploadUrlController,
    confirmUploadController,
    deleteMediaController
} from './controller';
import { createPostRateLimit } from '../middlewares/rateLimiter';

const router = Router();

// Generate signed upload URL
router.post('/upload-url', createPostRateLimit, generateUploadUrlController);

// Confirm upload completion
router.post('/confirm-upload', confirmUploadController);

// Delete media file
router.delete('/delete', deleteMediaController);

export default router;