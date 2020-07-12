import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import User from '../db/models/user.model';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // make variable any due to jwt issues with ts
  const secret: any = process.env.TOKEN_SECRET;

  try {
    const tokenTemplate = <string>req.header('Authorization');
    const token = tokenTemplate.replace('Bearer ', '');

    const decoded = <any>jwt.verify(token, `${secret}`);

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) throw new Error('Unable to login.');

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send();
  }
};

export default authMiddleware;
