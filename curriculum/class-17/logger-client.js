'use strict';

const net = require('net');

const socket = new net.Socket();
const PORT = 3000;
const CLIENT_NAME = 'localhost';

socket.connect(PORT, CLIENT_NAME, () => {
  console.log('socket.connect');
});

socket.on('data',data => {
  console.log(JSON.parse(data.toString()));
});


socket.on('close',() => {
  console.log('connection closed');
});

