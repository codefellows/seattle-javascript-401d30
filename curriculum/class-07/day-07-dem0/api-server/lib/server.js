'use strict';

const express = require('express');

const app = express();



const db = [];

// take in requests, parse the json into req.body
app.use(express.json());

const logger = (req, res, next) => {
  console.log('LOG: ', req.method, req.path);
  next();
};

app.use(logger);

const checkBody = require('./checkBody.js');

// app.use(checkBody);





app.get('/api/v1/things', (req, res) => {
  res.status(200);
  res.send(db);
});

app.get('/api/v2/things', (req, res) => {
  res.status(200);
  res.send(db[0]);
});

app.post('/api/v1/things', checkBody, (req, res) => {
  const record = {...req.body};
  record.id = db.length ? db[db.length - 1].id + 1 : 1;
  db.push(record);
  res.status(201).send(record); 
});




//put error handling at the bottom
const errorHandler = (err, req, res, next) => {
  console.log('sup');
  res.status(400).send(err);
};

app.use(errorHandler);

module.exports = {
  server: app,
  start:  (PORT) => {
    app.listen(PORT, () => console.log(`app is up on ${PORT}`));
    
  },
};