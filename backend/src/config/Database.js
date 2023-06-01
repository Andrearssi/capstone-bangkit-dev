/* eslint-disable linebreak-style */
import { Sequelize } from 'sequelize';

const db = new Sequelize({
  username: 'root',
  password: '',
  database: 'andrea',
  host: '127.0.0.1',
  dialect: 'mysql',
});

export default db;
