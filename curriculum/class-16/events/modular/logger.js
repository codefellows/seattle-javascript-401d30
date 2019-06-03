'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

const log = (event, payload) => {
  const currentTime = new Date();
  console.log({event, currentTime, payload});
  // "Base case"
};


eventEmitter.on(eventNames.CREATE, payload =>
  log(eventNames.CREATE , payload));

eventEmitter.on(eventNames.DELETE, payload =>
  log(eventNames.DELETE , payload));

eventEmitter.on(eventNames.UPDATE, payload =>
  log(eventNames.UPDATE, payload));

eventEmitter.on(eventNames.CACHE_UPDATE, payload =>
  log(eventNames.CACHE_UPDATE, payload));
