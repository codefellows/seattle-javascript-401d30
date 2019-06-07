'use strict';

const readAndEmit = require('./read-and-emit.js');

const FIRST_ARGUMENT_INDEX = 2;
const filePath = process.argv[FIRST_ARGUMENT_INDEX];
console.log(filePath);

if ( filePath ) {
  readAndEmit(filePath);
}