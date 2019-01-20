# MEAN Stack ConnectGroup test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

As the test was framework agnostic I chose to rebuild the node express server in an angular application. I have attempted to maintain the data structure and added partial* CRUD functionality.

*Can only add a new vehicle with id and model year with the form.

## Development server

`npm install`.  Run `ng s` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running Mongo Server

As admin start the mongoDB in /api with `mongod`. Kick off the node server in /api with `nodemon ./server.js`. Import the vehicle data found in vehicle.json.

##Enjoy the app

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
