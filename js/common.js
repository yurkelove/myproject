$(document).ready(function() {
    // Создания кнопки на верх
        var $btnTop = $('.btn-top')// Создали переменную для класса топ
        $(window).on("scroll", function () { // Отслеживаем скролл что б при скроле кнопка появляляся
            if ($(window).scrollTop() >= 400) { // Если при скроле больше или равно 20 пх то в таком случае будет появлятся! Юззер проскролил 20 пх она появляется!
                $btnTop.fadeIn();
            }
            else {
                $btnTop.fadeOut();
            }
        });

        $btnTop.on("click", function () {
            $("html,body").animate({scrollTop: 0}, 900) //Плавность подьема в верх
        });
    
   
    
      $(".anchor-link").on('click', function () {
            var regex =  /^(?:(?:http|https)\:\/\/.*\/)?(\#.+)/g;
            var $el = $(this);
            var id = $el.attr('href');
            var matches = regex.exec(id);
            if (matches) {
                $('html, body').animate({
                    scrollTop: $(matches[1]).offset().top - 75
                }, 500);
                return false;
            }
            return true;
        });
    
    
    
    
    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });


// Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });


    //Mobile MENU
    $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.menu')
            .toggleClass('menu_active');
        });
        
        $('.menu__links-item').on('click', function() {
          $(this).closest('.menu')
            .removeClass('menu_active');
        });
      });


});
