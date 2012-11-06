$(function(){
	if ($(window).height()>=712)
	{
		$("#sidebar").css("height",$(window).height());
		$("#content").css("height",$(window).height());
		$(".mainBody_bottom_l").css("height",$(window).height());
		$(".mainBody_bottom_r").css("height",$(window).height());
	}
	else
	{
		$("#content").css("height",$("#sidebar").height());
		$(".mainBody_bottom_l").css("height",$("#sidebar").height());
		$(".mainBody_bottom_r").css("height",$("#sidebar").height());	
	}
})
$(function(){
	var page = 1;
	var i = 1; //每版放4个图片
	//向后 按钮
	$("div.button_r").click(function(){    //绑定click事件
		var $parent = $(this).parents("div.content");//根据当前点击元素获取到父元素
		var $project_list = $parent.find("div.project_list"); //寻找到“视频内容展示区域”
		var $project = $parent.find("div.project"); //寻找到“视频内容展示区域”外围的DIV元素
		var p_width = $project.width() ;
		var len = $project.find("li").length;
		var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		if( !$project_list.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$project_list.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$project_list.animate({ left : '-='+p_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			}
		}
	});
	//往前 按钮
	$("div.button_l").click(function(){
		var $parent = $(this).parents("div.content");//根据当前点击元素获取到父元素
		var $project_list = $parent.find("div.project_list"); //寻找到“视频内容展示区域”
		var $project = $parent.find("div.project"); //寻找到“视频内容展示区域”外围的DIV元素
		var p_width = $project.width();
		var len = $project_list.find("li").length;
		var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		if( !$project_list.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$project_list.animate({ left : '-='+p_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$project_list.animate({ left : '+='+p_width }, "slow");
				page--;
			}
		}
	});
});