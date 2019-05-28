'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken'); // Vinicio - this stands for json web token

// Vinicio - a mongoose schema is where you define the structure of the data you'll be
// working with
const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String},
  // Vinicio - role will be used authorization purposes
  role: {type: String, required: true, default: 'user', enum: ['admin', 'editor', 'user']},
});

users.pre('save', function(next) { // Vinicio - we call this mongoose hooks
  // Vinicio - here we want to save the user, and the HASHED password
  // Vinicio - inside a hook, the value of this is the new user you are about
  // to save
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => { //{username:'vinicio',password:'kali'}
      this.password = hashedPassword; //{username:'vinicio',password:'$@!!66'}
      next(); // Vinicio - this next is the next MONGOOSE function
      // i.e. saving the user into mongo
    })
    .catch(error => {throw error;});
    // Vinicio - we have to throw an exception here because we are not inside
    // middleware and we have no access to express
});

// Vinicio - statics are common to the entire schema
// Vinicio - both static and methods are just ways to extend a mongoose schema
users.statics.authenticateBasic = function(auth) {
  // 1 - Can we find a user with the provided username?
  const query ={username: auth.username};
  // Vinicio - findOne will either return null or a user
  // null -> we didn't find anything
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    // Vinicio - the last line has an implicit return
    // Vinicio - remember, we are trying to return true or false
    // false && false -> false
    // false && true  -> false
    // true  && false -> false
    // true  && true  -> true
    .catch(console.error)
};

// Compare a plain text password against the hashed one we have saved
users.methods.comparePassword = function(rawPassword) {
  // Vinicio - bcrypt is a hashing algorithm
  // password is a naked password, but passwords in the DB are hashed
  return bcrypt.compare(rawPassword, this.password)

    .then(valid => valid ? this: null);
  // if(valid) {
  //   return this;
  // } else {
  //   return null;
  // }
  // Vinicio - compare is hashing and then comparing our data
  // kali -> #!&369364 === this.password
};

// Vinicio - 'methods' are just ways mongoose gives us to extend a schema
// methods are individual to every instance of the schema
users.methods.generateToken = function() {
  const tokenData = {
    id: this._id, // Vinicio - _id is a value every mongo record has
    capabilities: (this.acl && this.acl.capabilities) || []
  };
  // Vinicio - so far we have information we want to make into a token
  // Vinicio - secrets are just a big string
  // for example: hw@P#SGbb7avhVcR^z9CW20hXkx2K2j5wSURgwO4ulG6Ux$IjZYff%q%8RMd9ArwD$Y@%emSfXolwQ&L2eDzo551vHoSisL6ZQ%A
  return jsonWebToken.sign(tokenData,process.env.SECRET || 'sekret');
  // Vinicio - having || and a default secret SHOULD ONLY BE DONE IN DEVELOPMENT
  // NEVER IN PRODUCTION
};

module.exports = mongoose.model('users', users);
