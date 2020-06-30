import { Request, Response } from 'express';
import Task from '../../db/models/task.model';

export const addTask = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const task = new Task(req.body);

    if (!task) return res.status(400).send({ error: 'No tasks' });

    await task.save();

    res.status(201).send(task);
  } catch (error) {
    res.status(500).send();
  }
};
