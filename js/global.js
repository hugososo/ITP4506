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

      if(data.next.url.path === "/propertyManagement.html"){
        var scriptt = document.createElement('script');
      scriptt.src = './js/property.js';
      data.next.container.appendChild(scriptt);
      console.log(scriptt);

      var linkt = document.createElement('link');
      linkt.href = 'style.css';
      data.next.container.appendChild(linkt);
      console.log(linkt);
      }
      


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
          duration: 1,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          }
        })
        .to("#wave", {
          scale: 5,
          duration: 1,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          }
        })
        .to("#wave", {
          scale: 7,
          duration: 1,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          }
        })
        .to("#wave", {
          scale: 12,
          duration: 1,
          ease: Back.easeOut.config(1.7),
          onComplete: function () {
            tl.pause();
          }
        });

      tl.pause();

      $(document).ready(function () {
        $("#wave").click(function () {
          console.log("1");
          tl.play();
        });
      })

    }
  }],

});
