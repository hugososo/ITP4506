function runChestAnimation() {
    $('#eji28tuoi3pl2_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl18_tr').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_to').css("animation-play-state", "running");
    $('#eji28tuoi3pl27_tr').css("animation-play-state", "running");
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
      }
    },
    onDragEnd: function () {
      runKeyAnimation(false);
    }
  });

  
