'use strict';

const io = {};

io.listen = port => {
  console.log('listener on ', port);
};

io.on = (command, callback) => {
  if ( command === 'connection' ) {
    return io.socket;
  }
};

io.socket = {
  on: (command, callback) => {
    // callback && callback('ran', command);
  },

  emit:  (command, payload, callback) => {
    // callback && callback('server ran', command, 'with', payload);
  },
};

module.exports = io;

