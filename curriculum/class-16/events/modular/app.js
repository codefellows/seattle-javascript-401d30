'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

// -----------------------------------------------------
// EVENT REGISTRATION
// -----------------------------------------------------
// Think about it as app.use
require('./logger');
require('./cache');
// -----------------------------------------------------


eventEmitter.emit(eventNames.CREATE,
  {key:'Gregor', value:'Is the heartbeat of the universe'});

eventEmitter.emit('NOBODY LIKES ME',
  {key:'Gregor', value:'Is the heartbeat of the universe'});
