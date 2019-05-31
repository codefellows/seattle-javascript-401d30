'use strict';

const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  role: {type:String, required:true},
  // Vinicio - you'll have to extend this system
  capabilities: {type: Array, required: true}
});

module.exports = mongoose.model('roles', rolesSchema);
