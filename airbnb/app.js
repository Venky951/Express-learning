//Core Module
const path = require("path");

//External Module
const express = require("express");
const app = express();

//Local Module
const userroutes = require("./routes/user");
const hostroutes = require("./routes/host");
const rootdir = require("./util/path");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(userroutes);
app.use(hostroutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "./routes/views/404.html"));
});
const port = 8790;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
