import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  active: {
    type: Boolean,
    default: false,
  }
});

export const User = mongoose.model('User', userSchema);

export const ROLES = {
  'user' : 'user',
  'admin' : 'admin',
}
