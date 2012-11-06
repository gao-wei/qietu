$(function(){
	if ($(window).height()>=680)
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
	
	$('.img_flash').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	}); 
})