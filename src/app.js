const express = require("express");
const connectDB = require("./config/database");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const http = require("http");

require('dotenv').config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const initializeSocket = require("./utils/socket");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);
initializeSocket(server);


connectDB()
  .then(() => {
    console.log("Database connection established");
    server.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
