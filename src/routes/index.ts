import { Router } from 'express';
import userRoutes from '../user/route';
import authRoutes from '../auth/route';
import postRoutes from '../post/route';
import commentRoutes from '../comment/route';
import feedRoutes from '../feed/route';
import followRoutes from '../follow/route';
import likeRoutes from '../like/route';
import bookmarkRoutes from '../bookmark/route';
import { authenticateJWT } from '../middlewares/auth';


const router = Router();

router.use('/user', userRoutes); // /api/user
router.use('/auth', authRoutes); // /api/auth
router.use('/post', authenticateJWT, postRoutes); // /api/post
router.use('/comment', authenticateJWT, commentRoutes); // /api/comment
router.use('/feed', authenticateJWT, feedRoutes); // /api/feed
router.use('/follow', authenticateJWT, followRoutes); // /api/follow
router.use('/like', authenticateJWT, likeRoutes); // /api/like
router.use('/bookmark', authenticateJWT, bookmarkRoutes); // /api/bookmark

export default router;