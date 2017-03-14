//页面公用js
 // 头部菜单的显示隐藏
$(".top_menu").hover(function(){
	$(".top_menu_select").css("display","block");
},function(){
	$(".top_menu_select").css("display","none");
})
//返回顶部
$(".back").click(function(){
	$('body,html').animate({scrollTop:0},1000); 
});
// 导航栏吸顶
$(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    	$(".header_nav").addClass("nav_fixed");
                }
                else
                {
 		$(".header_nav").removeClass("nav_fixed");
                }
            });
 });
//导航显示隐藏
$(".nav_menu").click(function(){
    $(".nav_show").slideToggle();
})
$(".nav_show>li").click(function(){
        $(".nav_menu").css("display","none");
})