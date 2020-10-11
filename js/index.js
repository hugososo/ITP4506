function runChestAnimation() {
    $('#eji28tuoi3pl2_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl18_tr').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_tr').css("animation-play-state", "running");
}

var heightratio = $("#coupon").width()/1.8;


gsap.set("#coupon",{xPercent:-50,yPercent:-50,left:"50%", top:"50%",scale:0,width:100,height:heightratio});
let coupontl = gsap.timeline();
function runCouponAnimation() {
  gsap.set("#coupon",{ rotationX:90});
  coupontl = gsap.timeline();
  coupontl.to("#coupon",{ duration:1,scale:1,x:-300,rotationX:360,ease:Circ.easeInOut},"+=1.5");
  coupontl.to("#coupon",{ duration:0.2,rotationY:360,repeat:3, ease:Power1.easeInOut},"-=0.5");
  coupontl.to("#coupon",{ duration:1,width:"clamp(400px,80vw,800px)",x:0,ease:Power1.easeInOut});
}

function runKeyAnimation(boo) {
    if (boo == true)
      $('#ew03y9km9ptr2_tr').css("animation-play-state", "running");
    else
      $('#ew03y9km9ptr2_tr').css("animation-play-state", "paused");
  }

Draggable.create(".key", {
    bounds: ".third-section",
    onDrag: function () {
      runKeyAnimation(true);
      if (this.hitTest("#eji28tuoi3pl21")) {
        gsap.to(this.target, { duration: 0.6, opacity: 0, scale: 0.5 });
        runChestAnimation();
        runCouponAnimation();
      }
    },
    onDragEnd: function () {
      runKeyAnimation(false);
    }
});

$(document).ready(function () {
  $("#coupon").click(function(){
    coupontl.reverse();
  });
});

  
