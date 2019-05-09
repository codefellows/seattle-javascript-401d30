'use strict';

const asyncModule = require('../async.js');

// Declare these for spying on the console ...
let warn, log, error;

// How do we test async functions?

describe('generic error first callback (handler)', () => {

  // Before each test runs, turn the spy for console "on"
  beforeEach(() => {
    warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    error = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  // Afer each test completes, clear out the spies. Otheriwse, you'll get false positives
  // as the spies will remember what they saw in previous tests. This gets you a clean start.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // These first 2 tests make assertions on the generic error first callback.
  // This demonstrates UNIT Testing the functionality of the actual callback
  // without wiring up its entire implementation
  it('generic handler deals with errors ok', () => {
    let errMessage = 'xyz';
    let data = null;
    asyncModule.handler(errMessage, data);
    expect(warn).toHaveBeenCalledWith(errMessage);
  });

  it('generic handler deals with data ok', () => {
    let errMessage = null;
    let data = 'yep';
    asyncModule.handler(errMessage, data);
    expect(warn).not.toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith(data);
  });

});

describe('async access methods', () => {

  beforeEach(() => {
    warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    error = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // pass done in as a param to your it()
  // Inside the callback, invoke that 'done' as a function
  // to tell jest that your async job is complete.
  // Your 'expect' assertions should be done inside of the callback itself
  // Simply invoke the asynchronous function to kick this off.
  // Technically, this is an integration test, not a unit test.
  it('runs asynchronous callbacks', (done) => {
    let words = 'hello';
    let myHandler = (err,data) => {
      expect(err).toBeNull();
      expect(data).toEqual(words);
      done();
    };
    asyncModule.doerOfThings(words, myHandler);
  });
  

  // For promises, just 'return' the promis-y thing that you are testing.
  // No 'done' required
  // Put your assertions in either the .then() or the .catch(), depending on which case you are testing for
  it('runs promises (resolve)', () => {
    return asyncModule.promiserOfThings('do something')
      .then( result => {
        expect(result).toEqual('do something');
      })
      .catch(err => expect(err).not.toBeDefined());
  });

  it('runs promises (reject)', () => {
    return asyncModule.promiserOfThings(false)
      .then( result => {
        expect(result).toBeUndefined();
      })
      .catch(err => expect(err).toBeDefined());
  });


  // For async/await, declare the it() as an async function
  // No 'done' required
  // Wrap your code in a try/catch
  // Put your assertions in either the try{} or the .catch(), depending on which case you are testing for
  it('runs with async/await (good result/resolve)', async () => {
    try {
      let result = await asyncModule.promiserOfThings('do something');
      expect(result).toEqual('do something');
    }
    catch(err) { expect(err).not.toBeDefined(); }
  });

  it('runs with async/await (bad result/reject)', async () => {
    try {
      let result = await asyncModule.promiserOfThings(false)
      expect(result).toBeUndefined();
    }
    catch(err) { expect(err).toBeDefined(); }
  });

});