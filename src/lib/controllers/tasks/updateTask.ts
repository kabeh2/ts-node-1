import { RequestHandler } from 'express';
import Task from '../../db/models/task.model';

export const updateTask: RequestHandler = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description'];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate)
    return res
      .status(400)
      .send({ error: 'One of your update requests does not exist.' });

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) return res.status(404).send();

    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};
