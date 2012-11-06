$(function(){
	$('#products').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		effect: 'slide, fade',
		crossfade: true,
		play: 5000,
		pause: 2500,
		generateNextPrev: true,
		generatePagination: false
	});
});
$(document).ready(function() {
	$('ul.header_nav_list').sooperfish();
});