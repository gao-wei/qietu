/**
 * Interface Elements for jQuery
 * FX - scroll to
 * 
 * http://interface.eyecon.ro
 * 
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses.
 *   
 *
 */
 
 
(function($){
	$.fn.extend({
		/**
		 * @name ScrollTo
		 * @description scrolls the document until the lement gets into viewport
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		ScrollTo: function(speed, axis, easing, complete) {
			return this
				.eq(0)
				.each(function(){
					var elPos = $.iUtil.getPosition(this, true),
						animateOpt = {scrollTop: 0, scrollLeft: 0},
						currentScroll = $.iUtil.getScroll();
					if (axis == 'vertical' || !axis) {
						animateOpt.scrollTop = elPos.y - currentScroll.t;
					}
					if (axis == 'horizontal' || !axis) {
						animateOpt.scrollLeft = elPos.x - currentScroll.l;
					}
					$(this).css('fakeScroll', '0').animate({fakeScroll: 100},{
						duration: speed,
						easing: easing,
						complete: complete,
						step: function(now) {
							window.scrollTo(
								currentScroll.l + animateOpt.scrollLeft * now/100,
								currentScroll.t + animateOpt.scrollTop * now/100
							);
						}
					});
				})
				.end();
		},
		/**
		 * @name ScrollToAnchors
		 * @description all links to '#elementId' will animate scroll
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		/*inspired by David Maciejewski www.macx.de*/
		ScrollToAnchors: function(speed, axis, easing, complete) {
			$('a', this).each(function(){
				if (this.hash && this.hash != '') {
					$(this).bind('click', function(){
						$(this.hash == '#' ? document.body : this.hash).ScrollTo(speed, axis, easing, complete);
					});
				}
			});
		}
	});
})(jQuery);