'use strict';

const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  // it('should respond with a 500 on an error', () => {

  //   return mockRequest
  //     .get('/foo')
  //     .then(results => {
  //       expect(results.status).toBe(400);
  //     }).catch(console.error);

  // });
  
  // it('should respond with a 404 on an invalid route', () => {

  //   return mockRequest
  //     .get('/foobar')
  //     .then(results => {
  //       expect(results.status).toBe(404);
  //     }).catch(console.error);

  // });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(err => {
        console.error(err);
        expect(err).toBeNull();        
      });

  });

  it('should respond properly on request to /api/v1/posts', () => {

    return mockRequest
      .get('/api/v1/things')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(err => {
        console.error(err);
        expect(err).toBeNull();
      });

  });

});
