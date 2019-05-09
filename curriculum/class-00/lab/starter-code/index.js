'use strict';

/**
 * Simple Server
 * @module index
 */

const pol = require('./pol.js');
const http = require('http');

/**
 * Basic Request Hanlder (All Routes)
 * @param req
 * @param res
 */
const requestHandler = (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.write( pol.isAlive().toString() );
  res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => console.log('server up') );

