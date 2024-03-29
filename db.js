const mongoose = require("mongoose");
require("dotenv").config();

// define MongoDB connection URL
// const mongoURL = "mongodb://127.0.0.1:27017/db_demo_new";
// const mongoURL = "mongodb+srv://demo:DemoApp@cluster0.mgaqrg1.mongodb.net/";
const mongoURL = process.env.DB_URL;

// set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// get the default connection
// Mongoose maintains a default connection object responding the MongoDB connection
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection Error -- ", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
