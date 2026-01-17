//Core Module
const path = require("path");

//external module
const express = require("express");
const hostroutes = express.Router();

//Local Module
const rootdir = require("../util/path");

hostroutes.get("/host/home-page", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "register.html"));
});
hostroutes.post("/host/home-page", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../views", "sucessful.html"));
});

module.exports = hostroutes;
