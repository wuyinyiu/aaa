var arr=["根据代理商的推广需求经评估后给予相关产品支持，促进代理商的运营推广及销售工作。","总部通过网络推广得到的资源将转交给当地代理商，代理商无需承担推广费用。","总部定期或者不定期的会根据代理商的运营推广计划给予物料的支持，以利于代理商在当地开展业务。","根据不同的市场、产品特性不定期的会在全国或者当地进行市场活动扩大产品知名度与影响力。","对代理商的人员包括销售、客服、运营等进行相应的培训，快速提高团队的战斗力，同时会给予产品、销售技巧等多方面的知识培训，并协助代理商签单。","总部提供专业化7*12小时的客服随时响应为代理商、客户解决后顾之忧。","定期在代理商所在城市与代理商一起协作举办营销会议，从而扩大代理商在当地的影响力。","总部为代理商提供统一或针对的运营推广方案、行业广告业务拓展方案。","对于有代理商区域不直接参与销售，将推广获得的客户资源按规则分配给当地代理商进行转化，同时不允许代理商跨区域销售以保证市场的规范性从而保障代理商的利益。"]
	$(".main_support_tab>li").hover(function(){
		var index=$(this).index();
		var title=$(this).children("a").text();
		$(this).find("a").addClass("hover").end().siblings().children("a").removeClass("hover");
		$(".introduce").find("dt").addClass("animated ").text(title).siblings("dd").text(arr[index]);
		var i=index+1;
		console.log(i);
		$(".picture").css({"background":"url(img/daili_fuchi_0"+i+".png) no-repeat left bottom","background-size":"70%"})
	},function(){})

	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 4,
	    slidesPerColumn: 2,
	    spaceBetween :10,
	    prevButton:'.swiper-button-prev',
	    nextButton:'.swiper-button-next',
	});