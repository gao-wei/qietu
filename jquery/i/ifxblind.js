/**
 * Interface Elements for jQuery
 * FX - blind
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
		Blind: function(speed, callback, easing, direction) {
			return this.each(function(){
				var curDisplay = $.curCSS(this, 'display');
				if ( direction == 'togglever') {
					direction = curDisplay == 'none' ? 'down' : 'up';
				} else if (direction == 'togglehor') {
					direction = curDisplay == 'none' ? 'right' : 'left';
				}
				var animateOpt = {},
					elSize = $.iUtil.getSize(this);
				switch(direction) {
					case 'up':
						animateOpt.height = 0;
						break;
					case 'down':
						animateOpt.height = elSize.h||elSize.hb;
						this.style.height = '0';
						break;
					case 'left':
						animateOpt.width = 0;
						break;
					case 'right':
						animateOpt.width = elSize.w||elSize.wb;
						this.style.width = '0';
						break;
				}
				$(this).show().animate(animateOpt,{
					duration: speed,
					easing: easing,
					complete: function() {
						$(this).css({
							width: elSize.w,
							height: elSize.h
						});
						if (direction == 'up' || direction == 'left') {
							this.style.display = 'none';
						}
						if (callback) {
							callback.apply(this);
						}
					}
				});
			});
		},
		/**
		 * @name BlindUp
		 * @description blinds the element up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindUp: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'up';
			return this.Blind(speed, callback, easing, direction);
		},
		
		/**
		 * @name BlindDown
		 * @description blinds the element down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindDown: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'down';
			return this.Blind(speed, callback, easing, direction);
		},
		
		/**
		 * @name BlindToggleVertically
		 * @description blinds the element up or down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindToggleVertically: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'togglever';
			return this.Blind(speed, callback, easing, direction);
		},
		
		/**
		 * @name BlindLeft
		 * @description blinds the element left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindLeft: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'left';
			return this.Blind(speed, callback, easing, direction);
		},
		
		/**
		 * @name BlindRight
		 * @description blinds the element right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindRight: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'right';
			return this.Blind(speed, callback, easing, direction);
		},
		
		/**
		 * @name BlindToggleHorizontally
		 * @description blinds the element left and right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		BlindToggleHorizontally: function (speed, callback, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			var direction = 'togglehor';
			return this.Blind(speed, callback, easing, direction);
		}
	});
})(jQuery);