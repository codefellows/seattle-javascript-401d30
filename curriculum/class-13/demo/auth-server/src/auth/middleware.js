'use strict';

const User = require('./users-model.js');

// This middleware is ready to accept both username/password OR a token
// Vinicio - right now this code smells, it's breaking the SRP
// Single Responsibility Principle
module.exports = (request, response, next) => {
  try { // Vinicio - this code smells a little bit too, I would refactor it to have some if logic
    // Vinicio - my goal is that every line focuses on ONE thing and does that
    // thing as best as it can
    const authorizationHeader = request.headers.authorization; // chained structures can ba difficult to understand

    // if(!authorizationHeader) {
    //
    // }

    const splitHeader = authorizationHeader.split(/\s+/);
    let [authType, authString] = splitHeader;

    switch( authType.toLowerCase() ) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return response.status(404).send();
    }
  }
  catch(e) {
    return response.status(404).send();
  }


  function _authBasic(str) {
    // str: am9objpqb2hubnk=
    let base64Buffer = Buffer.from(str, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':'); //
    let auth = {username,password};

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user) )
      .catch(next);
  }

  // Vinicio - one of important decisions a developer makes is to name entities
  // Vinicio - a good name is a specific name, a bad name is an ambiguous name
  function _authBearer(token) {
    try {
      return User.authenticateToken(token)
        .then(_authenticate) // Vinicio - _authenticate requires user
        .catch(next); // Vinicio - here I'm calling next with no arguments
    }
    catch(error){
      response.status(404).send();
    }
  }

  function _authenticate(user) {
    if(user) {
      request.user = user;
      request.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next('Invalid User ID/Password');
  }
};