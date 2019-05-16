$(document).ready(function () {
    $('.search').on('click', function (e) {
        e.preventDefault();
        $('.search-bar').addClass('active');
    });
    $('.search-bar a').on('click', function (e) {
        e.preventDefault();
        $('.search-bar').removeClass('active');
    });

    $('.to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    
    $('.play-list li:nth-child(1)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        $('.video .single-video:nth-child(1)').addClass('active');
        $('.video .single-video:nth-child(1)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(1) video').trigger('play');
        
    });
    $('.play-list li:nth-child(2)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.video .single-video:nth-child(2)').addClass('active');
        $('.video .single-video:nth-child(2)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(2) video').trigger('play');
    });
    $('.play-list li:nth-child(3)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.video .single-video:nth-child(3)').addClass('active');
        $('.video .single-video:nth-child(3)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(3) video').trigger('play');
    });
    $('.play-list li:nth-child(4)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.video .single-video:nth-child(4)').addClass('active');
        $('.video .single-video:nth-child(4)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(4) video').trigger('play');
    });
    $('.play-list li:nth-child(5)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.video .single-video:nth-child(5)').addClass('active');
        $('.video .single-video:nth-child(5)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(5) video').trigger('play');
    });
    $('.play-list li:nth-child(6)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.video .single-video:nth-child(6)').addClass('active');
        $('.video .single-video:nth-child(6)').siblings().removeClass('active');
        
        $('.video .single-video video').trigger('pause');
        $('.video .single-video:nth-child(6) video').trigger('play');
    });
    
    $('.bottom .single-content:nth-child(1)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top .single-content:nth-child(1)').addClass('active');
        $('.top .single-content:nth-child(1)').siblings().removeClass('active');
    });
    $('.bottom .single-content:nth-child(2)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top .single-content:nth-child(2)').addClass('active');
        $('.top .single-content:nth-child(2)').siblings().removeClass('active');
    });
    $('.bottom .single-content:nth-child(3)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top .single-content:nth-child(3)').addClass('active');
        $('.top .single-content:nth-child(3)').siblings().removeClass('active');
    });
    $('.bottom .single-content:nth-child(4)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top .single-content:nth-child(4)').addClass('active');
        $('.top .single-content:nth-child(4)').siblings().removeClass('active');
    });
    $('.bottom .single-content:nth-child(5)').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top .single-content:nth-child(5)').addClass('active');
        $('.top .single-content:nth-child(5)').siblings().removeClass('active');
    });
    
    
    
    
    

});
