import { Router } from 'express';
import { registerUserController, updateUserController } from '../../controllers/users/controller';



const router = Router();
router.post('/', registerUserController);
router.put('/:id', updateUserController);

export default router;
