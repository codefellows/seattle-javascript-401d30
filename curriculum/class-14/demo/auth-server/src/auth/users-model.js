'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
require('./roles-model.js');

// ----------------------------------------------------------------------
// CONFIGURATION VALUES
// ----------------------------------------------------------------------
const TOKEN_LIFETIME = process.env.TOKEN_LIFETIME || '1m';
// Vinicio - I want this value to be true or false
const SINGLE_USE_TOKEN = !!process.env.SINGLE_USE_TOKENS;
const SECRET = process.env.SECRET || 'foobar';

const usedTokens = new Set();
// ----------------------------------------------------------------------

const users = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  email: {type: String},
  role: {type: String, default:'user', enum: ['admin','editor','user']},
});

const capabilities = {
  admin:  ['create', 'read', 'update', 'delete'],
  editor: ['create', 'read', 'update'],
  user:   [ 'read'],
};


users.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(error => {throw new Error(error);});
});

users.statics.createFromOauth = function(email) {

  if(! email) { return Promise.reject('Validation Error'); }

  return this.findOne( {email} )
    .then(user => {
      if( !user ) { throw new Error('User Not Found'); }
      return user;
    })
    .catch( error => {
      let username = email;
      let password = 'none';
      return this.create({username, password, email});
    });

};

users.statics.authenticateToken = function(token) {
  // Vinicio - you can (and probably should) improve this with storage (DB)
  if(usedTokens.has(token)) { // O(1)
    return Promise.reject('Invalid Token');
  }
  try {
    const parsedToken = jsonWebToken.verify(token, SECRET);

    if(SINGLE_USE_TOKEN && parsedToken.type !== 'key') {
      usedTokens.add(token);
    }
    // (SINGLE_USE_TOKEN) && parsedToken.type !== 'key' && usedTokens.add(token);

    let query = {_id: parsedToken.id};
    return this.findOne(query);

  } catch(error) {
    throw new Error('Invalid Token');
  }
};

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

// Vinicio - type is going to be used to create key tokens
users.methods.generateToken = function(type) {
  const token = {
		// Vinicio from the future - Remember, NEVER store keys or secrets in your token
    id: this._id,
    capabilities: capabilities[this.role],
    type: type || 'user',
  };

  const options = {};

  if(type !== 'key' && !!TOKEN_LIFETIME) {
    // Vinicio - I want to setup an expiration date
    options.expiresIn = TOKEN_LIFETIME;
  }
  return jsonWebToken.sign(token, SECRET, options);
};

users.methods.can = function(capability) {
  // Vinicio - I can use this method to see a user can do something
  // This function may need to change is your code once you incorporate the new model
  return capabilities[this.role].includes(capability);
};

users.methods.generateKey = function() {
  return this.generateToken('key');
};

module.exports = mongoose.model('users', users);
