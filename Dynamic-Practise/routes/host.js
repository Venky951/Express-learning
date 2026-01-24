//Core Module

//external module
const express = require("express");
const hostroutes = express.Router();

//Local Module
const rootdir = require("../utils/path");
const homecontroller = require("../controllers/home");
hostroutes.get("/host/home-page", homecontroller.getregister);

hostroutes.post("/host/home-page", homecontroller.posthome);

exports.hostroutes = hostroutes;
