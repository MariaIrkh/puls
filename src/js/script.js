$(document).ready(function(){
    // каруселька
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
    // табы
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
    });
    // переворот карточки товара. Переименовываем классы добавляя класс активности
    $('.catalog__link_front').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__front').eq(i).toggleClass('catalog__front_active');
            $('.catalog__back').eq(i).toggleClass('catalog__back_active');
        })
    })
    // тоже самое только возвращаем в исходное положение
    $('.catalog__link_back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__front').eq(i).toggleClass('catalog__front_active');
            $('.catalog__back').eq(i).toggleClass('catalog__back_active');
        })
    })
    // $('.catalog__link_front').on('click',function(e) {
    //     e.preventDefault();
    //     $(this) 
    //         $('.catalog__front').eq(i).toggleClass('catalog__front_active');
    //         $('.catalog__back').eq(i).toggleClass('catalog__back_active');
    // });
    // $('.catalog__link_back').on('click',function(e) {
    //     e.preventDefault();
    //     $(this) 
    //         $('.catalog__front').toggleClass('catalog__front_active');
    //         $('.catalog__back').toggleClass('catalog__back_active');
    // });
    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.catalog__front').eq(i).toggleClass('catalog__front_activ');
    //             $('.catalog__back').eq(i).toggleClass('catalog__back_activ');
    //         })
    //     });
    //     toggleSlide('.catalog-link__front');
    //     toggleSlide('.catalog-link__back');
    // };
    // modal
    $('[data-modal=consultation]').on('click', function() {     /* находим элемент, пользователь по нему кликает и         происходит следующее.. */
        $('.overlay, #consultation').fadeIn('slow'); /* элементы, а может несколько,появляютяс (медленно) можно в секундах */
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow') /* пропадает */
    });
    // $('.button_card').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });
    $('.button_card').each(function(i) {  /* подгружаем текст из другого элемента */
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog__title').eq(i).text());  
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99"); /* маска ввода номера. отдельный плагин. Обращение к импуту по имени */

    $('form').submit(function(e) {
        e.preventDefault(); /* сброс дефолтныго поведения браузера. В данном случае отмены обновления страницы при отправке формы */
        // if(!$(this).valide()) {
        //     return;
        // }  /* если форма не прошла валидацию, прекращение работы крипта. пустые данные из формы не отправятся */

        $.ajax({ /* технология позволяющая принимать данные с сервера не обновляя при этом страницу */
            type: "POST", /* в данном случае отправляем данные, но можно и принимать */ 
            url: "mailer/smart.php", /* обращаемся к нашему файлу php */
            data: $(this).serialize() /* работаем с тем с чем работаем */
        }).done(function() {
            $(this).find('input').val(''); /* после отправки формы зачищаем поля */
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn(slow);
            $('form').trigger('reset'); /* после отправки все формы на сайте должны очиститься */
        });
        return false;
    });

    // scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {  /* если пользователь скролит на 1600 пикселей от верха */
            $('.pageap').fadeIn();
        } else {
            $('.pageap').fadeOut();
        }
    });
    // плавный скрол
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

