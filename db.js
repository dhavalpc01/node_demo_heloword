const mongoose = require("mongoose");

// define MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/db_demo_new";

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
