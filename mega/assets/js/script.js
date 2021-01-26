(function($) {
    
    // 배너 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
        loop: true
    });
    
    // 영화차트 이미지 슬라이드
    var imageSwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        /*
        mousewheel: {
            invert: true,
          },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
        
        autoplay: {
            delay: 6000,
        },
          */
        breakpoints: {
            // when window width is >= 320px
            600: {
              slidesPerView: 1.4,
              spaceBetween: 24
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            // when window width is >= 640px
            960: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }
    });
    
    
    // 영화차트 탭메뉴
    var movBtn = $('.movie_title >  ul > li');
    var movCont = $('.movie_chart > div');
    movCont.hide().eq(0).show(); 
    
    movBtn.click(function(e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index(); 
        movBtn.removeClass('active');
        target.addClass('active');
        movCont.hide().eq(index).show(); 
    }); 
    
    // 공지사항 탭메뉴
    var noticeBtn = $('.notice > ul > li');
    var noticeCont = $('.notice > ul > li > ul'); 
    
    noticeCont.hide().eq(0).show(); 
    noticeBtn.click(function(e) {
       e.preventDefault(); 
        var target = $(this); 
        var index = target.index(); 
        
        noticeBtn.removeClass('active'); 
        target.addClass('active'); 
        noticeCont.hide().eq(index).show(); 
    });
    
    
    
    
})(jQuery);