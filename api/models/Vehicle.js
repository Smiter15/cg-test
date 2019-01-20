const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Vehicles = new Schema({
  id: { type: String },
  modelYear: { type: String },
  url: { type: String },
  media: [{
    name: { type: String },
    url: { type: String }
  }],
  description: { type: String },
  price: { type: String },
  meta: {
    passengers: { type: Number },
    drivetrain: { type: Array },
    bodystyles: { type: Array },
    emissions: {
      template: { type: String },
      value: { type: Number }
    }
  }
},{
  collection: 'vehicles'
});

module.exports = mongoose.model('Vehicles', Vehicles);
