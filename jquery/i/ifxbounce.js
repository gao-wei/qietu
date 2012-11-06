/**
 * Interface Elements for jQuery
 * FX - bounce
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
	 * @name Bounce
	 * @description makes the element to bounce
	 * @param Integer hight the hight in pxels for element to jumps to
	 * @param Function callback (optional) A function to be executed whenever the animation completes.
	 * @type jQuery
	 * @cat Plugins/Interface
	 * @author Stefan Petre
	 */
	$.fn.Bounce = function(height, callback) {
		height = parseInt(height)||40;
		return this
			.filter(function(){
				return jQuery.fxCheckTag(this);
			})
			.each(function(){
				this.bounced = false;
			})
			.css('fakeBounce', 0)
			.animate({
				fakeBounce: 100
			},{
				duration: 2000,
				complete: function() {
					this.style.position = this.oldStyle.position;
					this.style.top = this.oldStyle.topS;
					if (callback){
						callback.apply(this);
					}
				},
				step: function(now){
					if (this.bounced === false) {
						this.bounced = true;
						this.oldStyle = {
							position: $.curCSS(this, 'position'),
							top: parseInt($.curCSS(this, 'top'), 10) || 0,
							topS: $.curCSS(this, 'top'),
							fract: height/0
						};
						$(this).css({
							fakeBounce: 0,
							positon: !/fixed|relative|absolute/.test(this.oldStyle.position) ? 'relative' : this.oldStyle.position
						});
					}
					var step = step2 = parseInt(now/10, 10),
						perc = (now - step * 10)/10
					if (step %2 == 1) {
						step2 -= 1;
					}
					dist = perc * (height/(step2/2+1));
					if (step %2 == 1) {
						dist = (height/(step2/2+1)) - dist;
					}
					this.style.top = this.oldStyle.top - dist + 'px';
				}
			})
			.end();
	};
})(jQuery);
/**
 * @name Bounce
 * @description makes the element to bounce
 * @param Integer hight the hight in pxels for element to jumps to
 * @param Function callback (optional) A function to be executed whenever the animation completes.
 * @type jQuery
 * @cat Plugins/Interface
 * @author Stefan Petre
 */
/*jQuery.fn.Bounce = function (hight, callback) {
	return this.queue('interfaceFX', function(){
		if (!jQuery.fxCheckTag(this)) {
			jQuery.dequeue(this, 'interfaceFX');
			return false;
		}
		var e = new jQuery.fx.iBounce(this, hight, callback);
		e.bounce();
	});
};*/
jQuery.fx.iBounce = function (e, hight, callback)
{
	var z = this;
	z.el = jQuery(e);
	z.el.show();
	z.callback = callback;
	z.hight = parseInt(hight)||40;
	z.oldStyle = {};
	z.oldStyle.position = z.el.css('position');
	z.oldStyle.top = parseInt(z.el.css('top'))||0;
	z.oldStyle.left = parseInt(z.el.css('left'))||0;
	
	if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute' && z.oldStyle.position != 'fixed') {
		z.el.css('position', 'relative');
	}
	
	z.times = 5;
	z.cnt = 1;
	
	z.bounce = function ()
	{
		z.cnt ++;
		z.e = new jQuery.fx(
			z.el.get(0), 
			{
			 duration: 120,
			 complete : function ()
			 {
				z.e = new jQuery.fx(
					z.el.get(0), 
					{
						duration: 80,
						complete : function ()
						{
							z.hight = parseInt(z.hight/2);
							if (z.cnt <= z.times)
								z.bounce();
							else {
								z.el.css('position', z.oldStyle.position).css('top', z.oldStyle.top + 'px').css('left', z.oldStyle.left + 'px');
								jQuery.dequeue(z.el.get(0), 'interfaceFX');
								if (z.callback && z.callback.constructor == Function) {
									z.callback.apply(z.el.get(0));
								}
							}
						}
					},
					'top'
				);
				z.e.custom (z.oldStyle.top-z.hight, z.oldStyle.top);
			 }
			}, 
			'top'
		);
		z.e.custom (z.oldStyle.top, z.oldStyle.top-z.hight);
	};
		
};