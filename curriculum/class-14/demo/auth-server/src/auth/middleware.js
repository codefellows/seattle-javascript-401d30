'use strict';

const User = require('./users-model.js');

// Vinicio - this is going to be a curried middleware now
module.exports = (capability) => {
  return (request, response, next) => {

    try {
      let [authType, authString] = request.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
        case 'basic':
          return _authBasic(authString);
        case 'bearer':
          return _authBearer(authString);
        default:
          return _authError();
      }
    } catch (e) {
      _authError();
    }

    function _authBasic(str) {
    // str: am9objpqb2hubnk=
      let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
      let bufferString = base64Buffer.toString();    // john:mysecret
      let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
      let auth = {username, password}; // { username:'john', password:'mysecret' }

      return User.authenticateBasic(auth)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    function _authBearer(authString) {
      return User.authenticateToken(authString)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    function _authenticate(user) {
      // Vinicio - is this user valid? AND can they do the capability?
      const capabilityCheck = !capability || user.can(capability);
      if(user && capabilityCheck) {
        request.user = user;
        request.token = user.generateToken();
        next();
      } else {
        _authError();
      }
    }

    function _authError() {
      next('Invalid User ID/Password');
    }
  };

};