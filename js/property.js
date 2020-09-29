//$(function () {
  var background = $("#exchange_area"),
    background2 = $("#exchange_area > *"),
    side_background = $(".side_bar"),
    tl = gsap.timeline();

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

      tl = gsap.timeline({
        //              paused: true
      })

      tl.set($sectionsNotClicked, {
          opacity: 0
        })

        .fromTo($sectionActive, .7, {
          opacity: 1,
        }, {
          opacity: 0,
          rotation: 30,
          x: 100,
        }, "A")

        .fromTo(sectionClicked, .7, {
          scale: 1,
          //          xPercent: 100,
          //          yPercent: -20,
          opacity: 0,
        }, {
          //          xPercent: 20,
          //          scale: 1,
          opacity: .6,
        }, "A")

        .to(sectionClicked, .5, {

          opacity: 1,
          ease: "back.inOut(1.7)"
        }, "B")

        .to($sectionActive, {
          rotation: 0,
          x: 0,
          //          transformOrigin: "left 50%",

          duration: 0.5,
          ease: "back.inOut(1.7)",
          onComplete: function () {

            $sectionActive.toggleClass('clicked');
            sectionClicked.toggleClass('clicked');
          }
        }, "B")
        .play();


    } else {
      console.log("no");
    }
  });


  $(".next").click(function (e) {
    e.preventDefault();
    var maxPage = $("#huge_form ul li").length;
    var activeEl = $("#huge_form ul li.activeForm");
    var page = parseInt(activeEl.attr("data-part"));
    var progress = 100 / maxPage * (page+1);
    $(".form_status").css("width", progress + "%");
    if (page === 4) {
      alert("Submitted");
      return;
    }else if(page === 3){
      $(this).html("Submit");
    }
    

    activeEl.toggleClass("activeForm");
    $("#form1_list" +(++page)).toggleClass("activeForm");
    $(".form_step").html(page + " / 4");
  });
  
  $(".back").click(function (e) {
    e.preventDefault();
    var maxPage = $("#huge_form ul li").length;
    var activeEl = $("#huge_form ul li.activeForm");
    var page = parseInt(activeEl.attr("data-part"));
    
    
    if (page === 4) {
      $(".next").html("Continue");
    }else if (page === 1){
//      $(this).disable = true;
      return;
    }
    console.log("page :"+page);
    var progress = 100 / maxPage * (page - 1);
    console.log("progress :"+progress);
    $(".form_status").css("width", progress + "%");

    activeEl.toggleClass("activeForm");
    $("#form1_list" +(--page)).toggleClass("activeForm");
    $(".form_step").html(page + " / 4");
  });


//})
