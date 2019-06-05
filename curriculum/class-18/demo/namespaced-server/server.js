'use strict';

const PORT = 3000;
const genericServer = require('socket.io')(PORT);

const SPEAK_EVENT = 'speak';
const RECEIVED_EVENT = 'received';
const CODE_CHALLENGE_EVENT = 'code-challenge';

const CODE_FELLOWS_ROOM = 'codefellows';

genericServer.on('connection', socket => {
  console.log('(Generic) New socket connected :)',socket.id);

  socket.on(SPEAK_EVENT, message => {
    genericServer.emit(RECEIVED_EVENT, message);
  });
});

// -----------------------------------------------------------------------
// MODULARIZATION
// -----------------------------------------------------------------------
const homeServer = genericServer.of('/home'); // Vinicio - this gives me access to '/home'
homeServer.on('connection', (socket) => { // Vinicio - this gives me access to the specific socket
  console.log('(Home) New socket connected :)',socket.id);

  // Here you have the possibility of reacting to events in a different way
  socket.on(SPEAK_EVENT, message => {
    // Vinicio - this message is going to everyone
    genericServer.emit(RECEIVED_EVENT, message);
  });
});
// -----------------------------------------------------------------------
const schoolServer = genericServer.of('/school');
schoolServer.on('connection', (socket) => {
  console.log('(School) New socket connected :)',socket.id);
  socket.on(SPEAK_EVENT, message => {
    // Vinicio - this message is going only to a specific group of people
    schoolServer.emit(RECEIVED_EVENT, message);
  });

  socket.on(CODE_CHALLENGE_EVENT, payload => {
    // Vinicio - this is a generic school, let's send the code challenge event only
    // to code fellows people
    schoolServer.to(CODE_FELLOWS_ROOM).emit(CODE_CHALLENGE_EVENT, payload);
  });

  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });
});

