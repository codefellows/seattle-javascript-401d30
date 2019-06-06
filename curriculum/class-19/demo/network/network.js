'use strict';

const QClient = require('@nmq/q/client');

const network = new QClient('network');

network.subscribe('horror', payload => {
  console.log('The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.');
  console.log('I know for a fact, payload will always be a number', Math.cos(payload));
}); // on

network.subscribe('no-service', payload => {
  console.log('No Service :(');
}); // on
