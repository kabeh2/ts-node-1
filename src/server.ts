import express, { Application } from 'express';
import { Server } from 'http';
import userRouter from './routers/userRouter';
import taskRouter from './routers/taskRouter';

import connect from './lib/db/mongoose';

const port = process.env.PORT || 3002;

// Express setup
const server = express();

// database call
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

// Middlewares

// Routers
server.use('/api/users', userRouter);
server.use('/api/tasks', taskRouter);

const appServer = server.listen(port, () =>
  console.log(`Server listening on port ${port}...`)
);

module.exports = appServer;
