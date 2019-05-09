'use strict';

//needs to result in a new instance of a model
module.exports = (req, res, next) => {
  let modelName = req.params.model;
  req.model = require(`../models/${modelName}.js`);
  next();
};