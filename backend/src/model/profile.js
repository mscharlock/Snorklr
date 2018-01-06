import utils from '../lib/utils.js';
import Mongoose, {Schema} from 'mongoose';

const profileSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  avatar: { type: String }, //check//
  bio: { type: String },
});
// 
// const Profile'
