'use strict';

const QClient = require('@nmq/q/client');

QClient.publish('database','delete'
  , {id: 77, buffer: Buffer.from('wink wink ;)')});
QClient.publish('database','create'
  , Buffer.from('Kali ate anime'));

// Vinicio - in this line, I'm making a contract with the most important
// developer in the project, myself
QClient.publish('network','horror'
  , 1999);
