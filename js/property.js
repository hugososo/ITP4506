$(function () {
  var background = $("#exchange_area"),
    background2 = $("#exchange_area > *"),
    side_background = $(".side_bar"),
    tl = gsap.timeline();

$('#example').DataTable();

  tl.fromTo(side_background, {
    opacity: 0.5,
    //    backgroundColor: "transparent",
  }, {
    duration: 2,
    backgroundColor: "white",
    opacity: 1,
    ease: "back.inOut(1.7)",
  });

  tl.fromTo(background2, {
    //    y: 50,
    opacity: 0.4,
  }, {
    //    y:0,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1, 0.8)",
  }, "-=2");


  tl.fromTo(background, {
    opacity: 1,
  }, {
    opacity: 1,
    duration: 2.5,
    ease: "expo.out",
  });


  $('ul.mcd-menu li a').on('click', function (e) {
    //    e.preventDefault();

    //    e. = false;
    var el = $(this);
    $(this).addClass("active");
    $('ul.mcd-menu li a').not(el).removeClass("active");

    var linkID = $(this).attr('data-page');
    console.log(linkID);
    //    var sectionActive = $('#exchange_area div.clicked').attr('id');
    var $sectionActive = $("#exchange_area div.clicked"),
      sectionClicked = $('#exchange_area div#' + linkID),
      $sectionsNotClicked = $('#exchange_area div').not(sectionClicked);

    if ($('#exchange_area div:not(div#' + linkID + ')').hasClass('clicked')) {

      //      tl = gsap.timeline({
      //        //              paused: true
      //      })
      //
      //      tl.set($sectionsNotClicked, {
      //          opacity: 0
      //        })
      //
      //        .fromTo($sectionActive, .7, {
      //          opacity: 1,
      //        }, {
      //          opacity: 0,
      //          rotation: 30,
      //          x: 100,
      //        }, "A")
      //
      //        .fromTo(sectionClicked, .7, {
      //          scale: 1,
      //          //          xPercent: 100,
      //          //          yPercent: -20,
      //          opacity: 0,
      //        }, {
      //          //          xPercent: 20,
      //          //          scale: 1,
      //          opacity: .6,
      //        }, "A")
      //
      //        .to(sectionClicked, .5, {
      //
      //          opacity: 1,
      //          ease: "back.inOut(1.7)"
      //        }, "B")
      //
      //        .to($sectionActive, {
      //          rotation: 0,
      //          x: 0,
      //          //          transformOrigin: "left 50%",
      //
      //          duration: 0.5,
      //          ease: "back.inOut(1.7)",
      //          onComplete: function () {
      //
      //            $sectionActive.toggleClass('clicked');
      //            sectionClicked.toggleClass('clicked');
      //          }
      //        }, "B")
      //        .play();

      $sectionActive.toggleClass('clicked');
      sectionClicked.toggleClass('clicked');
    } else {
      console.log("no");
    }
  });

  $("button.prop_close_form1").on("click", function (e) {
    alert("Submitted");
  });
  
  $("#update_form2_up").on("click", function (e) {
   e.preventDefault(); 
    alert("Updated!");
//   console.log($("#prop_update_form_email").text()); $("#prop_update_form_email").val($("#prop_update_form_email").html());
//    $("#prop_update_form_phone").val($("#prop_update_form_phone").html());
  });

  $(".next").on("click", function (e) {
    console.log(e);
    console.log($("#huge_form ul li.activeForm"));
    //    e.preventDefault();

    var maxPage = $("#huge_form ul li").length;
    var activeEl = $("#huge_form ul li.activeForm");
    var page = parseInt(activeEl.attr("data-part"));
    var progress = 100 / maxPage * (page + 1);
    $(".form_status").css("width", progress + "%");
    if (page === 4) {
//      $("#form-sure").css("visibility","visible");
      return;
    } else if (page === 3) {
      $(this).html("Submit");
      $(this).attr("href","#form-sure");
    }


    activeEl.toggleClass("activeForm");
    $("#form1_list" + (++page)).toggleClass("activeForm");
    $(".form_step").html(page + " / 4");

  });

  $(".back").on("click", function (e) {
    //    e.preventDefault();
    var maxPage = $("#huge_form ul li").length;
    var activeEl = $("#huge_form ul li.activeForm");
    var page = parseInt(activeEl.attr("data-part"));


    if (page === 4) {
      $(".next").html("Continue");
      
    } else if (page === 1) {
      //      $(this).disable = true;
      return;
    }
    console.log("page :" + page);
    var progress = 100 / maxPage * (page - 1);
    console.log("progress :" + progress);
    $(".form_status").css("width", progress + "%");

    activeEl.toggleClass("activeForm");
    $("#form1_list" + (--page)).toggleClass("activeForm");
    $(".form_step").html(page + " / 4");
  });


  $("#slideshow1 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow1 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow1');
  }, 3000);

  $("#slideshow2 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow2 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow2');
  }, 3000);

  $("#slideshow3 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow3 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow3');
  }, 3000);

  $("#slideshow4 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow4 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow4');
  }, 3000);

$("#slideshow5 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow5 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow5');
  }, 3000);

$("#slideshow6 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow6 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow6');
  }, 3000);

$("#slideshow7 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow7 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow7');
  }, 3000);

$("#slideshow8 > div:gt(0)").hide();

  setInterval(function () {
    $('#slideshow8 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow8');
  }, 3000);


  $(".p3_tab_btn").on("click", function () {
    var flipcard = gsap.timeline();
    var filp = $(this).attr("data-filp");
    filpcard(flipcard,filp);

    flipcard.play(0);

  });

  function filpcard(filpTL,num) {
    var h = $("#card-slider"+num+" > .card");
    console.log(h.length);

    for (var i = 0; i < h.length; i++) {
      filpTL.fromTo(h[i], {
        rotationY: 360,
      }, {
        rotationY: 0,
        duration: 1.5,
      }, "-=1.2");
      console.log(h[i]);
    }
  }

  $(".card").on("click", function () {

    if ($(this).find(".card-header>.pin-overlay").attr("data-pin") === "1") {
      $(this).find(".card-header>.pin-overlay").css("left", "0%");
      $(this).find(".card-header>.pin-overlay").css("top", "0%");
      $(this).find(".card-header>.pin-overlay").css("opacity", "0.3");
      $(this).css("border", "3px solid red");

      $(this).find(".card-header>.pin-overlay").attr("data-pin", "0");

    } else {
      $(this).find(".card-header>.pin-overlay").css("left", "100%");
      $(this).find(".card-header>.pin-overlay").css("top", "-100%");
      $(this).find(".card-header>.pin-overlay").css("opacity", "0");
      $(this).css("border", "none");

      $(this).find(".card-header>.pin-overlay").attr("data-pin", "1");
    }

  });

  $(".card").on("mouseover", function () {
    if ($(this).find(".card-header>.pin-overlay").attr("data-pin") === "0") {
      $(this).find(".card-header>.pin-overlay").css("opacity", "0.6");
      $(this).find(".card-header>.pin-overlay").css("z-index", "1");
    }

    $(this).css('transform', 'scale(1.1)');
  });

  $(".card").on("mouseleave", function () {
    if ($(this).find(".card-header>.pin-overlay").attr("data-pin") === "0") {
      $(this).find(".card-header>.pin-overlay").css("opacity", "0.3");
      $(this).find(".card-header>.pin-overlay").css("z-index", "-1");
    }

    $(this).css('transform', 'scale(1)');
  });

  Draggable.create("#card-slider", {
    bounds: "#slider_bound",
    //allowNativeTouchScrolling:false,
    type: "x"
  });

  Draggable.create("#card-slider1", {
    bounds: "#slider_bound1",
    //allowNativeTouchScrolling:false,
    type: "x"
  });

  $(".card .btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().parent().css("display", "none");
  });


});