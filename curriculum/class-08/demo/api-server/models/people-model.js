'use strict';

const schema = require('./people-schema.js');

class People {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

}

module.exports = People;
