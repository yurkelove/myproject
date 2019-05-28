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


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

    //Mobile MENU
	$(document).ready(function(){
			var touch = $('.mobile-menu');
		    var menu = $('.primary-nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		    
		});



	//Modal
    function modalBtn(){
        
        var modal = document.getElementById('myModal');
        var btn = document.getElementById('modalBtn');
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function(){
           modal.style.display = "block";
        }
        span.onclick = function(){
            modal.style.display = "none";
        }
        
    }
    
    modalBtn();
    


});
