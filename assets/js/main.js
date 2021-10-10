(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //------------ Offcanvas menu -------------

    // $('.menu_open').on('click', function () {
    //     $('body').addClass('active');
    // })
    // $('.menu_close, .overaly-main').on('click', function () {
    //     $('body').removeClass('active');
    // })

    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".menu_close");
    const navBar = document.querySelector(".site_slide_menu_wrap");

    menuBtn.addEventListener("click", function () {
      navBar.classList.add("active");
    });
    closeBtn.addEventListener("click", function () {
      navBar.classList.remove("active");
    });

    window.onscroll = () => {
      if (window.scrollY) {
        navBar.classList.remove("active");
      }
    };

    //------------ Hero slider -------------

    $(".hero-slier-main").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dot: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //---owl dots number-----

    var i = 1;

    $(".hero-slier-main.owl-carousel .owl-dot").each(function () {
      $(this).text(i);
      i++;
    });
  }); //---document-ready-----
})(jQuery);
