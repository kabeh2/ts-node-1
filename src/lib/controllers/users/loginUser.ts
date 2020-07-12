import { RequestHandler, Response } from 'express';
import User from '../../db/models/user.model';

export const loginUser: RequestHandler = async (
  { body },
  res
): Promise<void | Response> => {
  const { password, username, email } = body;
  try {
    const user = await User.findByCredentials(password, username, email);

    if (!user) return res.status(400).send('Unable to login.');

    const token = await user.generateToken();

    res.status(201).send({ user, token });
  } catch (error) {
    res
      .status(400)
      .send({ error, errorMessage: 'Incorrect username/password.' });
  }
};
