'use strict';

const QClient = require('@nmq/q/client');

const database = new QClient('database');
const network = new QClient('network');


database.subscribe('delete', payload => {
  console.log('delete', payload);
}); // on

database.subscribe('create', payload => {
  // Vinicio - in every single event handler, you have to be 100% sure about
  // the contents of your payload
  console.log('create', payload);
}); // on

network.subscribe('no-service', payload => {
  console.log('no-service', payload);
}); // on

network.subscribe('horror', payload => {
  console.log('horror', payload);
}); // on


console.log(database.subscriptions());
