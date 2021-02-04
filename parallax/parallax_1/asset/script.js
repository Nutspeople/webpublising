(function($) {
    
    var logo = $('.logo'); 
    logo.click(function(e) {
        e.preventDefault(); 
        $("html, body").animate({scrollTop:0}, 600, "easeInOutExpo");
    }); 

    var nav = $('#nav ul li');
    var cont = $("#contents > div"); 
    nav.click(function(e) {
        e.preventDefault();
        var target = $(this); 
        var index = target.index(); 
        var section = cont.eq(index); 
        var offset = section.offset().top; 
        $("html, body").animate({scrollTop:offset}, 600, "easeInOutExpo");            
    }); 

    var menu = new Array; 
    cont.each(function() {
        menu.push($(this).offset().top);             
    });


    $(window).scroll(function() {
        var wScroll = $(this).scrollTop(); 
        for(i in menu) {
            if(wScroll >= menu[i]) {
                 nav.removeClass('active'); 
                 nav.eq(i).addClass('active'); 
            }
        }//end for 

        /*
        if(wScroll >= cont.eq(0).offset().top) {

        }

        if(wScroll >= cont.eq(1).offset().top) {
            nav.removeClass('active'); 
            nav.eq(1).addClass('active'); 
        } 

        if(wScroll >= cont.eq(2).offset().top) {
            nav.removeClass('active'); 
            nav.eq(2).addClass('active'); 
        } 

        if(wScroll >= cont.eq(3).offset().top) {
            nav.removeClass('active'); 
            nav.eq(3).addClass('active'); 
        } 

        if(wScroll >= cont.eq(4).offset().top) {
            nav.removeClass('active'); 
            nav.eq(4).addClass('active'); 
        } 

        if(wScroll >= cont.eq(5).offset().top) {
            nav.removeClass('active'); 
            nav.eq(5).addClass('active'); 
        }
        */
    }); 

    // mobile menu
    $('.mNav').click(function() {
        $('.menu').slideToggle('600'); 
    });
    
    $(window).resize(function() {
        var wWidth = $(this).width(); 
        // 화면 크기가 800 이상 일 때 style="display:none" 제거 
        if(wWidth > 800 && $('.menu').is(':hidden')) {
            $('.menu').removeAttr('style'); 
        }//end if 
        
    }); 
})(jQuery);