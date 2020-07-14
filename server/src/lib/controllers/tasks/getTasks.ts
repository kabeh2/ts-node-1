import { Request, Response } from 'express';
import Task from '../../db/models/task.model';

export const getTasks = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const tasks = await Task.find({});

    if (!tasks) return res.status(400).send({ error: 'No tasks found.' });

    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send();
  }
};
