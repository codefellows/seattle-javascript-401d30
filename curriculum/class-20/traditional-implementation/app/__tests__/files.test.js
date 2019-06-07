'use strict';

jest.mock('fs');

const ioClient = require('socket.io-client');
const socketSpy = jest.spyOn(ioClient.socket, 'emit').mockImplementation( () => {console.log('foobar'); });

const file = require('../lib/files.js');

describe('files module', () => {

  it('can load a file', () => {
    return file.loadFile('foo.txt')
      .then( contents => {
        expect( Buffer.isBuffer(contents) ).toBeTruthy();
      });
  });

  it('can save a file', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return file.saveFile('foo.txt', b)
      .then( success => {
        expect(socketSpy).toHaveBeenCalledWith('foo');
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeUndefined();
      });
  });

  it('raises an error if a file is invalid', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return file.saveFile(undefined, b)
      .then( success => {
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeDefined();
      });
  });

  it('can uppercase a buffer', () => {
    const str = 'test words';
    const STR = 'TEST WORDS';
    const b = Buffer.from(str);
    const B = Buffer.from(STR);
    expect(file.convertBuffer(b)).toEqual(B);
  });

  it('can alter a file', () => {
    return file.alterFile('foo.txt')
      .then( success => {
        expect(success).toBeTruthy();
      })
      .catch( err => expect(err).toBeUndefined() );
  });

  it('raises an error given a bad file', () => {
    return file.alterFile(undefined)
      .then( success => {
        expect(success).toBeFalsy();
      })
      .catch( err => expect(err).toBeDefined() );
  });

});
