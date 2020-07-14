import { ObjectId } from 'mongodb';
import { Schema, model, Model, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  owner: ObjectId;
  [key: string]: any;
}

const taskSchema: Schema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxLength: 250,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Task = model<ITask>('Task', taskSchema);

export default Task;
