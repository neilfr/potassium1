$("#refresh").click(function() {
  const $foodCodeSelection = $("#foodCodeSelection").val();
  getFood($foodCodeSelection, "en");
});

const getFood = (id, lang) => {
  const base = "https://food-nutrition.canada.ca";
  let uri =
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

const clearTable = () => {
  $("tbody").html("");
};

const displayFood = data => {
  for (let row = 0; row < data.length; row++) {
    let $tr = $("<tr>");
    let $foodCodeData = $("<td>");
    let $foodDescriptionData = $("<td>");
    $foodCodeData.text(data[0].food_code);
    $foodDescriptionData.text(data[0].food_description);
    $tr.append($foodCodeData);
    $tr.append($foodDescriptionData);
    $("tbody").append($tr);
  }
};
