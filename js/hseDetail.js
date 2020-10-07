$(function () {
  var proID = 0;
  $.getJSON("hseInfo.json", function (data) {
    $("#house").html(data[proID].floorPlan);$("#i1").attr("src",data[proID].img1);
    
  });

})