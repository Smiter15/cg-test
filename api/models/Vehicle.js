const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Vehicle = new Schema({
  id: {
    type: String
  },
  modelYear: {
    type: String
  }
},{
  collection: 'vehicle'
});

module.exports = mongoose.model('Vehicle', Vehicle);
