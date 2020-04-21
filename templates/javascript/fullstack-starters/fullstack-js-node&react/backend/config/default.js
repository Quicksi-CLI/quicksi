const path = require('path');

module.exports = {
  swagger: {
    appRoot: path.join(__dirname, '../'),
    swaggerFile: path.join(__dirname, '../src/app.swagger.yaml'),
    basePath: '/api',
  },
  server: {
    host: '0.0.0.0',
    port: process.env.SERVER_PORT || 1337,
  },
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/app',
  },
};
