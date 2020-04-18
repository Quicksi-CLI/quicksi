require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    logging: true,
  },
  test: {
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL',
    logging: false,
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.PRODUCTION_HOST,
    port: process.env.PRODUCTION_PORT,
    dialect: 'postgres',
    logging: false,
    ssl: true,
  },
};
