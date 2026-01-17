const express = require("express");

const app = express();

const homepage = require("./routes/home");
const contactus = require("./routes/contactus");
const notfound = require("./routes/404");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(homepage);
app.use(contactus);
app.use(notfound);

const port = 8790;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
