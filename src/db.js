const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // connect database
    const db = await mongoose.connect("mongodb://localhost/crud-node");
    console.log(`Conecction to ${db.connection.name}`);
  } catch (error) {
    console.log(`Database error ${error}`);
  }
};

module.exports = connectDB;
