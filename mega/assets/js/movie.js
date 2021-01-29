(function($){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    
    (function handleTrailer() {
        // 셀렉터 캐시 
        var $selector = {
            body : $('body'),
            overlay : $('#blackout'),
            modal : $('#trailerModal'),
            showButton : $("#showTrailer"),
            hideButton : $("#hideTrailer")
        }; 
        
        console.log($selector); 
        
    }); 
   

})(jQuery);     