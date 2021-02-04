(function($) {
    /* sticky nav */ 
    $('#nav').each(function() {
        var header  = $(this); 
        var headerOffset = header.offset().top;    
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop(); 
            if(wScroll > headerOffset) {
                header.addClass('on');
            } else {
                header.removeClass('on'); 
            }
        }); 
    }); 
    
    /* nav scroll */ 
    var nav = $('#nav ul li');
    var cont = $('#contents > div'); 
    nav.click(function(e) {
        e.preventDefault();
        var target = $(this); 
        var index = target.index(); 
        var section = cont.eq(index); 
        var offset = section.offset().top; 
        $("html, body").animate({scrollTop:offset}, 600, "easeInOutExpo");  
        
        nav.removeClass('active'); 
        target.addClass('active'); 
    });
})(jQuery); 