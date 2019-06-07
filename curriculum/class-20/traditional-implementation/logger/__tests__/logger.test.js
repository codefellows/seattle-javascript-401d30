'use strict';

const logger = require('../logger.js');

describe('logger', () => {

  it('throws an error on file-error with payload', () => {
    expect(() => {
      logger.err('octopus');
    }).toThrow();
  });

  it('ignores errors on file-error without payload', () => {
    expect(() => {
      logger.error();
    }).not.toThrow();
  });

  it('logs the payload on file-save', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save('foo');
    expect(spy).toHaveBeenCalledWith('File Saved, foo');
    spy.mockRestore();
  });

  it('does not log the payload on file-save without payload', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save();
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

});
