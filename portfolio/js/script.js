(function($) {    
    $(document).ready(function() {
        // title toggle
        $('.tit .btn').click(function(e) {
            e.preventDefault();
            $('#cont_nav').slideToggle(200);
            $(this).toggleClass('on');
        }); 
        
        // banner slick
        $('.ban').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay:true,
            autoplaySpeed:3000,
            dots:true
          });

          // 탭메뉴
          var $tab_list = $('.tab_menu');
          $tab_list.find("ul ul").hide(); 
          $tab_list.find("li.active > ul").show(); 

          function tabMenu(e) {
              e.preventDefault();
              var $this = $(this);
              $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
          }
          $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu); 

          // gallery slick
          $('.gallery_img').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:true,
            fade:true,
            arrows:false
          });
          // Slick gallery play btn setting
          $('.play').click(function() {
            $('.gallery_img').slick('slickPlay'); 
          });
          $('.pause').click(function() {
            $('.gallery_img').slick('slickPause'); 
          });
          $('.prev').click(function() {
            $('.gallery_img').slick('slickPrev'); 
          });
          $('.next').click(function() {
            $('.gallery_img').slick('slickNext'); 
          });

          // layer
          $('.layer').click(function(e) {
              e.preventDefault();
              $('#layer').fadeIn();
          })

          // Layer popup
          $('#layer .close').click(function(e){
            e.preventDefault();
            $('#layer').fadeOut();
          }); 

        // Window popup
        $('.window').click(function(e) {
            e.preventDefault();
            window.open('popup.html','popup','width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0,menubar=0');
        });

        // Light gallery
        $(".lightgallery").lightGallery();

    });
})(jQuery); 