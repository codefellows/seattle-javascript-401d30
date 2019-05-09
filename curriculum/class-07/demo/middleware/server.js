'use strict';

const express = require('express');
const notFound = require('./404.js');
const errorHandler = require('./error.js');
const logger = require('./logger.js');

let app = express();

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
app.use(express.json());

// Here, we define some middlware called "logger" that we imported in.
// It will run on all routes (and you'll see it's logs in the console)
app.use(logger);

// Here, we create a simple middleware that logs something and moves on
let dumbMW = (req,res,next) => {
  console.log('this is dumb');
  next();
};

// This middleware is curried.
// It returns a function shaped like middleware, but feeds in the outer param
// You can call it like:  app.get('/route', smartMW('something'), (req,res) => {});
let smartMW = (person) => {
  return (req,res,next) => {
    req.person = person;
    next();
  };
};

// Hit each of these routes to see that we're getting the right things in the
// server's console log as well as the right response to the browser.
app.get('/', (req,res,next) => {
  console.log('In the "/" route');
  res.status(200);
  res.send('All Good');
});

app.get('/a', dumbMW, (req,res,next) => {
  console.log('In the "/a" route');
  res.status(200);
  res.send('All AAAA');
});

app.get('/b', smartMW('world'), (req,res,next) => {
  console.log('In the "/a" route');
  res.status(200);
  res.send(`Hello, ${req.person}`);
});

// This route will invoke the error middleware by throwing an error
// this simulates a catastrophe in your server
app.get('/abc', (req,res,next) => {
  console.log('In the "/abc" route');
  throw 'abc failed';
});

// this route will invoke the error middleware progamatically
// this gives you the power to "throw" server errors in code
// Note that next, when given an argument will ALWAYS throw an express error
app.get('/def', (req,res,next) => {
  console.log('In the "/def" route');
  next('def failed');
});

// 404 Route
// This will get called on any route we don't have defined
app.use('*', notFound);

// Error Route
app.use(errorHandler);

app.listen(3000);