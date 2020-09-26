function delay(n) {
  n = n || 500;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function indexAnimation() {
  let one = gsap.timeline({
    scrollTrigger: {
      trigger: '.first-section',
    }
  });

  one.from(".first-section blockquote", { x: -200, opacity: 0, duration: 1 })
    .from(".first-section blockquote span", { width: 0, opacity: 0, duration: 1 }, "-=0.5")
    .from(".first-0", { y: 100, opacity: 0, duration: 1 }, "-=1")
    .from(".first-1", { y: -100, opacity: 0, duration: 1 }, "-=1")
    .from(".first-3", { x: -500, y: 300, opacity: 0, duration: 1 }, "-=1")
    .from(".first-2", { x: -500, y: 300, opacity: 0, duration: 1 });

  let two = gsap.timeline({
    scrollTrigger: {
      trigger: '.second-section',
      start: 'top top',
      end: '+=4200',
      markers: true,
      scrub: 1,
      pin: true,
    }
  });

  two.from(".second-6", { opacity: 0, ease: Expo.easeInOut, duration: 1 })
    .from(".second-5", { opacity: 0, ease: Expo.easeInOut, duration: 1 }, "-=1")
    .from(".second-4", { opacity: 0, ease: Expo.easeInOut, duration: 1 }, "-=1")
    .from(".second-3", { opacity: 0, ease: Expo.easeInOut, duration: 1 }, "-=1")
    .from(".second-2", { opacity: 0, ease: Expo.easeInOut, duration: 1 }, "-=1")
    .from(".second-1", { opacity: 0, ease: Expo.easeInOut, duration: 1 }, "-=1")
    .from(".second-0", { opacity: 0, ease: Expo.easeInOut })
    .from(".second-1", { x: -350, y: 200, ease: Expo.easeInOut })
    .from(".second-2", { x: 350, y: 200, ease: Expo.easeInOut })
    .from(".second-3", { x: -300, y: 30, ease: Expo.easeInOut })
    .from(".second-4", { x: 300, y: 30, ease: Expo.easeInOut })
    .from(".second-5", { x: -200, y: -80, ease: Expo.easeInOut })
    .from(".second-6", { x: 200, y: -80, ease: Expo.easeInOut })
    .from(".blockquote2-div1 blockquote:nth-child(1)", { x: -150, opacity: 0, ease: Expo.easeInOut })
    .from(".blockquote2-div1 blockquote:nth-child(2)", { x: 150, opacity: 0, ease: Expo.easeInOut })
    .from(".blockquote2-div2 blockquote:nth-child(1)", { x: -150, opacity: 0, ease: Expo.easeInOut })
    .from(".blockquote2-div2 blockquote:nth-child(2)", { x: 150, opacity: 0, ease: Expo.easeInOut })
  // .to(".second-0",{y:-16000,scale:100,ease:Expo.easeInOut})

  // const controller = new ScrollMagic.Controller();

  // let scene = new ScrollMagic.Scene({
  //     triggerElement:".second-section",
  //     triggerHook:"0",
  //     duration:"600%",
  //     offset: '300'
  // })
  // .setPin(".second-section")
  // .setTween(two)
  // .addTo(controller);
}

barba.init({
  sync: true,
  transitions: [{
    name: 'opacity-transition',
    async leave(data) {
      const done = this.async();
      gsap.to(data.current.container, {
        opacity: 0
      });
      await delay(500);
      done();
    },
    async enter(data) {
      // reload();
      indexAnimation();
    },
    async once(data) {
      // reload();
      indexAnimation();
    }
  }],
  // views:[{
  //   namespace:'login',
  //   beforeEnter(data){
  //     $(document).ready(function() {
  //       $('#click').click(function () {
  //         $('#eji28tuoi3pl2_to').css("animation-play-state", "running");
  //         $('#eji28tuoi3pl18_tr').css("animation-play-state", "running")
  //         $('#eji28tuoi3pl27_to').css("animation-play-state", "running")
  //         $('#eji28tuoi3pl27_tr').css("animation-play-state", "running")
  //       });
  //     });
  //   }
  // }]
});

function reload() {
  // Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
  //   $('html').find('script').each(function (i, script) {
  //     var $script = $(script);
  //     $.ajax({
  //       url: $script.attr('src'),
  //       cache: true,
  //       dataType: 'script',
  //       success: function () {
  //         $script.trigger('load');
  //       }
  //     });
  //   });
  // });

  // var links = document.querySelectorAll('a[href]');
  // var cbk = function (e) {
  //   if (e.currentTarget.href === window.location.href) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  // };

  // for (var i = 0; i < links.length; i++) {
  //   links[i].addEventListener('click', cbk);
}

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

function runChestAnimation() {
    $('#eji28tuoi3pl2_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl18_tr').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_tr').css("animation-play-state", "running");
}

function runKeyAnimation(boo) {
  if(boo == true)
    $('#ew03y9km9ptr2_tr').css("animation-play-state", "running");
  else
    $('#ew03y9km9ptr2_tr').css("animation-play-state", "paused");
}

Draggable.create(".key", {
  bounds:".third-section",
  onDrag: function() {
    runKeyAnimation(true);
    if (this.hitTest("#eji28tuoi3pl21")) {
      gsap.to(this.target, {duration: 0.6, opacity:0, scale:0.5});
      runChestAnimation();
    }
  },
  onDragEnd: function() {
    runKeyAnimation(false);
  }
});

