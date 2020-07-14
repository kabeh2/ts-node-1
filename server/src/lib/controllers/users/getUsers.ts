import { Request, Response } from 'express';
import User from '../../db/models/user.model';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();

    if (!user) {
      return res.status(400).send({
        error: 'There are no users.',
      });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
