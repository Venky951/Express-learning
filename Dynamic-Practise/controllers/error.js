exports.pageNotFound = (req, res, next) => {
  res
    .status(404)
    .render("404", { title: "404 Not Found-Page", currentpage: "404" });
};
