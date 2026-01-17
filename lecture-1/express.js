const http = require("http");
const express = require("express");

const requesthandler = require("./user");
const app = express();
const server = http.createServer(app);
app.use("/", (req, res, next) => {
  console.log("hello welcome to first midelware", req.url, res.method);
  //res.send("Hello from first middleware");
  next();
});
app.post("/submit-details", (req, res, next) => {
  console.log("hello welcome to second midelware", req.url, res.method);
});
app.use("/", (req, res, next) => {
  console.log("hello welcome to another midelware", req.url, res.method);
  res.send("Hello from another middleware");
  next();
});

app.use((req, res, next) => {
  console.log("hello welcome to third midelware", req.url, res.method);
});
const port = 8790;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
