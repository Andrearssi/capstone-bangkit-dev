/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import Users from '../models/UsersModel.js';
import { errorResponse, successResponse } from '../config/Response.js';

dotenv.config();

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email'],
    });
    return successResponse(res, users);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const Register = async (req, res) => {
  const {
    name, email, password, confPassword,
  } = req.body;
  try {
    const existingUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existingUser) {
      return errorResponse(res, `Email ${email} telah terdaftar`, 400);
    }
    if (password !== confPassword) {
      return errorResponse(res, 'Password dan Confirm Password tidak cocok', 400);
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await Users.create({
      name,
      email,
      password: hashPassword,
    });
    return successResponse(res, null, 'Register Berhasil', 201);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) {
      return errorResponse(res, 'Password salah', 400);
    }
    const userId = user[0].id;
    const { name } = user[0];
    const { email } = user[0];
    const accessToken = jwt.sign(
      {
        userId,
        name,
        email,
      },
      ACCESS_TOKEN_SECRET,
      {
        expiresIn: '20s',
      },
    );
    const refreshToken = jwt.sign(
      {
        userId,
        name,
        email,
      },
      REFRESH_TOKEN_SECRET,
      {
        expiresIn: '1d',
      },
    );
    await Users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      },
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // jika menggunakan https secure: true,
    });
    return successResponse(res, { accessToken });
  } catch (error) {
    console.log(error);
    return errorResponse(res, `Email ${req.body.email} tidak ditemukan`, 404);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findByPk(id);

  if (!user) {
    return errorResponse(res, "user not found", 404);
  }

  try {
    await user.destroy(id);
    return successResponse(res);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return errorResponse(res, 'Cookie not found', 400);
  }
  const user = await Users.findOne({
    where: { refresh_token: refreshToken },
  });
  if (!user) {
    return errorResponse(res, 'User not found', 400);
  }
  const userId = user.id;
  await Users.update(
    { refresh_token: null },
    {
      where: { id: userId },
    },
  );
  res.clearCookie('refreshToken');
  return successResponse(res, null, 'Logout successful');
};

