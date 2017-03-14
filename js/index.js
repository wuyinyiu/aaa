//首页js
// banner轮播图
 var mySwiper = new Swiper ('.banner', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:3000,
	    speed:2000,
	    paginationClickable :true,
	    pagination: '.swiper-pagination',
	    //前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    //
onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit 		
				swiperAnimateCache(swiper); //隐藏动画元素
				swiperAnimate(swiper); //初始化完成开始动画
		 	}, 
			onSlideChangeEnd: function(swiper){
		 		swiperAnimate(swiper); 
		 	//每个slide切换结束时也运行当前slide动画
		 	} 
})
 // 案例展示轮播图
  var mySwiper = new Swiper ('.case_banner', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay: 3000,
	    speed:2000,
	    paginationClickable :true,
	    pagination: '.swiper-pagination',
	    //前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
})
//E起发可以为你的dl列表项
$(".dl_list>dl").hover(function(){
	var s=$(this).find("img").attr("src").replace("normal","select");
	$(this).children("dd").addClass("dl_color").siblings("dt").children("img").attr("src",s);
},function(){
	var n=$(this).find("img").attr("src").replace("select","normal");
	$(this).children("dd").removeClass("dl_color").siblings("dt").children("img").attr("src",n);
})
//他们都在用
var ali=$(".list>li");
for(var i=0;i<ali.length;i++){
	ali[i].style.background="url(img/lg_case"+i+".png) no-repeat center";
	ali[i].style.backgroundSize="cover";
}
$(".list>li").hover(function(){
	$(this).addClass("animated bounceIn");
},function(){
	$(this).removeClass("animated bounceIn");
})
