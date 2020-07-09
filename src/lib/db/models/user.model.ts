import { model, Model, Schema } from 'mongoose';
import validator from 'validator';

import { IUserDocument } from './IUserDocument.interface';

export interface IUser extends IUserDocument {}

export interface IUserModel extends Model<IUser> {}

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
// userSchema.methods.toJSON = function():IUser {
//     const user = this;

//     const userObject: IUser = user.toObject();

//     delete userObject.password;
//     delete userObject.tokens;

//     return userObject;
// }

// Hash password

// Generate Tokens

// Find Login Credentials

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export default User;
