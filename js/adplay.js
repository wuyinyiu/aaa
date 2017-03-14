// 广告类型
function att(){
	$(".main_ad_type_right>dl").find("img").attr
}
	$(".main_ad_type_right>dl").hover(function(){
			var s=$(this).find("img").attr("src").replace("c","h");
			$(this).children("dd").addClass("dl_color").siblings("dt").children("img").attr("src",s);
	},function(){
			var n=$(this).find("img").attr("src").replace("h","c");
			$(this).children("dd").removeClass("dl_color").siblings("dt").children("img").attr("src",n);
			$(".main_ad_type_left").children("img").removeClass("animated zoomIn");
	})
	$(".main_ad_type_right>dl").click(function(){
		$(this).find("img").css("display","none").parent("dt").addClass("act").siblings("dd").addClass("act_color").parent("dl").siblings().find("img").css("display","block").parent("dt").removeClass("act").siblings("dd").removeClass("act_color");
		var a=$(this).find("img").attr("src").replace("png","gif");
		$(".main_ad_type_left").children("img").attr("src",a).addClass("animated zoomIn");
	})
	// 广告形式
	$(".main_ad_form_left>dl").hover(function(){
		var s=$(this).find("img").attr("src").replace("c","e");
		$(this).children("dd").addClass("dl_color").siblings("dt").children("img").attr("src",s);
	},function(){
		var n=$(this).find("img").attr("src").replace("e","c");
		$(this).children("dd").removeClass("dl_color").siblings("dt").children("img").attr("src",n);
		$(".main_ad_form_right").children("img").removeClass("animated zoomIn");
	})
	$(".main_ad_form_left>dl").click(function(){
		$(this).find("img").css("display","none").parent("dt").addClass("act").siblings("dd").addClass("act_color").parent("dl").siblings().find("img").css("display","block").parent("dt").removeClass("act").siblings("dd").removeClass("act_color");
		var a=$(this).find("img").attr("src").replace("png","gif");
		$(".main_ad_form_right").children("img").attr("src",a).addClass("animated zoomIn");
	})
	// 投放支持tab切换
	$(".main_support_tab>li").hover(function(){
	},function(){
		$(".main_support_img").children("div").removeClass("animated ")
	})
	//tab切换点击
	$(".main_support_tab>li").hover(function(){
		$(this).children("a").addClass("hover").end().siblings().children("a").removeClass("hover");
		var i=$(this).index()+1;
		if(i==1){
			$(".main_support_tab_mes").html("通过浏览商品或活动，答题领红包，有效提升页面浏览量，从而提高转化");
			$(".main_support_img_left").children("img").attr("src","img/toufang_left_2.png");
			$(".main_support_img_center").children("img").attr("src","img/toufang_center_2.png");
			$(".main_support_img_right").children("img").attr("src","img/toufang_right_2.png");
		}else if(i==2){
			$(".main_support_tab_mes").html("通过领取卡券，答题领红包，快速分发优惠券，吸引用户线上或到店消费");
			$(".main_support_img_left").children("img").attr("src","img/toufang_left_3.png");
			$(".main_support_img_center").children("img").attr("src","img/toufang_center_3.png");
			$(".main_support_img_right").children("img").attr("src","img/toufang_right_3.png");
		}else{
			$(".main_support_tab_mes").html("通过下载体验应用，答题领红包，有效拉动应用下载激活，提升应用认知度和使用量");
			$(".main_support_img_left").children("img").attr("src","img/toufang_left_1.png");
			$(".main_support_img_center").children("img").attr("src","img/toufang_center_1.png");
			$(".main_support_img_right").children("img").attr("src","img/toufang_right_1.png");
		}
	})