let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-0',
    }
});

tl.from("blockquote",{x:-200,opacity:0,duration:1})
  .from(".first-0",{y:100,opacity:0,duration:1},"-=1")
  .from(".first-1",{y:-100,opacity:0,duration:1},"-=1")
  .from(".first-3",{x:-1000,y:300,opacity:0,duration:1},"-=1")
  .from(".first-2",{x:-1000,y:300,opacity:0,duration:1});

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//     triggerElement:".first-section",
//     triggerHook:"onLeave",
//     duration:"100%"
// })
// .setPin(".first-section")
// .setTween(tl)
// .addTo(controller);