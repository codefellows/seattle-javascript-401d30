'use strict';

const express = require('express');
const logger = require('./logger');
const superagent = require('superagent');

let app = express();

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
app.use(express.json({inflate: true}));

app.use(express.static('./public'));
// req.publicfiles = the public folder

app.use(express.static('./assets'));
// req.publicfiles = the assets folder


//express.json returns a function with the signature (req, res, next)

// Here, we define some middlware called "logger" that we imported in.
// It will run on all routes (and you'll see it's logs in the console)
app.use(logger);

// Here, we create a simple middleware that logs something and moves on
let dumbMW = (req, res, next) => {
  console.log('its dumb to do any work, that doesnt affect or use req and res');
  next();
};

app.use((req, res, next) => {
  res.slowStuff = [];
  res.slowStuff.push(superagent.get('http://localhost:3001/categories'));
  next();
});

app.use(dumbMW);

// This middleware is curried.
// It returns a function shaped like middleware, but feeds in the outer param
// You can call it like:  app.get('/route', smartMW('something'), (req,res) => {});
let smartMW = person => {
  return (req, res, next) => {
    req.person = person;
    next();
  };
};

// Hit each of these routes to see that we're getting the right things in the
// server's console log as well as the right response to the browser.

app.get('/', (req, res) => {
  console.log(' in the / route');
  res.status(200);
  res.send('hello world');
});

// This route will invoke the error middleware by throwing an error
// this simulates a catastrophe in your server
app.get('/a', dumbMW, dumbMW, dumbMW, dumbMW, (req, res) =>{
  res.status(200);
  res.send('dumb route A');
});

// this route will invoke the error middleware progamatically
// this gives you the power to "throw" server errors in code
// Note that next, when given an argument will ALWAYS throw an express error
app.get('/b', smartMW('Boe'), (req, res) => {
  console.log(`the name of the person for this route is, ${req.person}`);
  Promise.all(res.slowStuff)
    .then(() => {
      console.log(res.slowStuff);
      res.status(200);
      res.send(`the name of the person for this B route is, ${req.person}`);

    });
});

// app.get('/b',
//   (req, res, next) => { console.log('inline of B'); next(); },

//   smartMW('Belissa'),

//   (req, res) => {
//     console.log(`the name of the person for this route is, ${req.person}`);
//     res.status(200);
//     res.send(`the name of the person for this B route is, ${req.person}`);
//   // });

// 404 Route
// This will get called on any route we don't have defined

// Error Route

app.listen(3000,  );