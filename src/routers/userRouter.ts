import { Router } from 'express';
import * as userControllers from '../lib/controllers/users';

const router = Router();

router.post(`/signup`, userControllers.signupUser);
router.get('/', userControllers.getUsers);
router.get('/:id', userControllers.getUser);
router.patch('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

export default router;
