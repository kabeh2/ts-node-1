import { Request, Response } from 'express';
import User from '../../db/models/user.model';

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res
        .status(400)
        .send({ error: 'User does not exist. Can not delete.' });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
