'use strict';

const Model = require('../memory-model.js');

const schema = {
  _id: {required:true},
  name: {required:true},
};

class Categories extends Model {}

module.exports = new Categories(schema);
