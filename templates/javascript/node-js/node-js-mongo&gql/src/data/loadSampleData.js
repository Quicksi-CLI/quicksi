import to from 'await-to-js';
import 'dotenv/config';
import fs from 'fs';
import mongoose from 'mongoose';
import User from '../models/User';

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

// Parse sample data JSON files
// Use https://mockaroo.com/ to generate new sets of sample data
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// Delete sample data from database
const deleteData = async () => {
  console.log('💣  Fire in the hole!');
  await User.deleteMany();
  console.log('💥  Sample data deleted!');
  console.log('💁  To load sample data, run: npm run loadsampledata');
  process.exit(0);
};

const loadData = async () => {
  console.log('🚧  Loading sample data...');
  const [err] = await to(User.insertMany(users));
  if (err) {
    console.warn(
      '⚠️  If you are importing sample data make sure to drop the existing database first with: npm run deletesampledata'
    );
    console.error(`🚨  Loading sample data error -> ${err.message}`);
    process.exit(1); // Something went wrong, kill the process.
  }
  console.log('🎉  Sample data loaded!');
  process.exit(0);
};

// Check if we are deleting or loading the data
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
