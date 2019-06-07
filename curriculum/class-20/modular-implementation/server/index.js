'use strict';

require('dotenv').config();

const socketServer = require ('socket.io')(process.env.PORT || 3000);

const COMPLETED_EVENT = 'completed';
const ERROR_EVENT = 'ohno';
const WRITE_EVENT = 'write';
const UPPERCASE_EVENT = 'uppercase';

socketServer.on('connection', socket => {
  console.log('----------------Connected-------------------', socket.id);

  socket.on(UPPERCASE_EVENT, payload => {
    socketServer.emit(UPPERCASE_EVENT, payload);
  });

  socket.on(WRITE_EVENT, payload => {
    socketServer.emit(WRITE_EVENT, payload);
  });

  socket.on(COMPLETED_EVENT, () => {
    console.log('--------------Operation Completed: Naisu! n_n ------------------');
  });

  socket.on(ERROR_EVENT, payload => {
    console.log('----------------ERROR: >_< ------------------');
    console.log(payload);
  });
});

console.log('------------------------Server is UP----------------------------');
