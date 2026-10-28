document.addEventListener("DOMContentLoaded", function () {

    // Typed.js animated text
    var typed = new Typed(".text", {
        strings: [
            "<strong>I Love <strong class='primary'>coding.</strong></strong>",
            "<strong>I Love <strong class='primary'>designing.</strong></strong>"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

});

$(document).ready(function () {
    $(".slider").ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });
});

  // Owl Carousel — team members
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });


// Sticky navigation
$(window).scroll(function () {
  var top = $(window).scrollTop();
  if (top >= 60) {
    $("nav").addClass("secondary");
  } else if ($("nav").hasClass("secondary")) {
    $("nav").removeClass("secondary");
  }
});
