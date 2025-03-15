const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  //Read the token from the req cookies
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is not valid");
    }
    const decodedObj = await jwt.verify(token, "DEV@TINDER$790");
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR " + err.message);
  }
  //validate the token -done
  //Find the user -done
};

module.exports = {
  userAuth,
};
