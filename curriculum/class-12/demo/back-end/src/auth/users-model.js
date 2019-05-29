'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  // type: {type: String, default:'regular', enum: ['regular','oauth']},
  email: {type: String},
  role: {type: String, default:'user', enum: ['admin','editor','user']},
});

users.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(console.error);
});

users.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then( user => user && user.comparePassword(auth.password) )
    .catch(error => {throw error;});
};

users.methods.comparePassword = function(password) {
  return bcrypt.compare( password, this.password )
    .then( valid => valid ? this : null);
};

/**
 * This function will take a oauth generated user and it
 * will return a user for our system
 * @param email
 */
users.statics.pCreateFromOauth = function(email) {
  if (!email || email === "") {
    return Promise.reject('Invalid Input');
  }
  // Vinicio - here, we don't know if the user is trying to sign-up
  // or tryin to logIn
  return this.findOne({email})
    .then(user => {
      if(!user) {
        const username = email;
        const password = 'null';
        return this.create({username, password, email});
      }
      return user;
    })
    .catch(console.error);
};

users.methods.generateToken = function() {
  let token = {
    id: this._id,
    role: this.role,
  };
  return jwt.sign(token, process.env.SECRET);
};

module.exports = mongoose.model('users', users);
