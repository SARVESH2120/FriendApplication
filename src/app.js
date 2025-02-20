const express = require("express");
const connectDB = require("./config/database");
const app = express();
const port = 3000;

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Saurabh",
    lastName: "Gupta",
    emailId: "saurabhgupta@gmail.com",
    password: "12456789",
  });
  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

//creating a new instance of the user model

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
