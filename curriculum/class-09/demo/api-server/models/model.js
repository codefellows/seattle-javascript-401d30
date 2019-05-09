'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(id, entry) {

  }

  delete(id) {

  }

}

module.exports = DataModel;