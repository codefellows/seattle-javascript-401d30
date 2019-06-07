'use strict';

const readAndEmit = require('./read-and-emit');

const FILE_PATH_INDEX = 2;
const filePath = process.argv[FILE_PATH_INDEX];
// ['node', 'index.js', 'first argument']

if(filePath) {
  readAndEmit(filePath);
}