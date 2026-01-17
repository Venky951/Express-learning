//Core Module
const path = require("path");
//external module
const express = require("express");
const userroutes = express.Router();

//Local Module
const rootdir = require("../util/path");

userroutes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"));
});

module.exports = userroutes;
