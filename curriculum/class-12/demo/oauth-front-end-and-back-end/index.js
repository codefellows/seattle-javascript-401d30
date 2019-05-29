'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

app.use(express.static('./public')); // Vinicio - this serves our index.html
app.use(express.json());

// Should be in the ENV
let port = 3000;
// -----------------------------------------------------------------------------------------------
// VALUES FROM DOCUMENTATION
// -----------------------------------------------------------------------------------------------
const googleTokenServerUrl = 'https://www.googleapis.com/oauth2/v4/token';
const googlePlusAPI = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
const API_SERVER = 'http://localhost:3000/oauth/google'; // Vinicio - shouldn't be changed
// -----------------------------------------------------------------------------------------------

const GOOGLE_CLIENT_ID = '560987661468-t83ln0h4pk6aemi1tn3uk2lbgtnooime.apps.googleusercontent.com';
// Vinicio - never ever put your client secret in a front-end file
const GOOGLE_CLIENT_SECRET = 'JXVa7dEAyBRhycDvkbrhF1Eq';

// -----------------------------------------------------------------------------------------------
// ROUTES
// -----------------------------------------------------------------------------------------------
app.get('/oauth/google', authorize);

function authorize (request,response) {
  // Vinicio - we know we are at step 3. This means we must have a code.
  const code = request.query.code;
  console.log({code});
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
      console.log({token});

      return superagent.get(googlePlusAPI)
        .set('Authorization', `Bearer ${token}`)
        .then(profileResponse => {
          const user = profileResponse.body;
          console.log({user});
          response.status(200).json(user);
        })
    })
    .catch(console.error);
}
// -----------------------------------------------------------------------------------------------

app.listen( port, () => console.log(`Server up on ${port}`) );














