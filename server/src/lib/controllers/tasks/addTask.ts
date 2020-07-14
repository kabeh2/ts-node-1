import { Request, Response } from 'express';
import Task from '../../db/models/task.model';

export const addTask = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const task = new Task({ ...req.body, owner: req.user._id });

  if (!task) return res.status(400).send({ error: 'No tasks' });
  try {
    await task.save();

    res.status(201).send(task);
  } catch (error) {
    res.status(500).send();
  }
};
