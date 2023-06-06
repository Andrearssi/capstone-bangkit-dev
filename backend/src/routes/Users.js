/* eslint-disable linebreak-style */
import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import refreshToken from '../controllers/RefreshToken.js';
import {
  getUsers, Register, Login, Logout, deleteUser,
} from '../controllers/Users.js';

const usersRouter = express.Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', Register);
usersRouter.delete('/users/:id', deleteUser);
usersRouter.post('/login', Login);
usersRouter.get('/token', refreshToken);
usersRouter.delete('/logout', Logout);

export default usersRouter;
