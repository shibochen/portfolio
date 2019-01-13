$(document).ready(function() {

  var typed = new Typed(".mytext", {
    strings: ["Shibo Chen", "Front End Developer"],
    smartBackspace: true,
    loop: true,
    typeSpeed: 10,
    backDelay: 1000
  });

  if ($(window).scrollTop() < 200) {
    $(".navbar-nav").addClass("navbar-nav-bg");
  }

  $(window).scroll(function() {
    var top = $(window).scrollTop();

    if (top >= 200) {
      $("header").addClass("overlay");
      $(".navbar-nav").removeClass("navbar-nav-bg");
    } else if ($("header").hasClass("overlay")) {
      $("header").removeClass("overlay");
    } else {
      $(".navbar-nav").addClass("navbar-nav-bg");
    }
  });

  $(".progress-content .skill-progress").each(function() {
    var waypoint = new Waypoint({
      element: this,
      handler: function(direction) {
        var value = $(this.element).attr("data-progress");
        $(this.element).css("width", "" + value + "%");
      },
      offset: "70%"
    });
  });

  var $grid = $(".book-container").isotope({
    itemSelector: ".book-item"
  });


  // filter items on button click
  $(".filter li").on("click",function() {
    $('.filter li').removeClass('filter-active');
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(this).addClass('filter-active');
  });

});
