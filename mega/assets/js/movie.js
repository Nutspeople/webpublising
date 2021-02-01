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
        
        // 플레이어 
        var player = {
            obj : null, // 플레이어 오브젝트 
            query : {
                theme :"dark",
                color : "white", 
                controls : 1, 
                autoplay : 1, 
                enablejsapi : 1, 
                modestbranding: 0,  // Youtube 로고 감춤
                rel : 0,    // 관련 동영상 표시
                showinfo : 0,   // 제목, 업로더 감춤
                iv_load_policy : 3  // 특수효과 감춤   
            },
            visible : false
        };
        
        // 보이기, 숨기기 버튼 활성화 
        $selector.showButton.on('click', showPlayer);
        $selector.hideButton.on('click', hidePlayer);
        
        // Youtube Api 를 이용해 iframe 생성 
        function setPlayer(id) {
            player = new YT.Player('trailer', {
               height: '480',
               width: '282',
               videoId: '1J3m1jJCj88',
               playerVars : player.query
             });
            
            // 처음 플레이어 크기 설정 
            resizePlayer();
            
            // 리사이즈 화면 회전시 플레이어 크기 다시 설정 
            $( window ).on('resize orientationchange', function() {
                
            });
        }

        function showPlayer () {
            
        }; 
        
        function hidePlayer () {
            
        }; 
        
        function resizePlayer() {
            
        }; 
        
        
        
    }); 
   

})(jQuery);     
