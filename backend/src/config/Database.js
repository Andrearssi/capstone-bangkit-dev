/* eslint-disable linebreak-style */
import { Sequelize } from 'sequelize';

const db = new Sequelize({
  username: 'andrea',
  password: '123456',
  database: 'capstone-test',
  host: '34.101.205.217',
  dialect: 'mysql',
});

export default db;
