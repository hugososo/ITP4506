function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to('.transition', {
    duration: 0.5,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut"
  });
  tl.to(".transition", {
    duration: 0.5,
    width: "100%",
    left: "100%",
    ease: "Expo.ease",
    delay: 0.2
  });
  tl.set(".transition", {
    left: "-100%"
  });
}

function indexAnimation() {
  let one = gsap.timeline({
    scrollTrigger: {
      trigger: '.first-section',
    }
  });

  one.from(".first-section blockquote span", {
      width: 0,
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".first-0", {
      y: 100,
      opacity: 0,
      duration: 1
    }, "-=1")
    .from(".first-1", {
      y: -100,
      opacity: 0,
      duration: 1
    }, "-=1")
    .from(".first-section .title:nth-child(1)", {
      x: -700,
      opacity: 0,
      duration: 1
    }, "-=0.8")
    .from(".first-section .title:nth-child(2)", {
      x: 700,
      opacity: 0,
      duration: 1
    }, "-=1")
    .from(".first-section .title:nth-child(3)", {
      x: -700,
      opacity: 0,
      duration: 1
    }, "-=1")
    .from(".first-section .title .title-text-2", {
      opacity: 0,
      duration: 1
    })
    .from(".first-3", {
      x: -500,
      y: 300,
      opacity: 0,
      duration: 1
    }, "-=2")
    .from(".first-2", {
      x: -500,
      y: 300,
      opacity: 0,
      duration: 1
    }, "-=1.5");

  let two = gsap.timeline({
    scrollTrigger: {
      trigger: '.second-section',
      start: 'top top',
      end: '+=1000',
      // markers: true,
      scrub: 1,
      pin: true,
    }
  });

  two.from(".second-6", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    })
    .from(".second-5", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    }, "-=2")
    .from(".second-4", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    }, "-=2")
    .from(".second-3", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    }, "-=2")
    .from(".second-2", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    }, "-=2")
    .from(".second-1", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2
    }, "-=2")
    .from(".second-0", {
      opacity: 0.5,
      y: 100,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=2")
    .from(".second-1", {
      x: -350,
      y: 200,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-2", {
      x: 350,
      y: 200,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-3", {
      x: -300,
      y: 30,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-4", {
      x: 300,
      y: 30,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-5", {
      x: -200,
      y: -80,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-6", {
      x: 200,
      y: -80,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .to(".secondani-container", {
      x: -360,
      ease: Expo.easeInOut,
      duration: 1
    })
    .from("#secondimg-layer", {
      xPercent: -100,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .to("#second-section-text", {
      xPercent: 5,
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=0.5");

  let three = gsap.timeline({
    scrollTrigger: {
      trigger: '.third-section',
    }
  });

  three.from(".title-text", {
      x: -200,
      opacity: 0,
      duration: 1
    })
    .from(".subtitle-text", {
      x: -200,
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".svg-container", {
      x: -200,
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".svg-container2", {
      opacity: 0,
      yPercent: -1000,
      duration: 1,
      ease: Bounce.easeOut
    }, "-=1");
}


barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(600);
      done();
    },
    async enter(data) {
      indexAnimation();
    },
    async once(data) {
      indexAnimation();
    },
    async beforeEnter(data) {
      var links = document.querySelectorAll('a[href]');
      var cbk = function (e) {
        if (e.currentTarget.href === window.location.href) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      for (var i = 0; i < links.length; i++) {

        links[i].addEventListener('click', cbk);
      }

      console.log(data.next.url);


      //      var scriptt = document.createElement('script');
      //      scriptt.src = './js/property.js';
      //      data.next.container.appendChild(scriptt);
      //      console.log(scriptt);
      //
      //      var linkt = document.createElement('link');
      //      linkt.href = 'style.css';
      //      data.next.container.appendChild(linkt);
      //      console.log(linkt);

      Draggable.create(".key", {
        bounds: ".third-section",
        onDrag: function () {
          runKeyAnimation(true);
          if (this.hitTest("#eji28tuoi3pl21")) {
            gsap.to(this.target, {
              duration: 0.6,
              opacity: 0,
              scale: 0.5
            });
            runChestAnimation();
          }
        },
        onDragEnd: function () {
          runKeyAnimation(false);
        }
      });

      let tl = gsap.timeline();
      tl.to("#wave", {
          scale: 3,
          duration: 0.5,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          },
        })
        .to("#wave", {
          scale: 5,
          duration: 0.5,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          },
        })
        .to("#wave", {
          scale: 7,
          duration: 0.5,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          },
        })
        .to("#wave", {
          scale: 12,
          duration: 0.5,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          },
        });

      tl.pause();

      gsap.from(".form-container", {
        scale: 0,
        duration: 1,
        ease: Bounce.easeOut
      });

      let account = {
        customer: [
          {
            "email": "customer@email.com",
            "name": "Hugo",
            "pw": "Customer1"
          },
          {
            "email": "customer2@email.com",
            "name": "Clark",
            "pw": "Customer2"
          },
          {
            "email": "customer3@email.com",
            "name": "Thomas",
            "pw": "Customer3"
          }
        ],
        manager: [
          {
            "email": "manager@email.com",
            "name": "Manager So",
            "pw": "Manager1"
          },
          {
            "email": "manager2@email.com",
            "name": "Manager Chan",
            "pw": "Manager2"
          },
        ],
        agent: [
          {
            "email": "agent@email.com",
            "name": "Agent Hugo",
            "pw": "Agent123"
          },
          {
            "email": "agent2@email.com",
            "name": "Agent Clark",
            "pw": "Agent456"
          },
          {
            "email": "agent3@email.com",
            "name": "Agent Thomas",
            "pw": "Agent789"
          }
        ]
      };

      $(document).ready(function () {
        let pwpass = false;

        $(":password").focus(function () {
          $(".check-password").slideDown(300);
        })

        let stack2 = [];
        $(":password").keyup(function () {
          let lowerCase = /[a-z]/g;
          let upperCase = /[A-Z]/g;
          let num = /[0-9]/g;
          let stack = [];

          if ($("#pw").val().length > 0) {
            $(".check-password").show();
          }
          if ($("#pw").val().match(lowerCase)) {
            $("#1low").attr("src", "assets/tick.png");
            stack.push(1);
          } else {
            $("#1low").attr("src", "assets/cross.png");
            if (stack[0] == 1) {
              console.log(stack.pop());
            }
          }
          if ($("#pw").val().match(upperCase)) {
            $("#1up").attr("src", "assets/tick.png");
            stack.push(2);
          } else {
            $("#1up").attr("src", "assets/cross.png");
            if (stack[1] == 2)
              console.log(stack.pop());
          }
          if ($("#pw").val().match(num)) {
            $("#1num").attr("src", "assets/tick.png");
            stack.push(3);
          } else {
            $("#1num").attr("src", "assets/cross.png");
            if (stack[2] == 3)
              console.log(stack.pop());
          }
          if ($("#pw").val().length >= 8) {
            $("#8char").attr("src", "assets/tick.png");
            stack.push(4);
          } else {
            $("#8char").attr("src", "assets/cross.png");
            if (stack[3] == 4)
              console.log(stack.pop());
          }
          if (stack.length > stack2.length) {
            for (let i = 0; i < 4; i++) {
              if (stack.length == i + 1)
                tl.play(i * 0.5);
            }
          }
          if (stack.length < stack2.length) {
            tl.timeScale(2).tweenFromTo(tl.time(), stack.length * 0.5);
          }
          stack2 = stack;
        });
        $(".register-submit").click(function (e) {
          // e.preventDefault();
          if ($("#cpw").val() == $("#pw").val() && stack2.length == 4) {
            pwpass = true;
            account.user.push({
              "email": $("#email").val(),
              "name": $("#name").val(),
              "pw": $("#pw").val(),
              "role": "user"
            });
            $("#cpw").css("border", "none");
            $("#warning-msg").slideUp();
            $("#success-msg").slideDown();
          } else {
            pwpass = false;
            $("#cpw").css("border", "1px solid red");
            $("#success-msg").slideUp();
            $("#warning-msg").slideDown();
          }

          var result = account["user"].find(function (item, index, array) {
            console.log(item.email);
            return item.email == $("#loginEmail").val() && item.pw == $("#loginPw").val();
          });

          if (typeof result === 'undefined') {
            if (tl.time() == 2)
              tl.tweenFromTo(2, 0).timeScale(2);
            else
              tl.pause(0);
            $("#loginEmail").css("background-color", "rgb(255, 197, 197)");
            $("#loginPw").css("background-color", "rgb(255, 197, 197)");
            $("#warning-msg2").slideDown();
            $("#success-msg2").slideUp();
          } else {
            tl.tweenFromTo(0, 2).timeScale(2);
            $("#loginEmail").css("background-color", "white");
            $("#loginPw").css("background-color", "white");
            $("#warning-msg2").slideUp();
            $("#success-msg2").slideDown();
            setTimeout(function () {
              window.location.replace("index.html");
            }, 3000);
          }
        });

        function readURL(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              $('#card-img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]); // convert to base64 string
          }
        }

        $("#agentcard").change(function () {
          readURL(this);
        });

        $("#agentcb").click(function () {
          if ($(this).prop("checked") == true) {
            $("#agent-container").slideDown();
            $("#agent-container").css("display", "flex");
          } else if ($(this).prop("checked") == false) {
            $("#agent-container").slideUp();
          }
        });

        $("#drop-area").on('dragenter', function (e) {
          e.preventDefault();
          $(this).css('background', '#BBD5B8');
        });

        $("#drop-area").on('dragover', function (e) {
          e.preventDefault();
        });

        $("#drop-area").on('drop', function (e) {
          $(this).css('background', 'transparent');
          e.preventDefault();
          var image = e.originalEvent.dataTransfer.files;
          console.log(e);
          if (image.length > 0) {
            var file = image[0];
            $("#card-img").attr('src', "assets/" + file.name);
          }
        });
        // End of accountjs
        // propertyjs
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
            $(this).attr("href", "#form-sure");
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
          filpcard(flipcard, filp);

          flipcard.play(0);

        });

        function filpcard(filpTL, num) {
          var h = $("#card-slider" + num + " > .card");
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
        // End of Propertyjs
        // searchPropertyjs
        $("#slider-range").slider({
          range: true,
          min: 500000,
          max: 50000000,
          step: 300000,
          values: [500000, 50000000],
          slide: function (event, ui) {
            $("#pricerange").val(ui.values[0] + " - " + ui.values[1]);
          }
        });
        $("#pricerange").val($("#slider-range").slider("values", 0) +
          " - " + $("#slider-range").slider("values", 1));

        $(".advancebtn").click(function () {
          $(".filter-container").slideToggle();
        });

        $.getJSON('hseInfo.json', function (data) {
          property = data;
          let count = 0;

          var mymap = L.map('map-container').setView([22.318455, 114.191612], 17);

          L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png', {
            attribution: '<u href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u><div style="width:28px;height:28px;display:inline-flex;background:url(https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg);background-size:28px;"></div>',
            maxZoom: 17,
            id: 'APIKEY'
          }).addTo(mymap);

          L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/en/wgs84/{z}/{x}/{y}.png', {
            maxZoom: 17,
            id: 'APIKEY'
          }).addTo(mymap);

          var markers = L.markerClusterGroup();

          property.forEach(function (item, index, array) {
            count++;
            $("#property-result").append(
              '<div class="user-card">' +
              '<div class="user-card-img">' +
              '<img src="' + item.img1 + '" alt="" width="150px" height="100px">' +
              '</div>' +
              '<div class="user-card-content" style="margin-left:10px">' +
              '<h3 class="user-card-text-1">' + item.name + '</h3>' +
              '<p class="user-card-text-2">' + item.address + '</p>' +
              '<p style="color: rgb(70, 70, 70);">' + item.numOfRoom + " Room | " + item.type + '</p>' +
              '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$' + item.price + '</span>' +
              '<span style="margin-left:5px;font-size:12pt">' + item.size + " sq.ft." + '</span>' +
              '</div>' +
              '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=' + index + '"/>' +
              '</div>'
            );
            $("#total-result").html(count);
            markers.addLayer(L.marker(item.property_geo).bindPopup("<h2>" + item.name + "</h2><p>" + item.address + "</p>").addTo(mymap));
          });
          markers.on('click', function (a) {
            count = 0;
            const geoData = Object.values(a.layer._latlng);
            property.filter(function (item, index, array) {
              if (JSON.stringify(item.property_geo) == JSON.stringify(geoData)) {
                count++;
                $("#property-result").html(
                  '<div class="user-card">' +
                  '<div class="user-card-img">' +
                  '<img src="' + item.img1 + '" alt="" width="150px" height="100px">' +
                  '</div>' +
                  '<div class="user-card-content" style="margin-left:10px">' +
                  '<h3 class="user-card-text-1">' + item.name + '</h3>' +
                  '<p class="user-card-text-2">' + item.address + '</p>' +
                  '<p style="color: rgb(70, 70, 70);">' + item.numOfRoom + " Room | " + item.type + '</p>' +
                  '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$' + item.price + '</span>' +
                  '<span style="margin-left:5px;font-size:12pt">' + item.size + " sq.ft." + '</span>' +
                  '</div>' +
                  '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=' + index + '"/>' +
                  '</div>'
                );
                $("#total-result").html(count);
              }
            });
          });
          markers.on('clusterclick', function (a) {
            $("#property-result").html("");
            count = 0;
            for (var i in a.layer.getAllChildMarkers()) {
              const geoData = Object.values(a.layer.getAllChildMarkers()[i]._latlng);
              property.filter(function (item, index, array) {
                if (JSON.stringify(item.property_geo) == JSON.stringify(geoData)) {
                  count++;
                  $("#property-result").append(
                    '<div class="user-card">' +
                    '<div class="user-card-img">' +
                    '<img src="' + item.img1 + '" alt="" width="150px" height="100px">' +
                    '</div>' +
                    '<div class="user-card-content" style="margin-left:10px">' +
                    '<h3 class="user-card-text-1">' + item.name + '</h3>' +
                    '<p class="user-card-text-2">' + item.address + '</p>' +
                    '<p style="color: rgb(70, 70, 70);">' + item.numOfRoom + " Room | " + item.type + '</p>' +
                    '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$' + item.price + '</span>' +
                    '<span style="margin-left:5px;font-size:12pt">' + item.size + " sq.ft." + '</span>' +
                    '</div>' +
                    '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=' + index + '"/>' +
                    '</div>'
                  );
                }
              });
            }
            $("#total-result").html(count);
          });
          mymap.addLayer(markers);
        });

        $('.addfilter input:checkbox,input:radio').prop("checked", false);

        $('input:checkbox,input:radio').change(function () {
          if ($(this).is(':checked')) {
            $(this).parent().appendTo(".filter-selected-container");
          } else {
            if ($(this).parent().attr("class") == 'addfilter belongitem1')
              $(this).parent().appendTo("#item-container-1");
            if ($(this).parent().attr("class") == 'addfilter belongitem2')
              $(this).parent().appendTo("#item-container-2");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
              $(this).parent().appendTo("#item-container-3");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
              $(this).parent().appendTo("#item-container-4");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
              $(this).parent().appendTo("#item-container-5");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
              $(this).parent().appendTo("#item-container-6");
          }
          if ($("#low2high").is(':checked')) {
            $("#high2low").parent().appendTo("#item-container-6");
          }
          if ($("#high2low").is(':checked')) {
            $("#low2high ").parent().appendTo("#item-container-6");
          }
        });

        $('.resetbtn').click(function () {
          count = 0;
          $(".belongitem1").appendTo("#item-container-1");
          $(".belongitem2").appendTo("#item-container-2");
          $(".belongitem3").appendTo("#item-container-3");
          $(".belongitem4").appendTo("#item-container-4");
          $(".belongitem5").appendTo("#item-container-5");
          $(".belongitem6").appendTo("#item-container-6");
          $('.addfilter input:checkbox,input:radio').prop("checked", false);
          $('.searchbar').val("");
          $.getJSON('hseInfo.json', function (data) {
            $("#property-result").html("");
            property = data;
            property.forEach(function (item, index, array) {
              count++;
              $("#property-result").append(
                '<div class="user-card">' +
                '<div class="user-card-img">' +
                '<img src="' + item.img1 + '" alt="" width="150px" height="100px">' +
                '</div>' +
                '<div class="user-card-content" style="margin-left:10px">' +
                '<h3 class="user-card-text-1">' + item.name + '</h3>' +
                '<p class="user-card-text-2">' + item.address + '</p>' +
                '<p style="color: rgb(70, 70, 70);">' + item.numOfRoom + " Room | " + item.type + '</p>' +
                '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$' + item.price + '</span>' +
                '<span style="margin-left:5px;font-size:12pt">' + item.size + " sq.ft." + '</span>' +
                '</div>' +
                '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=' + index + '"/>' +
                '</div>'
              );
              $("#total-result").html(count);
            });
          });
        });

        $('#price-range-selector').click(function () {
          console.log($(this).parent().attr("class"));
          if ($(this).parent().attr("class") == "filteritem-container")
            $(this).appendTo(".filter-selected-container");
          else {
            if ($(this).parent().attr("class") == 'filter-selected-container')
              $(this).appendTo("#item-container-6");
          }
        });
        // End of searchpropertyjs
        // SearchUser js
        $("#slider-range").slider({
          range: true,
          min: new Date('2020-09-01').getTime() / 1000,
          max: Date.now() / 1000,
          step: 86400,
          values: [new Date('2020-09-01').getTime() / 1000, Date.now() / 1000],
          slide: function (event, ui) {
            $("#daterange").val((new Date(ui.values[0] * 1000).toDateString().split(' ').slice(1).join(' ')) + " - " + (new Date(ui.values[1] * 1000)).toDateString().split(' ').slice(1).join(' '));
          }
        });
        $("#daterange").val((new Date($("#slider-range").slider("values", 0) * 1000).toDateString().split(' ').slice(1).join(' ')) +
          " - " + (new Date($("#slider-range").slider("values", 1) * 1000)).toDateString().split(' ').slice(1).join(' '));

        $(".advancebtn").click(function () {
          $(".filter-container").slideToggle();
        });

        let ac;

        $.getJSON('js/account.json', function (data) {
          ac = data;
          let count = 0;
          ac['user'].forEach(function (item, index, array) {
            if (item.role != "manager") {
              count++;
              $(".userresult-container").append(
                '<div class="user-card">' +
                '<div class="user-card-img">' +
                '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                '</div>' +
                '<div class="user-card-content">' +
                '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                '</div>' +
                '<div class="user-card-toggle">' +
                '<p style="color: #5c5c5c;">Account Status</p>' +
                '<label class="switch">' +
                '<input type="checkbox" checked>' +
                '<span class="slider round"></span>' +
                '</label>' +
                '</div>' +
                '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                '</div>'
              );
              $("#total-result").html(count);
            }
          });
        });

        $('.addfilter input:checkbox,input:radio').prop("checked", false);

        $('input:checkbox,input:radio').change(function () {
          if ($(this).is(':checked')) {
            $(this).parent().appendTo(".filter-selected-container");
          } else {
            if ($(this).parent().attr("class") == 'addfilter belongitem1')
              $(this).parent().appendTo("#item-container-1");
            if ($(this).parent().attr("class") == 'addfilter belongitem2')
              $(this).parent().appendTo("#item-container-2");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
              $(this).parent().appendTo("#item-container-3");
          }
          if ($("#old2new").is(':checked')) {
            $("#new2old").parent().appendTo("#item-container-3");
          }
          if ($("#new2old").is(':checked')) {
            $("#old2new ").parent().appendTo("#item-container-3");
          }
        });

        $('.resetbtn').click(function () {
          $(".belongitem1").appendTo("#item-container-1");
          $(".belongitem2").appendTo("#item-container-2");
          $(".belongitem3").appendTo("#item-container-3");
          $('.addfilter input:checkbox,input:radio').prop("checked", false);
          $('.searchbar').val("");
          $(".searchbtn").click();
        });

        $('#date-range-selector').click(function () {
          console.log($(this).parent().attr("class"));
          if ($(this).parent().attr("class") == "filteritem-container")
            $(this).appendTo(".filter-selected-container");
          else {
            if ($(this).parent().attr("class") == 'filter-selected-container')
              $(this).appendTo("#item-container-3");
          }
        });

        $(".searchbtn").click(function () {
          $(".userresult-container").html("");
          const rolefilter = ac["user"].filter(function (item, index, array) {
            if ($("#user").is(":checked"))
              var customer = $("#user").val();
            if ($("#agent").is(":checked"))
              var agent = $("#agent").val();
            if (!$("#agent").is(":checked") && !$("#user").is(":checked")) {
              var agent = $("#agent").val();
              var customer = $("#user").val();
            }
            return item.role == customer || item.role == agent;
          });
          const sexfilter = rolefilter.filter(function (item, index, array) {
            if ($("#male").is(":checked"))
              var male = $("#male").val();
            if ($("#female").is(":checked"))
              var female = $("#female").val();
            if (!$("#male").is(":checked") && !$("#female").is(":checked")) {
              return rolefilter;
            }
            return item.sex == male || item.sex == female;
          });

          let arr = [];
          let min;
          let max;

          for (item of sexfilter) {
            arr.push(new Date(item.date).getTime());
          }

          let dateArr = [...arr];
          let orderedArr = [];

          if (!$("#new2old").is(":checked") && !$("#old2new").is(":checked")) {
            orderedArr = [...sexfilter];
          } else {
            if ($("#new2old").is(":checked")) {
              for (item of dateArr) {
                min = arr.indexOf(Math.min.apply(null, arr));
                orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(min, 1)[0])]);
              }
            }
            if ($("#old2new").is(":checked")) {
              for (item of dateArr) {
                max = arr.indexOf(Math.max.apply(null, arr));
                orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(max, 1)[0])]);
              }
            }
          }

          let sliderleft = $(new Date($("#slider-range").slider("values", 0) * 1000).getTime());
          let sliderright = $(new Date($("#slider-range").slider("values", 1) * 1000).getTime());
          if ($("#daterange").parent().parent().attr("class") == 'filter-selected-container') {
            let count = 0;
            const dateRangeFilter = orderedArr.filter(function (item, index, array) {
              let itemdate = new Date(item.date).getTime();
              if (itemdate >= sliderleft[0] && itemdate <= sliderright[0]) {
                count++;
                $(".userresult-container").append(
                  '<div class="user-card">' +
                  '<div class="user-card-img">' +
                  '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                  '</div>' +
                  '<div class="user-card-content">' +
                  '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                  '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                  '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                  '</div>' +
                  '<div class="user-card-toggle">' +
                  '<p style="color: #5c5c5c;">Account Status</p>' +
                  '<label class="switch">' +
                  '<input type="checkbox" checked>' +
                  '<span class="slider round"></span>' +
                  '</label>' +
                  '</div>' +
                  '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                  '</div>'
                );
              }
            });
          } else {
            const dateRangeFilter = orderedArr.filter(function (item, index, array) {
              $(".userresult-container").append(
                '<div class="user-card">' +
                '<div class="user-card-img">' +
                '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                '</div>' +
                '<div class="user-card-content">' +
                '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                '</div>' +
                '<div class="user-card-toggle">' +
                '<p style="color: #5c5c5c;">Account Status</p>' +
                '<label class="switch">' +
                '<input type="checkbox" checked>' +
                '<span class="slider round"></span>' +
                '</label>' +
                '</div>' +
                '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                '</div>'
              );
            });
          }

          var lowerCase = $(".searchbar").val().toLowerCase();

          var searchText = $(".user-card");
          var resultCount = searchText.length;
          for (i = 0; i < searchText.length; i++) {
            searchStr = searchText[i].innerText.toLowerCase();
            if (searchStr.indexOf(lowerCase) > -1) {
              searchText.eq(i).show();
            } else {
              searchText.eq(i).hide();
              resultCount--;
            }
          }
          $("#total-result").html(resultCount);
        });
        // End of Search User js
        // hseDetail js
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
          $("#hse_photo #button-1").prop('checked', true);
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

            var imgsrc = $(this).attr("src");
            $("#hse_enlarge_img").addClass("hse_enlarge_img_click");

            $("#en_btn_hse").css({
              display: "block"
            });
            $("#hse_enlarge_img img").css({
              display: "block"
            });
            $("#hse_enlarge_img img").attr("src", imgsrc);
          });

          $("#en_btn_hse").click(function () {
            $("#en_btn_hse").css({
              display: "none"
            });
            $("#hse_enlarge_img img").css({
              display: "none"
            });
            $("#hse_enlarge_img").removeClass("hse_enlarge_img_click");
            $("#hse_enlarge_img img").attr("src", "");
          })
        })



        // End of hseDetail.js

      });
    },
    async beforeLeave(data) {

    }
  }],


});