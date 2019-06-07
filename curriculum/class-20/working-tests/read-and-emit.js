'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const util = require('util');
const socket = io.connect('https://deployment-prep-server-401d30.herokuapp.com/');

const pReadFile = util.promisify(fs.readFile);

const UPPERCASE_EVENT = 'uppercase';

module.exports = (filePath) => {
  return pReadFile(filePath)
    .then(fileContents => {
      socket.emit(UPPERCASE_EVENT, {filePath, fileContents});
    })
    .catch(console.error);
};