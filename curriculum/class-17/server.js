'use strict';

const net = require('net');
const PORT = 3000; // Vinicio - you should use process.env.PORT

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`The Server has been created on port ${PORT}`);
});

// Vinicio - I won't use this object A LOT today, but you may find
// it useful in your lab ;)
const socketPool = {};

const allowedCommands = ['CREATE', 'UPDATE','DELETE', 'READ', 'HORROR'];

const handleEventFromSocket = (buffer) => {
  const eventRawText = buffer.toString().trim();
  const [eventType,eventPayload] = eventRawText.split(':');

  if(allowedCommands.includes(eventType)){
    // Vinicio - for now, we are going to broadcast events to every
    // socket that's connected. Later, you should be able to send
    // events only to sockets interested in a particular type ;)

    const messageToSoket = {eventType, eventPayload};
    console.log(`Sending ${messageToSoket} to everyone`);
    for (let socketIndex in socketPool) {
      socketPool[socketIndex].write(JSON.stringify(messageToSoket));
    }
  } else {
    console.log(`Ignoring ${eventType}`);
  }

};


server.on('connection', socket =>  {
  console.log('The server just got a new socket');
  // Vinicio - I'm going to store he sockets so I can do something
  // with them later.
  const socketId = Math.random();
  socketPool[socketId] = socket;

  // Vinicio - this has to be done when you start a new connection
  socket.on('data', buffer => {
    return handleEventFromSocket(buffer);
  });
  socket.on('close', () => {
    console.log(`Removing the socket ${socketId} from the pool`);
    delete socketPool[socketId];
  });
});

