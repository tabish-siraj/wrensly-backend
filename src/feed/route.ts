import { Router } from 'express';

import {
    getFeedController
} from './controller';

const router = Router();
router.get('/', getFeedController);

export default router;