const express = require("express");
const rootdir = require("../util/path");
const path = require("path");
const notfound = express.Router();
notfound.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "404.html"));
});
module.exports = notfound;
