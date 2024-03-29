const mongoose = require("mongoose");

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    // for required this
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    // only aloweed defind values
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // for add unique value
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// for create Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
