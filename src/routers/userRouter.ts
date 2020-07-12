import { Router } from 'express';
import * as userControllers from '../lib/controllers/users';
import authMiddleware from '../lib/middleware/authMiddleware';

const router = Router();

router.post(`/signup`, userControllers.signupUser);
router.post(`/login`, userControllers.loginUser);
// router.get('/', authMiddleware, userControllers.getUsers);
router.get('/me', authMiddleware, userControllers.getUser);
router.patch('/me', authMiddleware, userControllers.updateUser);
router.delete('/me', authMiddleware, userControllers.deleteUser);

export default router;
