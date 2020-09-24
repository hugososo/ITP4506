function delay(n) {
  n = n || 1000;
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
      toggleActions: "restart resume resume resume"
    }
  });

  one.from(".first-section blockquote", { x: -200, opacity: 0, duration: 1 })
    .from(".first-section blockquote span", { width: 0, opacity: 0, duration: 1 }, "-=0.5")
    .from(".first-0", { y: 100, opacity: 0, duration: 1 }, "-=1")
    .from(".first-1", { y: -100, opacity: 0, duration: 1 }, "-=1")
    .from(".first-3", { x: -1000, y: 300, opacity: 0, duration: 1 }, "-=1")
    .from(".first-2", { x: -1000, y: 300, opacity: 0, duration: 1 });

  let two = gsap.timeline({
    scrollTrigger: {
      trigger: '.second-section',
      start: 'top top',
      end: '+=4000',
      // markers: true,
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
    .from(".second-1", { x: -400, y: 200, ease: Expo.easeInOut })
    .from(".second-2", { x: 400, y: 200, ease: Expo.easeInOut })
    .from(".second-3", { x: -400, y: -20, ease: Expo.easeInOut })
    .from(".second-4", { x: 400, y: -20, ease: Expo.easeInOut })
    .from(".second-5", { x: -200, y: -80, ease: Expo.easeInOut })
    .from(".second-6", { x: 200, y: -80, ease: Expo.easeInOut })
    .from(".second-section blockquote:nth-child(1)", { x: -200, opacity: 0, ease: Expo.easeInOut })
    .from(".second-section blockquote:nth-child(2)", { x: 200, opacity: 0, ease: Expo.easeInOut })
    .from(".second-section blockquote:nth-child(3)", { x: -200, opacity: 0, ease: Expo.easeInOut })
    .from(".second-section blockquote:nth-child(4)", { x: 200, opacity: 0, ease: Expo.easeInOut })
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
      await delay(1000);
      done();
    },
    async enter(data) {
      indexAnimation();
    },
    async once(data) {
      indexAnimation();
    }
  }]
});