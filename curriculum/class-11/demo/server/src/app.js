'use strict';

// ------------------------------------------------------------------------
// DEPENDENCIES
// ------------------------------------------------------------------------
// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// ------------------------------------------------------------------------
// MIDDLEWARE -> before or after requests
// ------------------------------------------------------------------------
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );
// ------------------------------------------------------------------------
// ROUTES - Respond to requests
// ------------------------------------------------------------------------
const authRouter = require( './auth/router.js' );
// ------------------------------------------------------------------------

// Prepare the express app
const app = express();


// -> Incoming Request
// -----------------------------------------------------------------------
// BEFORE ROUTES
// -----------------------------------------------------------------------
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// -----------------------------------------------------------------------
// ROUTES
// -----------------------------------------------------------------------
app.use(authRouter); // POST /signup & POST /signin
// -----------------------------------------------------------------------
// AFTER ROUTES
// -----------------------------------------------------------------------
app.use(notFound); // 404
app.use(errorHandler); // 500
// -----------------------------------------------------------------------
// <- Response

let isRunning = false;

module.exports = {// Vinicio - this is connected to the require function
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => { // Vinicio - infinite loop
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
