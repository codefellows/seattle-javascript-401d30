'use strict';

const socketClient = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const socket = socketClient.connect(API_URL);


const UPPERCASE_EVENT = 'uppercase';
const WRITE_EVENT = 'write';

const handleUppercaseEvent = payload => {
  // Payload is going to be an object with 2 properties
  // filepath is going to be a string
  // fileContents is going to be a buffer with the contents of the file

  if (payload && payload.filePath && Buffer.isBuffer(payload.fileContents)) {
    const upperCaseContents = payload.fileContents.toString().toUpperCase();

    socket.emit(WRITE_EVENT, {
      filePath: payload.filePath,
      fileContents: upperCaseContents,
    });
  }
};

socket.on(UPPERCASE_EVENT, handleUppercaseEvent);

module.exports = handleUppercaseEvent; // Vinicio - just for testing purposes
