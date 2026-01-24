//core Modules
const fs = require("fs");
const path = require("path");
const rootdir = require("../utils/path");
//Fake database
const candidatesdetails = [];

module.exports = class Home {
  constructor(Housename, Price, Location, Rating, image) {
    this.Housename = Housename;
    this.Price = Price;
    this.Location = Location;
    this.Rating = Rating;
    this.image = image;
  }
  save() {
    Home.fetchAll((candidatesdetails) => {
      candidatesdetails.push(this);
      const filepath = path.join(rootdir, "data", "home.json");
      fs.writeFile(filepath, JSON.stringify(candidatesdetails), (error) => {
        console.log("File Writing Conclude", error);
      });
    });
  }
  static fetchAll(callback) {
    const filepath = path.join(rootdir, "data", "home.json");
    fs.readFile(filepath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
