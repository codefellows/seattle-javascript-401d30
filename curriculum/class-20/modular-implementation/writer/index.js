'use strict';

const fs = require('fs');
const socketClient = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const socket = socketClient.connect(API_URL);

const util = require('util');
const pWriteFile = util.promisify(fs.writeFile);

const COMPLETED_EVENT = 'completed';
const ERROR_EVENT = 'ohno';
const WRITE_EVENT = 'write';

const handleWriteEvent = payload => {
  // Payload is going to be an object with 2 properties
  // filepath is going to be a string
  // fileContents is going to be a string with the contents of the file

  if (payload && payload.filePath && payload.fileContents) {
    return pWriteFile(payload.filePath, Buffer.from(payload.fileContents))
      .then(() => {
        // Vinicio - if I happen to be here, I can assume I wrote the file
          socket.emit(COMPLETED_EVENT);
        })
      .catch(error => {
        // Vinicio - I'm assuming that if there is an error, I can send
        // the error itself as payload
        socket.emit(ERROR_EVENT, error);
      });
  }
};

socket.on(WRITE_EVENT, handleWriteEvent);

module.exports = handleWriteEvent; // Vinicio - just for testing purposes
