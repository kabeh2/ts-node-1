import { Request, Response } from 'express';
import User from '../../db/models/user.model';

export const updateUser: (
  req: Request,
  res: Response
) => Promise<void | Response> = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['username', 'email', 'password'];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid Update.' });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));

    await req.user.save();

    res.send(req.user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
