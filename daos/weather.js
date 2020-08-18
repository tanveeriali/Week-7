const mongoose = require("mongoose");
const Weather = require("../models/weather");

module.exports = {};

module.exports.create = async (name, temperature) => {
  try {
    const weather = await Weather.create({
      name: name,
      temperature: temperature,
    });
    return weather;
  } catch (e) {
    throw e;
  }
};

module.exports.getLocation = async (name) => {
  const location = await Weather.findOne({ name: name });
  if (location) {
    return location;
  } else {
    return false;
  }
};

class BadDataError extends Error {}
module.exports.BadDataError = BadDataError;
