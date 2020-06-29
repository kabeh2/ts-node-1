import express, { Application } from 'express';
import { Server } from 'http';
import userRouter from './routers/userRouter';

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

const appServer = server.listen(port, () =>
  console.log(`Server listening on port ${port}...`)
);

module.exports = appServer;
