'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const schema = ['id', 'name', 'title', 'author', 'article'];
let db = [];

app.use(express.json());

app.use( express.static('./public') );

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

let messager = (req,res,next) => {
  console.log('send this to the queue!');
  next();
};

// Swagger Docs
const swaggerDocs = require(`./docs/config/swagger.json`);
app.use('/docs/api', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/posts', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

app.get('/posts/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/posts', messager, (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = {name,author,title,article};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/posts/:id', messager, (req,res,next) => {
  let id = req.params.id;
  let {name,author,title,article} = req.body;
  let updatedRecord = {name,author,title,article};
  db = db.map( (record) => (record.id === parseInt(id)) ? updatedRecord : record );
  res.json(updatedRecord);
});

app.delete('/posts/:id', messager, (req,res,next) => {
  let id = req.params.id;
  db = db.filter( (record) => record.id !== parseInt(id) );
  res.json({});
});

app.get('/foo', (req,res,next) => {
  next('no idea what to do here ...');
});

app.use('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
});

app.use((error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({error:error});
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

