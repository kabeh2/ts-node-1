import { Request, Response } from 'express';
import Task from '../../db/models/task.model';

export const getTask = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(400).send({ error: 'No task found.' });

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send();
  }
};
