'use strict';

const mongoose = require('mongoose');

const people = mongoose.Schema({
  name: { type:String, required:true },
});

module.exports = mongoose.model('people', people);
