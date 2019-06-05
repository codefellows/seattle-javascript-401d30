const socketIOClient = require('socket.io-client');
const faker = require('faker');

const SERVER_URL = 'http://localhost:3000';
const TIMEOUT_BETWEEN_MESSAGES = 100;
const SPEAK_EVENT = 'speak';

const socket = socketIOClient.connect(SERVER_URL);

setInterval(() => {
  socket.emit(SPEAK_EVENT, faker.hacker.phrase());
},TIMEOUT_BETWEEN_MESSAGES);
