$(function(){
    $('.nav_inner> ul> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav_inner> ul> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
/* 눌렀을때 움직이는 느낌 없으려면 원래 border를 5px로 두고 바깥에 그라데이션 투명하게 줄것 */
    $('.delivery_product div').click(function(){
        $(this).addClass('product_border').siblings().removeClass('product_border');
    });
});