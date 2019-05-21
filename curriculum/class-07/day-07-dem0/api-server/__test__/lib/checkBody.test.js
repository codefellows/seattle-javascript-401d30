const checkBody = require('../../lib/checkBody.js');

describe('check body', () => {
  // it('should continue if req does not have a body', () => {
  //   // req, res, next
  //   const req = {};
  //   const res = {};
  //   checkBody(req, res, (err, req, res, next) => {
  //     expect(true).toBeTruthy;
  //   });
  // });

  it('should stop if the body does not match the schema', () => {
    //schema requires a property of name and hasDog
    const req = { body: {}, method: 'POST' };

    checkBody(req, {}, (err, req, res, next) => {
      expect(err).toBeDefined();
    });
  });
});