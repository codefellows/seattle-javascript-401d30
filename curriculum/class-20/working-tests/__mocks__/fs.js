'use strict';

module.exports = exports = {};

exports.readFile = (file, callback) => {
  if( (! file) || file.match(/bad-file/i) ) {
    callback('Invalid File');
  }
  else {
    callback(undefined, new Buffer('TEST'));
  }
};

