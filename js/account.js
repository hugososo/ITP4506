let tl = gsap.timeline();
tl.to("#wave",{scale:3,duration:1 ,ease:Back.easeOut.config(1.7),onComplete:function(){tl.pause();}})
.to("#wave", { scale:5, duration: 1, ease: Back.easeOut.config(1.7),onComplete:function(){tl.pause();}})
.to("#wave", { scale:7, duration: 1, ease: Back.easeOut.config(1.7), onComplete:function(){tl.pause();}})
.to("#wave", { scale:12, duration: 1, ease: Back.easeOut.config(1.7),onComplete:function(){tl.pause();}});

tl.pause();

$(document).ready(function() {
    $("#wave").click(function(){
        console.log("1");
        tl.play();
    });
})

