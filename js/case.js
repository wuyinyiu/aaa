$(".select_com").hover(function(){
		$(this).children(".select_lis").css("display","block").addClass("animated fadeIn");
	},function(){
		$(this).children(".select_lis").css("display","none");
	})
	//
	$(".case_list_li").hover(function(){
		$(this).css("border","1px solid #f75e46").find("img").addClass("animated pulse");
	},function(){
		$(this).css("border","1px solid #fff").find("img").removeClass("animated pulse");
	})
	$(".select_lis>li").click(function(){
		$(this).parent(".select_lis").css("display","none")
	})