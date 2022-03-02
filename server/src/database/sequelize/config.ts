import { Sequelize } from 'sequelize';

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: './storage/database.sqlite',
  logging: false
});
