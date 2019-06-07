'use strict';

const pFS = require('fs').promises;
const socketClient = require('socket.io-client');

const API_URL = 'http://localhost:3000';
const socket = socketClient.connect(API_URL);

const ERROR_EVENT = 'ohno';
const UPPERCASE_EVENT = 'uppercase';

module.exports = filePath => {
  return pFS.readFile(filePath)
    .then(fileContents => {
      socket.emit(UPPERCASE_EVENT, {
        filePath, fileContents
      });
    })
    .catch(error => {
      console.error(error);
      socket.emit(ERROR_EVENT, error);
    });
};
