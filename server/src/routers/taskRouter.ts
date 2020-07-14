import { Router } from 'express';
import { addTask } from '../lib/controllers/tasks/addTask';
import { getTask } from './../lib/controllers/tasks/getTask';
import { getTasks } from '../lib/controllers/tasks/getTasks';
import { updateTask } from './../lib/controllers/tasks/updateTask';
import { deleteTask } from '../lib/controllers/tasks/deleteTask';
import authMiddleware from '../lib/middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, addTask);
router.get('/', authMiddleware, getTasks);
router.get('/:id', authMiddleware, getTask);
router.patch('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;
