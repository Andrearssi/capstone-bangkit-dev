/* eslint-disable linebreak-style */
import express from 'express';

import {
    getTengkulaks, createTengkulak, getTengkulakById, updateTengkulak, deleteTengkulak
} from '../controllers/Tengkulaks.js';
import verifyToken from '../middleware/verifyToken.js';

const tengkulaksRouter = express.Router();

tengkulaksRouter.get('/', getTengkulaks);
tengkulaksRouter.post('/', verifyToken, createTengkulak);
tengkulaksRouter.get('/:id', verifyToken, getTengkulakById);
tengkulaksRouter.put('/:id', verifyToken, updateTengkulak);
tengkulaksRouter.delete('/:id', verifyToken, deleteTengkulak);

export default tengkulaksRouter;
