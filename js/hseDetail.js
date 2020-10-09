$(function () {
  var proID = 0;
  $.getJSON("hseInfo.json", function (data) {
    $("#hseh1").html(data[proID].name);
    $("#hse_span_Address").html(data[proID].address);
    $("#hse_span_Region").html(data[proID].region);
    $("#hse_span_agent").html(data[proID].agent);
    $("#hse_status").html(data[proID].status);
    $("#hse_actual_price").html("$ "+data[proID].price);
    $("#hse_net_size").html("Net Size : "+data[proID].size +" sq.ft. (70%)");
    $("#hse_cal_size").html("Gross Size : \n"+(parseInt(data[proID].size) / 0.7).toFixed(1) +" sq.ft.");
    $("#hselayout").html(data[proID].numOfRoom+" Rooms");
    $("#hseage").html(data[proID].years);
  });
  
  var mymap = L.map('hse_map').setView([22.318455, 114.191612], 17);
  
L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png', {
    attribution: '<u href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u><div style="width:28px;height:28px;display:inline-flex;background:url(https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg);background-size:28px;"></div>',
    maxZoom: 17,
    id: 'APIKEY'
}).addTo(mymap);

  L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/en/wgs84/{z}/{x}/{y}.png', {
    maxZoom: 17,
    id: 'APIKEY'
}).addTo(mymap);


})