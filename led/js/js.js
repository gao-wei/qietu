// JavaScript Document
$(document).ready(function(){
	$("#main_menu li a").hover(function(){
         var liul = $(this).next(".none").html();
		 if(liul){
			
		}else{
		 liul ="<li>无信息显示</li>";
		}
		$("#main_menu li a").removeClass("menuhover");
		$(this).addClass("menuhover");
		$("#second_menublock").html(liul);
							  
    })
	
	$("#prev_btn").click(function(){
		var slo = $(".news_left ul li.block");
		var s = $(".news_left ul li.block").prev("li").html();
		if(s){
			$(".news_left ul li").removeClass("block");	
		   slo.prev("li").addClass("block");	
		}else{
		alert("已是第一条");	
		}
		//
      		
	})
	$("#next_btn").click(function(){
		var slo = $(".news_left ul li.block");
		var s = $(".news_left ul li.block").next("li").html();
		if(s){
			$(".news_left ul li").removeClass("block");	
		   slo.next("li").addClass("block");	
		}else{
			alert("已是最后一条");
		}
		//
      		
	})
	
					   
})
function init_srolltext(){
   setInterval('scrollUp()', 3000);//的面的这个参数25, 是确定滚动速度的, 数值越小, 速度越快
}

function scrollUp(){
	var slo = $(".news_left ul li.block");
	var s = $(".news_left ul li.block").next("li").html();
	if(s){
	$(".news_left ul li").removeClass("block");	
   slo.next("li").addClass("block");
	}else{
	$(".news_left ul li").removeClass("block");	
  $(".news_left ul li:first").addClass("block");	
	}
}	
init_srolltext();








	
