const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    
    process.env.DB_CONNECTION_SECRET 
  );
  
};

module.exports = connectDB;

//mongoose.connect return a promise wheather connection is made or not
