'use strict';

const files = require('./lib/files.js');

let file = process.argv.slice(2).shift();
if ( file ) {
  files.alterFile(file);
}