$(function(){
    $('.nav_inner> ul> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav_inner> ul> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});