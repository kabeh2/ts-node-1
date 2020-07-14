import { Request, Response } from 'express';
import User from '../../db/models/user.model';

export const signupUser = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const user = new User(req.body);

  try {
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
