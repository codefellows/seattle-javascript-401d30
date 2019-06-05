'use strict';

// Vinicio - Our friend, curried functions, makes a comeback
const socketIO = require('socket.io')(3000);

const SPEAK_EVENT = 'speak';
const RECEIVED_EVENT = 'received';

socketIO.on('connection', socket => {
  console.log('New socket connected :)',socket.id);

  socket.on(SPEAK_EVENT, message => {
    console.log({message});
    socket.broadcast.emit(RECEIVED_EVENT,{id: socket.id, message});
  });
});
