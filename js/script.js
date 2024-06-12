(function ($) {
  "use strict";

  var initPreloader = function () {
    $(document).ready(function ($) {
      var Body = $('body');
      Body.addClass('preloader-site');
    });
    $(window).load(function () {
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // Function to handle scroll event
  var initScrollNav = function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.navbar.fixed-top').addClass("bg-white");
    } else {
      $('.navbar.fixed-top').removeClass("bg-white");
    }

    // Add active class to nav items based on scroll position
    var scrollPos = $(document).scrollTop();
    $('#offcanvasNavbar .nav-link').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#offcanvasNavbar .nav-link').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Smooth scrolling for navigation links
  var initSmoothScroll = function () {
    $('#offcanvasNavbar a[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }

  // Initialize functions on document ready
  $(document).ready(function () {
    initPreloader();
    initScrollNav();
    initSmoothScroll();
  });

  // Initialize scroll event listener
  $(window).scroll(function () {
    initScrollNav();
  });

})(jQuery);
