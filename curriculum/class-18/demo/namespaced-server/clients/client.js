const socketIOClient = require('socket.io-client');

const faker = require('faker');

const constants = require('../utils/constants');
const events = require('../utils/events');

const genericSocket = socketIOClient.connect(constants.SERVER_URL);
const homeSocket = socketIOClient.connect(`${constants.SERVER_URL}/home`);
const schoolSocket = socketIOClient.connect(`${constants.SERVER_URL}/school`);

setInterval(() => {
  genericSocket.emit(events.SPEAK_EVENT, faker.hacker.phrase());
  homeSocket.emit(events.SPEAK_EVENT, 'Clean your room! >_<');
  schoolSocket.emit(events.CODE_CHALLENGE_EVENT, null);
},constants.TIMEOUT_BETWEEN_MESSAGES);
