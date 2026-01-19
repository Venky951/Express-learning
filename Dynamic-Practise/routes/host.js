//Core Module
const path = require("path");

//external module
const express = require("express");
const hostroutes = express.Router();

//Local Module
const rootdir = require("../util/path");

hostroutes.get("/host/home-page", (req, res, next) => {
  res.render("register", { title: "Host Registration", currentpage: "host" });
});
const candidatesdetails = [];

hostroutes.post("/host/home-page", (req, res, next) => {
  console.log(
    "Host Registration Data:",
    req.body,
    req.body.Housename,
    req.body.Price,
    req.body.Location,
    req.body.Rating,
    req.body.image,
  );
  candidatesdetails.push({
    name: req.body.Housename,
    price: req.body.Price,
    location: req.body.Location,
    Rating: req.body.Rating,
    image: req.body.image,
  });
  res.render("sucessful", {
    title: "Registration Successful",
    currentpage: "host",
  });
});

exports.hostroutes = hostroutes;
exports.candidatesdetails = candidatesdetails;
