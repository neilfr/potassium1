$("#refresh").click(function() {
  var $foodCodeSelection = $("#foodCodeSelection").val();
  getFood($foodCodeSelection, "en");
});

function getFood(id, lang) {
  var base = "https://food-nutrition.canada.ca";
  var uri =
    base + "/api/canadian-nutrient-file/food/?lang=" + lang + "&id=" + id;
  $.ajax({
    url: uri,
    type: "GET",
    Accept: "application/json",
    dataType: "json"
  }).then(function(data) {
    clearTable();
    displayFood(data);
  });
  //return;
}

function clearTable() {
  $("tbody").html("");
}

function displayFood(data) {
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
}
