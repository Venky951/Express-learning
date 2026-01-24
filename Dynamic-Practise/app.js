//Core Module
const path = require("path");

//External Module
const express = require("express");
const app = express();
//Set EJS as View Engine
app.set("view engine", "ejs");
app.set("views", "views");
//Local Module
const userroutes = require("./routes/user");
const { hostroutes } = require("./routes/host");
const rootdir = require("./utils/path");
const hostcontroller = require("./controllers/error");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootdir, "public")));
app.use(userroutes);
app.use(hostroutes);

app.use(hostcontroller.pageNotFound);

const port = 8790;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
