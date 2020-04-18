import { Sequelize } from 'sequelize-typescript';
import { config } from './index';

export const sequelize = new Sequelize({
    database: config.dbName,
    dialect: config.dbDialect,
    username: config.dbUsername,
    host: config.dbHost,
    password: config.dbPassword,
    storage: ':memory:'
});