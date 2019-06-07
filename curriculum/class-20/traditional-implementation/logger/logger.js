'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const logger = {};

logger.error = (payload) => {
  if(payload) {
    console.log(`ERROR`, payload);
  }
};

logger.save = (payload) => {
  if ( payload ) {
    console.log(`File Saved, ${payload}`);
  }
};

socket.on('save', logger.save);
socket.on('err', logger.error);

module.exports = logger;
