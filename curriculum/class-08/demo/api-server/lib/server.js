'use strict';

const express = require('express');

// Custom Routes
const peopleRoutes = require('../routes/people.js');

const app = express();

app.use(express.json());

// Actual Routes
app.use(peopleRoutes);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

