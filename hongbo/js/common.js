$(document).ready(function() {
	$("#banner").flashSlider();
});
function select_index_news(id)
{
	$('#index_news_title_'+id).addClass("active");
	$('#index_news_title_'+id).siblings().removeClass("active");
	$('#index_news_list_'+id).css("display","block");
	$('#index_news_list_'+id).siblings().css("display","none");
} 
function select_index_ask(id)
{
	$('#index_ask_list_title_'+id).addClass("active");
	$('#index_ask_list_title_'+id).siblings().removeClass("active");
	$('#index_ask_list_'+id).css("display","block");
	$('#index_ask_list_'+id).siblings().css("display","none");
} 