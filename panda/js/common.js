 $(document).ready(function() {
	$(".category_all").hover(function(){ 
		$(".category_b").addClass("cate_cur");
		$("#ifrnav").css("display","block");
	},function(){
		$(".category_b").removeClass("cate_cur");
		$("#ifrnav").css("display","none");
		$(".itemsli").removeClass("onthis"); 
		$(".floor").hide();
	});
	$(".itemsli").hover(function(){
		$(".itemsli").removeClass("onthis");
		$(".floor").hide();
		$(this).addClass("onthis");
		$(this).find(".floor").show();
		} , function () {}
	);
});
(function($) {
	$.fn.hoverForIE6 = function(option) {
		var s = $.extend({current: "hover", delay: 10}, option || {});
		$.each(this, function() {
		var timer1 = null, timer2 = null, flag = false;
		$(this).bind("mouseover", function() {
			if (flag) {
				clearTimeout(timer2);
			}
			else {
				var _this = $(this);
				timer1 = setTimeout(function() {
					_this.addClass(s.current);
					flag = true;
				}, s.delay);
			}
		}).bind("mouseout", function() {
			if (flag) {
				var _this = $(this);
				timer2 = setTimeout(function() {
					_this.removeClass(s.current);
					flag = false;
				}, s.delay);
			}
			else {
				clearTimeout(timer1);
			}
		})
	})
}
})(jQuery);
