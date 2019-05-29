'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

const authorize = (request) => {
  const code = request.query.code;
  return superagent.post(googleTokenServerUrl) // Vinicio - step 3.1
    .type('form')
    .send({
      code: code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: API_SERVER,
      grant_type: 'authorization_code',
    })
    .then(tokenResponse => {
      // Vinicio - Step 3.2
      const token = tokenResponse.body.access_token;

      return superagent.get(googlePlusAPI)
        .set('Authorization', `Bearer ${token}`);
    })
    .then(profileResponse => {
      const googleUser = profileResponse.body;
      // Vinicio - here we have a google user. Now we need to create our user
      //
      return Users.pCreateFromOauth(googleUser.email);
    })
    .then(ourUser => {
      // Vinicio - this is how we end up generating a token at the end
      return ourUser.generateToken();
    })
    .catch(console.error);
};

module.exports = {authorize};
