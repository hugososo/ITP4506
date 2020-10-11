$(function () {

  //  var linkEl = $("#photo_list_item");
  //  if (linkEl.attr('onclick') === undefined) {
  //    window.location = linkEl.attr('href');
  //  } else {
  //    linkEl.click();
  //  }
  let proID;
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('index')) {
    proID = searchParams.get('index');
  }

  $.getJSON("hseInfo.json", function (data) {
    $("#hseh1").html(data[proID].name + " Flat " + data[proID].flat + " " + data[proID].floor + "/F");
    $("#hse_span_Address").html(data[proID].address);
    $("#hse_block").html(data[proID].name);
    $("#hse_span_Region").html(data[proID].region);
    $("#hse_span_agent").html(data[proID].agent);
    $("#hse_status").html(data[proID].status);
    $("#hse_actual_price").html("$ " + data[proID].price);
    $("#hse_net_size").html("Net Size : " + data[proID].size + " sq.ft. (70%)");
    $("#hse_cal_size").html("Gross Size : \n" + (parseInt(data[proID].size) / 0.7).toFixed(1) + " sq.ft.");
    $("#hselayout").html(data[proID].numOfRoom + " Rooms");
    $("#hseage").html(data[proID].years);

    var hse_list1 = $("#hse_slidelist li:nth-child(1)");
    var hse_list2 = $("#hse_slidelist li:nth-child(2)");
    var hse_list3 = $("#hse_slidelist li:nth-child(3)");
    hse_list1.find("img").attr("src", data[proID].img1);
    hse_list2.find("img").attr("src", data[proID].img2);
    hse_list3.find("img").attr("src", data[proID].img3);

    $("#hse_est_info #est").html(data[proID].name);
    $("#hse_est_info #yb").html(data[proID].years);
    $("#hse_est_info #dev").html(data[proID].developer);
    $("#hse_est_info #toy").html(data[proID].TermOfYears);

    $("#hse_est_info #fas").html("");
    for (var i = 0; i < data[proID].Facilities.length; i++) {
      $("#hse_est_info #fas").append("<span>" + data[proID].Facilities[i] + "</span> ");
    }

    var mymap = L.map('hse_map').setView(data[proID].property_geo, 17);

    var marker = L.marker(data[proID].property_geo).addTo(mymap);

    marker.bindPopup("This is <br><b>" + data[proID].name + "</b>.").openPopup();


    L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png', {
      attribution: '<u href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u><div style="width:28px;height:28px;display:inline-flex;background:url(https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg);background-size:28px;"></div>',
      maxZoom: 17,
      id: 'APIKEY'
    }).addTo(mymap);

    L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/en/wgs84/{z}/{x}/{y}.png', {
      maxZoom: 17,
      id: 'APIKEY'
    }).addTo(mymap);

    var counter = 1;

    function onMapClick(e) {
      L.marker(e.latlng)
        .addTo(mymap)
        .bindPopup("Popup " + (counter++)).openPopup();
    }

    mymap.on('click', onMapClick);
  });

  $("#vr_list_item").click(function () {
    var circle = $("#hse_vr .circle"),
      hse_vr_tl = gsap.timeline();

    hse_vr_tl
      .to(circle, 1, {
        rotationX: 360
      })
      .to(circle, 1.5, {
        rotationY: 360,
        rotationZ: 360
      })
      .to(circle, 1, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
      });
    $("#hse_photo").css("display", "none");
  });

  $("#hse_vr .circle").click(function () {
    window.location.href = "vr.html";
  });

  $("#floor_list_item").click(function () {
    $("#hse_photo").css("display", "none");
  });

  $("#photo_list_item").click(function () {
    $("#hse_photo").css("display", "block");
  });

  gsap.set("#hse_floor", {
    perspective: 800
  });
  gsap.set(".hse_flip_plan", {
    transformStyle: "preserve-3d"
  });
  gsap.set(".back", {
    rotationY: -180
  });
  gsap.set([".back", ".front"], {
    backfaceVisibility: "hidden"
  });

  $("#hse_floor").hover(
    function () {
      gsap.to($(this).find(".hse_flip_plan"), {
        duration: 1.2,
        rotationY: 180,
        ease: Back.easeOut
      });
    },
    function () {
      gsap.to($(this).find(".hse_flip_plan"), {
        duration: 1.2,
        rotationY: 0,
        ease: Back.easeOut
      });
    }
  );

  gsap.to($(".hse_flip_plan"), {
    duration: 1,
    rotationY: -180,
    repeat: 1,
    yoyo: true,
    stagger: 0.1
  });

  $(".sp-slider > li img").click(function () {
    console.log($("#hse_enlarge_img"));
    
   var imgsrc = $(this).attr("src"); $("#hse_enlarge_img").addClass("hse_enlarge_img_click");
    
    $("#en_btn_hse").css({display:"block"});
   $("#hse_enlarge_img img").attr("src", imgsrc);
  });

  $("#en_btn_hse").click(function () {
   $("#en_btn_hse").css({display:"none"}); $("#hse_enlarge_img").removeClass("hse_enlarge_img_click");
    $("#hse_enlarge_img img").attr("src", "");
  })
})