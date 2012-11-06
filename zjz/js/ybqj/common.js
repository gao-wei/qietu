function select_businesses(str , id)
{
	$('#'+str+'_title_'+id).addClass("active"); 
	$('#'+str+'_title_'+id).siblings().removeClass("active"); 
	$('#'+str+'_'+id).css("display","block"); 
	$('#'+str+'_'+id).siblings().css("display","none"); 
	return false;	
}