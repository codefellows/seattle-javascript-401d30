'use strict';

/**
 * Generic Error First Callback
 * @param {string} err
 * @param {any} data
 * @function handler
 */
let handler = (err,data) => {
  if(err) { 
    console.warn(err);
    return;
  }
  console.log(data);
};

/**
 * This does things asynchronously and calls a callback when done
 * @param {string} things
 * @param {function} cb
 * @function doerOfThings
 */
let doerOfThings = (things, cb) => { 
  setTimeout( () => {
    cb(null, things);
  },1000);
};

/**
 * This does things and returns a promise
 * @param things
 * @returns {Promise<any>}
 */
let promiserOfThings = (things) => {
  return new Promise( (resolve,reject) => {
    things 
      ? resolve(things)
      : reject('bad stuff happened');
  });
};

module.exports = {handler,doerOfThings,promiserOfThings};
// read a file and then run handler