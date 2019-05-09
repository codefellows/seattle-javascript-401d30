'use strict';

const fileReader = require('./lib/reader.js');

let file = `${__dirname}/data/file.txt`;

// A simple error first callback
let doSomething = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};

// Invoke our file reader.  Note that the "reader" module is expected to simply export a function, not an object
// We should be able to call it directly with a file and any callback we like.
fileReader( file, doSomething );