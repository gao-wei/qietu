/**
 * Interface Elements for jQuery
 * FX - drop
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

/**
 * Applies a dropping effect to element
 */
jQuery.fn.extend(
	{
		/**
		 * @name DropOutDown
		 * @description drops the element out down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropOutDown : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'down', 'out', easing);
		},
		
		/**
		 * @name DropInDown
		 * @description drops the element in down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropInDown : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'down', 'in', easing);
		},
		
		/**
		 * @name DropToggleDown
		 * @description drops the element in/out down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropToggleDown : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'down', 'toggle', easing);
		},
		
		/**
		 * @name DropOutUp
		 * @description drops the element out up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropOutUp : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'up', 'out', easing);
		},
		
		/**
		 * @name DropInUp
		 * @description drops the element in up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropInUp : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'up', 'in', easing);
		},
		
		/**
		 * @name DropToggleUp
		 * @description drops the element in/out up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropToggleUp : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'up', 'toggle', easing);
		},
		
		/**
		 * @name DropOutLeft
		 * @description drops the element out left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropOutLeft : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'left', 'out', easing);
		},
		
		/**
		 * @name DropInLeft
		 * @description drops the element in left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropInLeft : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'left', 'in', easing);
		},
		
		/**
		 * @name DropToggleLeft
		 * @description drops the element in/out left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropToggleLeft : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'left', 'toggle', easing);
		},
		
		/**
		 * @name DropOutRight
		 * @description drops the element out right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropOutRight : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'right', 'out', easing);
		},
		
		/**
		 * @name DropInRight
		 * @description drops the element in right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropInRight : function (speed, callback, easing) {
			return this.Drop( speed, callback, 'right', 'in', easing);
		},
		
		/**
		 * @name DropToggleRight
		 * @description drops the element in/out right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		DropToggleRight : function (speed, callback, easing) {
			return this.Drop(speed, callback, 'right', 'toggle', easing);
		},
		
		Drop: function(speed, callback, direction, type, easing) {
			easing = typeof callback == 'string' ? callback : easing||null;
			callback = typeof callback == 'function' ? callback : null;
			return this.filter(function(){
				if (!jQuery.fxCheckTag(this)) {
					return false;
				}
				return true;
			})
			.each(function(){
				this.style.fakeDrop = 0;
				this.inited = false;
			})
			.animate({
				fakeDrop: 100
			}, {
				duration: speed,
				easing: easing,
				step: function(now) {
					if (this.inited == false) {
						this.inited = true;
						this.oldStyle = {
							position: $.curCSS(this, 'position'),
							display: $.curCSS(this, 'display'),
							top: parseInt($.curCSS(this, 'top'),10)||0,
							left: parseInt($.curCSS(this, 'left'),10)||0
						};
						this.dropType = type == 'toggle' ? ( this.oldStyle.display == 'none' ? 'in' : 'out' ) : type;
						if (!/absolute|relative/.test(this.oldStyle.position)) {
							this.style.position = 'relative';
						}
						if (this.oldStyle.display == 'none') {
							this.style.display = ' block';
						}
					}
					switch (direction) {
						case 'up':
							this.style.top = this.oldStyle.top - (this.dropType == 'in' ? 100 - now :  now ) + 'px';
							break;
						case 'down':
							this.style.top = this.oldStyle.top + (this.dropType == 'in' ? 100 - now :  now )  + 'px';
							break;
						case 'left':
							this.style.left = this.oldStyle.left - (this.dropType == 'in' ? 100 - now :  now )  + 'px';
							break;
						case 'right':
							this.style.left = this.oldStyle.left + (this.dropType == 'in' ? 100 - now :  now )  + 'px';
							break;
					}
					$(this).css('opacity', this.dropType == 'in' ? now /100 : (100 - now)/100);
				},
				complete: function() {
					this.style.top = this.oldStyle.top + 'px';
					this.style.left = this.oldStyle.left + 'px';
					$(this).css('opacity', 1);
					this.style.display = this.dropType == 'in' ? 'block' : 'none';
					if (callback) {
						callback.apply(this);
					}
				}
			})
			.end();
		}
	});
})(jQuery);