import { Router } from 'express';
import { addTask } from '../lib/controllers/tasks/addTask';
import { getTask } from './../lib/controllers/tasks/getTask';
import { getTasks } from '../lib/controllers/tasks/getTasks';
import { updateTask } from './../lib/controllers/tasks/updateTask';
import { deleteTask } from '../lib/controllers/tasks/deleteTask';

const router = Router();

router.post('/', addTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
