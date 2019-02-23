$("#refresh").click(function() {
  var $foodCodeSelection = $("#foodCodeSelection").val();
  getFood($foodCodeSelection, "en");
});

var getFood = (id, lang) => {
  var base = "https://food-nutrition.canada.ca";
  var uri =
    base + "/api/canadian-nutrient-file/food/?lang=" + lang + "&id=" + id;
  $.ajax({
    url: uri,
    type: "GET",
    Accept: "application/json",
    dataType: "json"
  }).then(data => {
    clearTable();
    displayFood(data);
  });
  //return;
};

var getNutrientAmount = (id, lang) => {
  var base = "https://food-nutrition.canada.ca";
  var uri =
    base +
    "/api/canadian-nutrient-file/nutrientamount/?lang=" +
    lang +
    "&id=" +
    id;
  $.ajax({
    url: uri,
    type: "GET",
    Accept: "application/json",
    dataType: "json"
  }).then(data => {
    console.log(data);
    clearTable();
    displayNutrient(data);
    //return
  });
};

var clearTable = () => {
  $("tbody").html("");
};

var displayFood = data => {
  for (var row = 0; row < data.length; row++) {
    var $tr = $("<tr>");
    var $foodCodeData = $("<td>");
    var $foodDescriptionData = $("<td>");
    $foodCodeData.text(data[0].food_code);
    $foodDescriptionData.text(data[0].food_description);
    $tr.append($foodCodeData);
    $tr.append($foodDescriptionData);
  }
  $("tbody").append($tr);
};
