import { Request, Response } from 'express';
import User from '../../db/models/user.model';

export const getUser = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  try {
    const user = await User.find({ _id: req.params.id });

    if (!user)
      return res.status(400).send({
        error: 'This user does not exist.',
      });

    // res.status(200).send(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
