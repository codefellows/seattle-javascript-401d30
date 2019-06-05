'use strict';

const socketIOClient = require('socket.io-client');

const constants = require('../utils/constants');
const events = require('../utils/events');

// Vinicio - connecting to the school namespace directly
// Vinicio - you can only connect to namespaces, but you can join rooms
const schoolSocket = socketIOClient.connect(`${constants.SERVER_URL}/school`);

schoolSocket.emit('join', constants.CODE_FELLOWS_ROOM);

schoolSocket.on(events.RECEIVED_EVENT, payload => {
  console.log(payload);
});

schoolSocket.on(events.CODE_CHALLENGE_EVENT, () => {
  console.log('I love code challenges n_n');
});
