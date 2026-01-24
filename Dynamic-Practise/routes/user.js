//Core Module
const path = require("path");
//external module
const express = require("express");
const userroutes = express.Router();

//Local Module
const rootdir = require("../utils/path");
const homecontroller = require("../controllers/home");
userroutes.get("/", homecontroller.gethome);

module.exports = userroutes;
