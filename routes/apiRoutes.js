var express = require("express");
//var jquery = require("jquery");
/*
//for using jquery without a window;
require("jsdom").env("", function(err, window) {
  if (err) {
    console.error(err);
    return;
  }
  var $ = require("jquery")(window);
});
*/

var router = express.Router();

/* GET resource */
router.get("/", function(req, res, next) {
  console.log("got to api route");
  res.send("respond with a resource");
});

router.get("/all", function(req, res, next) {
  console.log("got to all");
  res.send("respond with all resources");
});

router.get("/food/:id", function(req, res, next) {
  console.log("got to food");
  // var food = getFood(572, "en");
  res.json({ test: "hello from food" });
});
/*
// sample query
function getFood(id, lang) {
  var base = "https://food-nutrition.canada.ca";
  var uri =
    base + "/api/canadian-nutrient-file/food/?lang=" + lang + "&id=" + id;
  $.ajax({
    url: uri,
    type: "GET",
    Accept: "application/json",
    dataType: "json",
    success: function(data) {
      console.log(data.food_description);
      var frag = document.createDocumentFragment();
      var h2 = document.createElement("h2");
      var Food = document.createTextNode(data.food_description);
      var p = document.createElement("p");
      var text = document.createTextNode(data.panels[0].text);
      h2.appendChild(Food);
      p.appendChild(text);
      frag.appendChild(h2);
      frag.appendChild(p);
      $("#responses")[0].appendChild(frag);
    },
    error: function(error) {}
  });
  return;
}
*/
module.exports = router;
