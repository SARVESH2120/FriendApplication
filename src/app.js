const express = require("express");
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  res.send({ firstName: "Sarvesh", lastName: "Gupta" });
});

app.post("/user", (req, res) => {
  res.send("data successfully saved to database");
});

app.delete("/user", (req, res) => {
  res.send("data deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello test!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
