'use strict';

const net = require('net'); // Vinicio - gives you the ability to use TCP

const socket = new net.Socket();

// Vinicio opening the connection for potential communications
// Vinicio - ideally you should use process.env.PORT
socket.connect(3000, 'localhost', () => {
  console.log('socket.connect');
});

//------------------------------------------------------------------
// Generating Random events to everyone connected into the socket
//------------------------------------------------------------------

const events = [
  'CREATE',
  'UPDATE',
  'DELETE',
  'READ',
  'VICTORY',
  'BARK',
  'KALI',
  'HORROR',
  'ERROR',
];

const TIME_BETWEEN_MESSAGES = 2000;

setInterval(() =>{
  // Vinicio, every 5 seconds I'm going to send events to everyone
  // that's connected to my socket
  const randomIndex = Math.floor(Math.random() * events.length);
  const randomEvent = events[randomIndex];

  // message format: "TYPE:PAYLOAD"
  socket.write(`${randomEvent}:is being sent to the server`);
  console.log(`Client is sending ${randomEvent} to the socket`);
}, TIME_BETWEEN_MESSAGES);

socket.on('close',() => {
  console.log('connection closed');
});








