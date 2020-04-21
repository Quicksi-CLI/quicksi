import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

class App {
  constructor() {
    this.app = express();
    this.configureDB();
    this.configureSwagger();
  }

  /**
   * Configures the swagger express middleware
   */
  configureSwagger() {
    SwaggerExpress.create(config.swagger, (err, swaggerExpress) => {
      if (err) {
        throw err;
      }

      // Register swagger middleware
      swaggerExpress.register(this.app);
      // Start express app
      this.start();
    });
  }

  /**
   * Configures and connects mongoose to the mongoDB instance
   */
  // eslint-disable-next-line class-methods-use-this
  configureDB() {
    mongoose.connection.on('connected', () => {
      console.log(`Mongoose successfully connected to: ${config.db.uri}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log(`Mongoose disconnected from: ${config.db.uri}`);
    });

    mongoose.connection.on('error', err => {
      console.log(`Mongoose connection error: ${err}`);
    });

    mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      // Use native findOneAndUpdate() rather than findAndModify()
      useFindAndModify: false,
    });
  }

  /**
   * Starts the express app with the settings defined in 'config.server'
   */
  start() {
    // Only listen when started directly and not in tests
    if (!module.parent) {
      this.app.listen(config.server.port, config.server.host, () => {
        console.log(
          `Quicksi API server listening on: http://${config.server.host}:${config.server.port}${config.swagger.basePath}`
        );
      });
    }
  }
}

const Server = new App();

export default Server.app;
