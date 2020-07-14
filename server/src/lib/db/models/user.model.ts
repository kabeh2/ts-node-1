import jwt from 'jsonwebtoken';
import { NextFunction } from 'express';
import { model, Model, Schema, HookNextFunction } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

import { IUserDocument } from '../../../interfaces/IUserDocument';

export interface IUser extends IUserDocument {
  generateToken(): Promise<string>;
}

export interface IUserModel extends Model<IUser> {
  findByCredentials: (
    password: string,
    email?: string,
    username?: string
  ) => Promise<IUser>;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
    validate(value: string): any {
      if (!validator.isEmail(value)) {
        throw new Error('Not a valid email.');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value: string): any {
      if (value.includes('password')) {
        throw new Error("Password can not contain the word 'password'.");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});

// Hide password and tokens
userSchema.methods.toJSON = function (): IUser {
  const user = this;

  const userObject: IUser = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// Find Login Credentials
userSchema.statics.findByCredentials = async (
  password: string,
  username?: string,
  email?: string
): Promise<IUser> => {
  const user: IUser | null = await User.findOne(
    email !== undefined ? { email } : { username }
  );

  if (!user) throw new Error('Unable to login.');

  const isMatch: boolean = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error('Unable to login.');

  return user;
};

// Generate Tokens
userSchema.methods.generateToken = async function (): Promise<string> {
  const user = this;
  const secret = process.env.TOKEN_SECRET;

  const token = jwt.sign({ _id: user._id.toString() }, `${secret}`);

  user.tokens = [...user.tokens, { token }];

  user.save();

  return token;
};

// Hash password
userSchema.pre<IUser>('save', async function (
  this: IUser,
  next: HookNextFunction
) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export default User;
