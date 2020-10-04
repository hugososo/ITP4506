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
      end: '+=4200',
      // markers: true,
      scrub: 1,
      pin: true,
    }
  });

  two.from(".second-6", {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1
  })
    .from(".second-5", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-4", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-3", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-2", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-1", {
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 1
    }, "-=1")
    .from(".second-0", {
      opacity: 0,
      ease: Expo.easeInOut
    })
    .from(".second-1", {
      x: -350,
      y: 200,
      ease: Expo.easeInOut
    })
    .from(".second-2", {
      x: 350,
      y: 200,
      ease: Expo.easeInOut
    })
    .from(".second-3", {
      x: -300,
      y: 30,
      ease: Expo.easeInOut
    })
    .from(".second-4", {
      x: 300,
      y: 30,
      ease: Expo.easeInOut
    })
    .from(".second-5", {
      x: -200,
      y: -80,
      ease: Expo.easeInOut
    })
    .from(".second-6", {
      x: 200,
      y: -80,
      ease: Expo.easeInOut
    })
    .from(".blockquote2-div1 blockquote:nth-child(1)", {
      x: -150,
      opacity: 0,
      ease: Expo.easeInOut
    })
    .from(".blockquote2-div1 blockquote:nth-child(2)", {
      x: 150,
      opacity: 0,
      ease: Expo.easeInOut
    })
    .from(".blockquote2-div2 blockquote:nth-child(1)", {
      x: -150,
      opacity: 0,
      ease: Expo.easeInOut
    })
    .from(".blockquote2-div2 blockquote:nth-child(2)", {
      x: 150,
      opacity: 0,
      ease: Expo.easeInOut
    })
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


        var scriptt = document.createElement('script');
      scriptt.src = './js/property.js';
      data.next.container.appendChild(scriptt);
      console.log(scriptt);

      var linkt = document.createElement('link');
      linkt.href = 'style.css';
      data.next.container.appendChild(linkt);
      console.log(linkt);

      


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
      tl.to("#wave", { scale: 3, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
        .to("#wave", { scale: 5, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
        .to("#wave", { scale: 7, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, })
        .to("#wave", { scale: 12, duration: 0.5, ease: Back.easeOut.config(1.7), onComplete: function () { tl.pause(); }, });

      tl.pause();

      let account = {
        customer: [
            { "email": "customer@email.com", "name": "Hugo", "pw": "Customer1" },
            { "email": "customer2@email.com", "name": "Clark", "pw": "Customer2" },
            { "email": "customer3@email.com", "name": "Thomas", "pw": "Customer3" }
        ],
        manager: [
            { "email": "manager@email.com", "name": "Manager So", "pw": "Manager1" },
            { "email": "manager2@email.com", "name": "Manager Chan", "pw": "Manager2" },
        ],
        agent: [
            { "email": "agent@email.com", "name": "Agent Hugo", "pw": "Agent123" },
            { "email": "agent2@email.com", "name": "Agent Clark", "pw": "Agent456" },
            { "email": "agent3@email.com", "name": "Agent Thomas", "pw": "Agent789" }
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
          }
          else {
            $("#1low").attr("src", "assets/cross.png");
            if (stack[0] == 1) {
              console.log(stack.pop());
            }
          }
          if ($("#pw").val().match(upperCase)) {
            $("#1up").attr("src", "assets/tick.png");
            stack.push(2);
          }
          else {
            $("#1up").attr("src", "assets/cross.png");
            if (stack[1] == 2)
              console.log(stack.pop());
          }
          if ($("#pw").val().match(num)) {
            $("#1num").attr("src", "assets/tick.png");
            stack.push(3);
          }
          else {
            $("#1num").attr("src", "assets/cross.png");
            if (stack[2] == 3)
              console.log(stack.pop());
          }
          if ($("#pw").val().length >= 8) {
            $("#8char").attr("src", "assets/tick.png");
            stack.push(4);
          }
          else {
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
        $(":submit").click(function (e) {
          // e.preventDefault();
          if ($("#cpw").val() == $("#pw").val() && stack2.length == 4) {
            pwpass = true;
            account.customer.push({ "email": $("#email").val(), "name": $("#name").val(), "pw": $("#pw").val() });
            console.log(account);
            $("#cpw").css("border", "none");
            $("#warning-msg").slideUp();
            $("#success-msg").slideDown();
          } else {
            pwpass = false;
            $("#cpw").css("border", "1px solid red");
            $("#success-msg").slideUp();
            $("#warning-msg").slideDown();
          }

          for (i in account) {
            console.log(i);
            var result = account[i].find(function (item, index, array) {
              console.log(item.email);
              return item.email == $("#loginEmail").val() && item.pw == $("#loginPw").val();
            });
            if (typeof result === 'object')
              break;
          }
          console.log(result);
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
        })
      });
    }, async beforeLeave(data) {

    }
  }],


});
