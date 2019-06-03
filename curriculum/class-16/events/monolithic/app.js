'use strict';

// Vinicio - this is the main constructor for the event system
const EventEmmiter = require('events');

// Vinicio - making a new instance based on the constructor
const eventEmitter = new EventEmmiter();

const db = {};


const log = () => {
  const currentTime = new Date();
  console.log('--------------------------------------------------------');
  console.log('                    DATABASE UPDATE');
  console.log('--------------------------------------------------------');
  console.log(currentTime);
  console.log({db});
  console.log('--------------------------------------------------------');
};

const handleDelete = (event, payload) => {
  delete db[payload.key];

  eventEmitter.emit('db-update');
};

const handleCreate = (event, payload) => {
  db[payload.key] = payload.value;

  eventEmitter.emit('db-update');
};


eventEmitter.on('delete', payload => handleDelete('delete', payload));
eventEmitter.on('create', payload => handleCreate('delete', payload));

eventEmitter.on('db-update',log);




eventEmitter.emit('create', {key:'gregor', value:'is cute :3'});
eventEmitter.emit('delete', {key:'gregor'});



