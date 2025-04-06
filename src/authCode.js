// const express = require("express");
// const app = express();
// const port = 3000;

// const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something went wrong");
//   }
// });

// //Handle auth middleware for all  request get post patch  ...request
// app.use("/admin", adminAuth);
// // app.use("/admin", userAuth); //here a single route so we can without written ths

// // app.all  just for confus

// app.get("/admin/getAllData", (req, res) => {
//   res.send("all data sent");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("all data sent");
// });

// app.get("/user", userAuth, (req, res) => {
//   res.send("all data sent");
// });

// // error handling

// app.get("/getUserData", (req, res) => {
//   try {
//     throw new Error("ssada");
//     res.send("addaas");
//   } catch (err) {
//     res.status(500).send("sdds");
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


