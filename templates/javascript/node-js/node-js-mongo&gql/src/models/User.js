import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [isEmail, 'Please supply a valid Email Address'],
    required: 'Please supply an Email Address',
  },
  username: {
    type: String,
    required: 'Please supply a Username',
    lowercase: true,
    trim: true,
  },
});

module.exports = mongoose.model('User', userSchema);
