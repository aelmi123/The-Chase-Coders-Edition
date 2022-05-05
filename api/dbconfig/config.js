const mongoose = require("mongoose");
const config = require("config");
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Quiz");

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
  }
};

module.exports = connectDB;
