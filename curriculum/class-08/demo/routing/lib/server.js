'use strict';

const express = require('express');

// Custom Routes
const myRoutes = require('../routes/mine.js');
const yourRoutes = require('../routes/yours.js');

const app = express();

// Actual Routes
app.use(myRoutes);
app.use('/your', yourRoutes);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

