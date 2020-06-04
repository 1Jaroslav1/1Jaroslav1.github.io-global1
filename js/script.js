$(document).ready(function(){

  $('.modal__close').on('click', function() {
      $('.overlay, #thanks').fadeOut('slow');
  });

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $(this).find("textarea").val("");
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
  });
  $('.reviews__carousel').slick({
      centerMode: true,
      centerPadding: '300px',
      slidesToShow: 1,
      speed: 400,
      prevArrow: '<button type="button" class="slick-prev"><img src="image/left.png"></button>',
      nextArrow:   '<button type="button" class="slick-next"><img src="image/right.png"></button>',

      responsive: [
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '200px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
              breakpoint: 575,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
        ]
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu_mobile'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_mobile_active');
        })
    })
});
