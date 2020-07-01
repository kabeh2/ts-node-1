import { Router } from 'express';
import { addTask } from '../lib/controllers/tasks/addTask';
import { getTasks } from '../lib/controllers/tasks/getTasks';

const router = Router();

router.post('/', addTask);
router.get('/', getTasks);

export default router;
