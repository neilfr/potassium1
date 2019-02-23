var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("home page");
  //res.render("index.html", { title: "Home" });
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

/* GET findFood page. */
router.get("/findFood", function(req, res, next) {
  //res.render("findFood", { title: "findFood" });
  res.sendFile(path.join(__dirname, "../public/findFood.html"));
});

/* GET findNutrient page. */
router.get("/findNutrient", function(req, res, next) {
  //res.render("findNutrient", { title: "findNutrient" });
  res.sendFile(path.join(__dirname, "../public/findNutrient.html"));
});

module.exports = router;
