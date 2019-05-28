'use strict';

const User = require('./users-model.js');

module.exports = (request, response, next) => {
  // Vinicio - in here, I can't make any big assumptions, all I know is that I MAY have a header
  // with something like 'Basic <ENCODED INFORMATION>'
  try {
    let [type, encodedString] = request.headers.authorization.split(' ');
    type = type.toLowerCase();

    switch (type) {
      case 'basic':
        return _authBasic(encodedString);
      default:
        return _authError();
    }
  }catch(error) {
    // Vinicio - this will happen if the authorization headers are either not correct or not present
    return _authError();
  }

  function _authBasic(encodedString) {
    // Vinicio - so far all we know is that we have an encoded string in base 64 that contains
    // username:password
    const base64Buffer = Buffer.from(encodedString, 'base64');
    const decodedString = base64Buffer.toString(); // Vinicio - this should look like username:pass
    const [username,password] = decodedString.split(':');

    const authData = {username, password}; // object initialization shortcut (?)

    return User.authenticateBasic(authData)// Vinicio - is the username and password correct?
      .then(user => _authenticate(user));
  }

  // Vinicio - once we have a user, and we know that username and password are correct, let's send
  // a appropriate response
  function _authenticate(user) {
    if (user) {
      request.user = user; // Vinicio - we modify the request to add a valid user that EVERYONE
      // can use afterwards
      request.token = user.generateToken();
      return next(); // Vinicio - here, we continue with the middleware chain, BUT with a valid user
    }
    else {
      return _authError();
    }
  }

  function _authError() {
    next({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid request',
    });
  }
};

