const express = require("express");
const app = express();
const port = 3000;

app.get("/ab?c", (req, res) => {
  //b is optional
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/ab+c", (req, res) => {
  // add any number of b
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/ab*cd", (req, res) => {
  //enter any value in between ab and cd
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/a(bc)?d", (req, res) => {
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/a(bc)+d", (req, res) => {
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/a(bc)*d", (req, res) => {
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get(/a/, (req, res) => {
  //regex
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get(/.*fly$/, (req, res) => {
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.get("/user", (req, res) => {
  console.log(req.query); //give the user id -->101
  //url use in postman -- http://localhost:3000/user?userId=101
  //http://localhost:3000/user?userId=101&password=testing
  // http://localhost:3000/user
});

app.get("/user/:useId", (req, res) => {
  console.log(req.params);
  // http://localhost:3000/user/546
});

app.get("/user/:useId/:name/:password", (req, res) => {
  //dynamic routing
  console.log(req.params);
  // http://localhost:3000/user/546/sarvesh/testing
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
