(function($) {    
    $(document).ready(function() {
        $('.tit .btn').click(function(e) {
            e.preventDefault();
            $('#cont_nav').slideToggle(200);
            $(this).toggleClass('on');
        }); 
        
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
    });
})(jQuery); 