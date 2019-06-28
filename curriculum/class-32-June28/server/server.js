'use strict';

// Vinicio - remember to use the || only for development
const PORT = process.env.PORT || 3000;

const socketIoServer = require('socket.io')(PORT);

socketIoServer.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('chat', payload => {
    console.log('We got the following message:', payload);

    socketIoServer.emit('incoming', payload);
  });
});

console.log('Server is up ;)', PORT);