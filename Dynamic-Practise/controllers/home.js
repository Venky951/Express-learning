const path = require("path");
const Home = require("../models/home");

exports.getregister = (req, res, next) => {
  res.render("host/register", {
    title: "Host Registration",
    currentpage: "host",
  });
};

exports.posthome = (req, res, next) => {
  const { Housename, Price, Location, Rating, image } = req.body;
  const home = new Home(Housename, Price, Location, Rating, image);
  home.save();
  res.render("host/sucessful", {
    title: "Registration Successful",
    currentpage: "host",
  });
};

exports.gethome = (req, res, next) => {
  // console.log(this.name);
  //console.log(this.email);
  Home.fetchAll((candidatesdetails) => {
    res.render("store/home", {
      candidatesdetails: candidatesdetails,
      title: "Home Page",
      currentpage: "home",
    });
  });
};
