const express = require('express');
const app = express();
const vehicleRoutes = express.Router();

// Require Vehicle model in our routes module
let Vehicle = require('../models/Vehicle');

// Defined store route
vehicleRoutes.route('/add').post(function (req, res) {
  let vehicle = new Vehicle(req.body);
  vehicle.save()
    .then(vehicle => {
      res.status(200).json({
        'success': vehicle
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
vehicleRoutes.route('/').get(function (req, res) {
  Vehicle.find(function (err, vehicles){
    if(err){
      console.log(err);
    }
    else {
      res.json(vehicles);
    }
  });
});

// Defined edit route
vehicleRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Vehicle.findById(id, function (err, vehicle){
    if(err){
      console.log('Update error: ', err);
    }
    else {
      res.json(vehicle);
    }
  });
});

//  Defined update route
vehicleRoutes.route('/update/:id').post(function (req, res) {
  Vehicle.findById(req.params.id, function(err, vehicle) {
    if (!vehicle)
      return next(new Error('Could not load Document'));
    else {
      vehicle.id = req.body.id;
      vehicle.modelYear = req.body.modelYear;

      vehicle.save().then(vehicle => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
vehicleRoutes.route('/delete/:id').get(function (req, res) {
  Vehicle.findByIdAndRemove({_id: req.params.id}, function(err, vehicle){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = vehicleRoutes;
