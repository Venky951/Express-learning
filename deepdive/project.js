const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");

const app = express();
const server = http.createServer(app);
app.use((req, res, next) => {
  console.log("first", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("third", req.url, req.method);
  //res.send("Hello Middleware");
  next();
});
app.get("/", (req, res, next) => {
  console.log("hello", req.url, req.method);
  res.send("Home Page");
  next();
});
app.get("/contact-page", (req, res, next) => {
  console.log("hello", req.url, req.method);
  res.send(
    '<h1>plase share your contact details</h1><form action="/contact-page" method="POST"><input type="text" name="name" placeholder="Enter your name"/><br/><input type="email" name="email" placeholder="Enter your email"/><br/><button type="submit">Submit</button></form>'
  );
});
app.post("/contact-page", (req, res, next) => {
  console.log("first handling", req.url, req.method, req.body);
  next();
});
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/contact-page", (req, res, next) => {
  console.log("post handling", req.url, req.method, req.body);
  res.send("<h1>Thank you for sharing your contact details</h1>");
});
const port = 8790;
server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
