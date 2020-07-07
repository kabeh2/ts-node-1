import { RequestHandler, Response } from 'express';
import Task from '../../db/models/task.model';

export const deleteTask: RequestHandler = async (
  req,
  res
): Promise<void | Response> => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(400).send({ error: 'No task to delete.' });

    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};
