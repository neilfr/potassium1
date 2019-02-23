$("#refresh").click(function() {
  var $foodCodeSelection = $("#foodCodeSelection").val();
  getNutrientAmount($foodCodeSelection, "en");
});

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

var displayNutrient = data => {
  for (var row = 0; row < data.length; row++) {
    var $tr = $("<tr>");
    var $foodCodeData = $("<td>");
    var $nutrientNameId = $("<td>");
    var $nutrientValue = $("<td>");
    $foodCodeData.text(data[row].food_code);
    $nutrientNameId.text(data[row].nutrient_name_id);
    $nutrientValue.text(data[row].nutrient_value);
    $tr.append($foodCodeData);
    $tr.append($nutrientNameId);
    $tr.append($nutrientValue);
    $("tbody").append($tr);
  }
};
