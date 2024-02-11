// 프로젝트 호버 효과

$(function(){
    $(".screen-view img").hover(function(){
        var imgHeight = $(this).height();
        var screenHeight = $(".screen-view").height();
        $(this).stop().animate({top: -(imgHeight - screenHeight)}, 13000);
    },function(){
        $(this).stop().animate({top: 0}, 2000);
    });
})
