(function($) { 
    $('.nav > ul > li').mouseenter(function() {
        $(".nav > ul > li > ul").stop().slideDown(200); 
    });
    
    $('.nav > ul > li').mouseleave(function() {
        $(".nav > ul > li > ul").stop().slideUp(200); 
    });
})(jQuery);