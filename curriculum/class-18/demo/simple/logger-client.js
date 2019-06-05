const socketIOClient = require('socket.io-client');
const faker = require('faker');

const SERVER_URL = 'http://localhost:3000';

// Vinicio - these lines smell :(, you might need to refactor this into a file ;)
const RECEIVED_EVENT = 'received';

const socket = socketIOClient.connect(SERVER_URL);


socket.on(RECEIVED_EVENT, payload => {
  console.log(payload);
});

