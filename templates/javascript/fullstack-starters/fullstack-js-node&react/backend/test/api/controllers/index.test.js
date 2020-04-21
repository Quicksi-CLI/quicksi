import mongoose from 'mongoose';

// Clear database before each test case
before(done => {
  Object.keys(mongoose.connection.collections).map(collection =>
    mongoose.connection.collections[collection].remove(() => {})
  );
  done();
});
