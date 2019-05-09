'use strict';

const mongoose = require('mongoose');

const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','3B','SS','LF','RF','CF'] },
  throws: { type:String, required:true, uppercase:true, enum:['R','L'] },
  bats: { type:String, required:true, uppercase:true, enum:['R','L'] },
  team: {type:String, required:true},
});

players.post('find', function() {
  // console.log(this); // this.name = this.name.toUpperCase();
});

players.post('init', function() {
  // this.name = this.name.toUpperCase(); // <- this will break our tests (that's a good thing)
  console.log(this);
});

players.post('save', function() {
  console.log('saving', this);
});

module.exports = mongoose.model('players', players);
