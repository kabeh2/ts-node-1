import { Router } from 'express';
import { addTask } from '../lib/controllers/tasks/addTask';

const router = Router();

router.post('/', addTask);

export default router;
