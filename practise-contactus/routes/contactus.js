const express = require("express");

const contactus = express.Router();
const rootdir = require("../util/path");
const path = require("path");
contactus.get("/contact-page", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "contact.html"));
});

contactus.post("/contact-page", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../views", "sucess.html"));
});
module.exports = contactus;
