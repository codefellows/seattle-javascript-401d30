'use strict';

jest.mock('fs');

const ioClient = require('socket.io-client');
const socketSpy = jest.spyOn(ioClient.socket, 'emit').mockImplementation( () => {});

const UPPERCASE_EVENT = 'uppercase';

const readAndEmit = require('../read-and-emit');

describe('files module', () => {
  it('can load a file', () => {
    return readAndEmit('test.txt')
      .then(() => {
        expect(socketSpy).toHaveBeenCalled();
        expect(socketSpy).toHaveBeenCalledWith(UPPERCASE_EVENT, {
          fileContents: Buffer.from('TEST'),
          filePath: 'test.txt'
        });
        socketSpy.mockRestore();
      });
  });
});
