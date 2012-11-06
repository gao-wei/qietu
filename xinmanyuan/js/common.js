function DY_scroll(wraper,prev,next,img,speed,or)
{ 
	var wraper = $(wraper);
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	var s = speed;
	next.click(function()
	{
		img.animate({'margin-left':-w},function()
		{
			img.find('li').eq(0).appendTo(img);
			img.css({'margin-left':0});
		});
	});
	prev.click(function()
	{
		img.find('li:last').prependTo(img);
		img.css({'margin-left':-w});
		img.animate({'margin-left':0});
	});
	if (or == true)
	{
		ad = setInterval(function() { next.click();},s*1000);
		wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
	}
}

function custom_mouseover(now)
{
	var num = 5;
	var arr=['custom_yellow','custom_white','custom_orange','custom_purple','custom_red'];
	var arr_on=['custom_yellow_b','custom_white_b','custom_orange_b','custom_purple_b','custom_red_b'];
	for(var i=1;i<=num;i++){
		j=i-1;
		if(i==now){
			document.getElementById("custom_"+i).className = arr_on[j];
		}
		else
		{
			document.getElementById("custom_"+i).className = arr[j];
		}
	}	
}
function map_popup_over(id) {
	var distance = 10;
	var time = 250;
	var hideDelay = 500;
	var hideDelayTimer = null;
	var beingShown = false;
	var shown = false;
	var info = $('#map_popup_'+id).css('opacity', 0);
	
	if (hideDelayTimer) clearTimeout(hideDelayTimer);
	
	if (beingShown || shown) {
		// don't trigger the animation again
		return;
	} else {
		// reset position of info box
		beingShown = true;
		$(".popup").css("display" , "none");
		info.css({
			display: 'block'
		}).animate({
			opacity: 1
		}, time, 'swing', function() {
			beingShown = false;
			shown = true;
		});
	}
	return false;	
}


/*
$(document).ready(function() {
	$('.flash_list').cycle({
		fx: 'scrollUp' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});
$(function(){
	var page = 1;
	var i = 1; //每版放4个图片
	//向后 按钮
	$("div.flash_r").click(function(){    //绑定click事件
		var $parent = $(this).parents("div.banner");//根据当前点击元素获取到父元素
		var $project_list = $parent.find("div.flash_list"); //寻找到“视频内容展示区域”
		var $project = $parent.find("div.flash"); //寻找到“视频内容展示区域”外围的DIV元素

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
	$("div.flash_l").click(function(){
		var $parent = $(this).parents("div.banner");//根据当前点击元素获取到父元素
		var $project_list = $parent.find("div.flash_list"); //寻找到“视频内容展示区域”
		var $project = $parent.find("div.flash"); //寻找到“视频内容展示区域”外围的DIV元素

		var p_width = $project.width() ;
		var len = $project.find("li").length;
		
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
*/