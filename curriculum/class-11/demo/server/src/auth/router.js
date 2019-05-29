'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');

// Vinicio - with this route, I'm going to create an account
authRouter.post('/signup', (request, response, next) => {
  // Vinicio - this route is going to assume that all the information
  // to create a user is stored in the request
  const user = new User(request.body);
  user.save() // Vinicio - here we are actually saving into our db
    .then(savedUser => {
      // Vinicio - this happens whenever I could save a user without any errors
      //-------------------------------------------------------------
      request.token = savedUser.generateToken();
      request.user = savedUser;
      //-------------------------------------------------------------
      // Vinicio - noting I'm sending my token in two separate ways
      // Vinicio - no matter who is using my api, they can get the token
      response.set('token', request.token); // Vinicio - header (key, value)
      response.cookie('auth', request.token); // cellphones usually can't read cookies
      response.send(request.token);
    })
    .catch(next); // Vinicio - if there is an error go the error middleware
});

// Vinicio - with this route, I'm going to login
authRouter.post('/signin', auth, (request, response, next) => {
  // Vinicio - All of the logic is hidden behind the auth middleware
  // When you are using our auth middleware, if you reach the route itself, everything
  // is ok
  response.cookie('auth', request.token);
  response.send(request.token);
});

module.exports = authRouter;
