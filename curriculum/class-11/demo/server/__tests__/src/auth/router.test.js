'use strict';

process.env.STORAGE = 'mongo';

const jsonWebToken = require('jsonwebtoken');

const server = require('../../../src/app.js').server; // real server
const supergoose = require('../../supergoose.js'); // supergoose on top of the real server

const mockRequest = supergoose.server(server); // create an object that can send fake requests

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Auth Router', () => {

  Object.keys(users).forEach( userType => {

    describe(`${userType} users`, () => {

      let encodedToken;
      let id;

      it('can create one', () => {
        return mockRequest.post('/signup')
          .send(users[userType]) // admin or editor or user
          .then(response => {
            // Vinicio - here we have a response from the server
            // Vinicio - let's make sure that the token is valid
            const token = jsonWebToken.verify(response.text, process.env.SECRET || 'sekret');

            // Vinicio - I'm saving this values to use them in another test
            id = token.id;
            encodedToken = response.text;

            expect(token.id).toBeDefined();
            expect(token.capabilities).toBeDefined();
          });
      });

      it('can signin with basic', () => {
        return mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password) // Basic username:password
          .then(response => {
            const token = jsonWebToken.verify(response.text, process.env.SECRET || 'sekret');
            expect(token.id).toEqual(id);
            expect(token.capabilities).toBeDefined();
          });
      });

    });

  });

});