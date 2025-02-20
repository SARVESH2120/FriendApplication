const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Sarvesh:HsCaglurgmlpGVwe@clusterzero.7m1ad.mongodb.net/friendapp"
  );
};

module.exports = connectDB;

//mongoose.connect return a promise wheather connection is made or not
