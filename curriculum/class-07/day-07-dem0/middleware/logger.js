'use strict';

/**
 * Super simple middleware that just logs out its existence.
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  console.log('middleware logging things');
  console.log(req.hostname);
  next();
};