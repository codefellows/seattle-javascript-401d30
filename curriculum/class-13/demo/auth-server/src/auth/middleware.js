'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {

  // Basic am9objpqb2hubnk=
  // Bearer Token ...
  try {
    let [authType, authString] = req.headers.authorization.split(/\s+/);

    switch( authType.toLowerCase() ) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        //TODO
      default:
        return _authError();
    }
  }
  catch(e) {
    console.log(e);
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

  function _authBearer(authString) {
    //TODO
  }

  function _authenticate(user) {
    if(user) {
      req.user = user;
      req.token = user.generateToken();
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