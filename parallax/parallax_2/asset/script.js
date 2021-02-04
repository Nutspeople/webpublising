(function($) {
    $('.navBtn').click(function() {
        $('#side-nav').toggleClass('on'); 
        
        
        var navBtn = $('.navBtn'); 
        
        if($("#side-nav").hasClass('on')) {
            $("#side-nav").animate({"left":"0"}, 200); 
            navBtn.text('Close');  
        } else {
            $("#side-nav").animate({"left":"-300"}, 200); 
            navBtn.text('Open');
        }
    }); 
    
    /* nav scroll */ 
    var nav = $('#side-nav ul li');
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
    
    /*
    
    var nav = $('#side-nav ul li');
    var cont = $("#contents > div"); 
    nav.click(function(e) {
        e.preventDefault();
        var target = $(this); 
        var index = target.index(); 
        var section = cont.eq(index); 
        var offset = section.offset().top; 
        $("html, body").animate({scrollTop:offset}, 600, "easeInOutExpo");            
        
        var target = $(this); 
        $('#side-nav ul li').removeClass('active'); 
        target.addClass('active');
        
    }); 
    */
})(jQuery); 