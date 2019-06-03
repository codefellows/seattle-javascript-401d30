'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

const db = {};

const handleCreate = (payload) => { // {key:8, value:10}
  // validate input (please validate if you can)
  db[payload.key] = payload.value;

  // "Recursive Case"
  eventEmitter.emit(eventNames.CACHE_UPDATE, payload);
};

eventEmitter.on(eventNames.CREATE, handleCreate);
