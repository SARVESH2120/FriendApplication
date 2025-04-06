// //middleware and routing
// //multiple route handler

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling th route user 2");
//     next();
//     res.send("1st response");
//   },
//   (req, res, next) => {
//     res.send("HELLO 2nd route handler");
//   },
//   (req, res, next) => {
//     next();
//     res.send("Hello from 3rd route handler");
//   },
//   (req, res) => {
//     res.send("Hello from 4th route handler");
//   }
// );

// // app.use("/route", [rH, rH2, rH3, rh4, rH5])
// // app.use("/route", [rH, rH2,], rH3, rh4, rH5)
