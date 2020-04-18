import to from 'await-to-js';
import 'dotenv/config';
import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import resolvers from './graphql/resolvers';
import models from './models';

/**
 * Display events emitted from Mongoose in console
 */
mongoose.connection.on('connected', () => {
  console.info('✅  Database connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('😰  Database disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('😌  Database reconnected');
});

mongoose.connection.on('close', () => {
  console.info('🔌  Database connection closed');
  process.exit(0); // Database connection no longer open, exit the process.
});

mongoose.connection.on('error', err => {
  console.error(`🚨  Database connection error → ${err.message}`);
  process.exit(1); // Something went wrong, kill the process.
});

/**
 * Connect to MongoDB and handle any bad connections
 */
const connect = async () => {
  mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
  mongoose.set('useCreateIndex', true);
  const [err] = await to(
    mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  );
  if (err) {
    console.error(`🚨  Database connection error -> ${err.message}`);
    process.exit(1); // Something went wrong, kill the process.
  }
};
connect();

/**
 * Create a context object containing database models
 */
const context = {
  models,
};

/**
 * Setup GraphQL server`
 * https://github.com/prisma-labs/graphql-yoga#api
 */
const server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context,
});

/**
 * Set GraphQL server options and start the server
 * https://github.com/prisma-labs/graphql-yoga#startoptions-options-callback-options-options--void----null-promisevoid
 */
// Set Options
const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
  port: process.env.API_PORT,
  endpoint: '/graphql',
  playground: '/playground',
};

// Start Server
server.start(options, ({ port, endpoint, playground }) =>
  console.log(
    `
✅  Quicksi GraphQL Server is running on localhost:${port}
⚛️  Quicksi GraphQL Endpoint running on localhost:${port}${endpoint}
🎡  Quicksi GraphQL Playground running on localhost:${port}${playground}
    `
  )
);
