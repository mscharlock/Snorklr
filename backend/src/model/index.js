//Import all of our other models//
import Fish from './fish.js';
import User from './user.js';
import Profile from './profile.js';

export default (db) => {
  Fish(db);
  User(db);
  Profile(db);
};
