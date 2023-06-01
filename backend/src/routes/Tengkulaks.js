/* eslint-disable linebreak-style */
import express from 'express';

import {
    getTengkulaks, createTengkulak, getTengkulakById, updateTengkulak, deleteTengkulak
} from '../controllers/Tengkulaks.js';

const tengkulaksRouter = express.Router();

tengkulaksRouter.get('/', getTengkulaks);
tengkulaksRouter.post('/', createTengkulak);
tengkulaksRouter.get('/:id', getTengkulakById);
tengkulaksRouter.put('/:id', updateTengkulak);
tengkulaksRouter.delete('/:id', deleteTengkulak);

export default tengkulaksRouter;
