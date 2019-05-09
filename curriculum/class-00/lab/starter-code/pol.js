'use strict';

/**
 * Proof Of Life
 * @module pol
 */

let proofoflife = module.exports = {};

/**
 * Proof of life - will return a boolean value, representing the reverse of the 'dead' value that is sent into the function. For example, calling proofOfLife.isAlive(true) will return false.  (It's not supposed to make sense)
 * @param dead
 * @returns {boolean}
 * @function isAlive
 */
proofoflife.isAlive = function(dead) {
  return !(!!dead);
};
