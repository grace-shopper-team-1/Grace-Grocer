//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Grocery = require("./models/Grocery");

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Grocery,
  },
};
