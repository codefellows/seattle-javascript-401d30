'use strict';

const io = {};

io.listen = port => {
  console.log('listener on ', port);
};

io.connect = () => {
  return io.socket;
};

io.socket = {
  on: (command, callback) => {
    // callback && callback('ran', command);
  },

  emit:  (command, payload, callback) => {
    console.log('emit');
    // callback && callback('server ran ' + command + ' with ' + JSON.stringify(payload));
  },
};

module.exports = io;
