$("#refresh").click(function() {
  getFood(572, "en");
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
    displayResults(data);
  });
  //return;
}

function clearTable() {
  $("tbody").html("");
}

function displayResults(data) {
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

/*
original as per
https://produits-sante.canada.ca/api/documentation/cnf-documentation-en.html#a3.2

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
