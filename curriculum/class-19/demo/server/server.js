'use strict';

const QServer = require('@nmq/q/server');

QServer.start();

const database = new QServer('database'); // namespace

database.monitorEvent('create'); // rooms
database.monitorEvent('update'); // rooms
database.monitorEvent('delete'); // rooms

const network = new QServer('network');
network.monitorEvent('no-service');
network.monitorEvent('horror');


console.log('Server is Up');
