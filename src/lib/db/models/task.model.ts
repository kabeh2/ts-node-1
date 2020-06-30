import { Schema, model, Model, Document } from 'mongoose';

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
});

const Task = model('Task', taskSchema);

export default Task;
