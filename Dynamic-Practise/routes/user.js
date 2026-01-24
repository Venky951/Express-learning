//Core Module
const path = require("path");
//external module
const express = require("express");
const userroutes = express.Router();

//Local Module
const rootdir = require("../util/path");
const { candidatesdetails } = require("./host");
userroutes.get("/", (req, res, next) => {
  // console.log(this.name);
  //console.log(this.email);
  console.log(candidatesdetails);
  res.render("home", {
    candidatesdetails: candidatesdetails,
    title: "Home Page",
    currentpage: "home",
  });
});

module.exports = userroutes;
