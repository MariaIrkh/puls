$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/arrows/arrow-left.png" alt="arrow left"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/arrows/arrow-right.png" alt="arrow right"></button>',
        responsive: [
            {
              breakpoint: 920,
              settings: {
              // dots: true,
              arrows: false,
              }
            },
   
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
      });
});