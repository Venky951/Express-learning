const path = require("path");
const express = require("express");

const homepage = express.Router();
const rootdir = require("../util/path");

homepage.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "home.html"));
});

module.exports = homepage;
