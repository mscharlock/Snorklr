use strict;

//Dependencies//
import faker from 'faker';
import * as bcrypt from 'bcrypt';
import {randomBytes} from 'crypto';
import * as jwt from 'jsonwebtoken';
import createError from 'http-errors';
import Mongoose, {Schema} from 'mongoose';
import {promisify} from '../lib/promisify.js';

//Schema for User//
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  tokenSeed: { type: String, unique: true, default: '' },
});

const User = Mongoose.model('user', userSchema);

//Methods on userSchema//
userSchema.methods.passwordCompare = function(password) {
  return bcrypt.compare(password, this.passwordHash)
  .then(success => {
    if(!success)
      throw createError(401, 'Auth Error: wrong password');
    return this;
  })
}

userSchema.methods.tokenCreate = function() {
  this.tokenSeed = randomBytes(32).toString('base64');
  return this.save()
  .then(user => {
    return jwt.sign({tokenSeed: this.tokenSeed}, process.env.SECRET);
  });
  .then(token => {
    return token;
  })
}



//Export//
export default User;
