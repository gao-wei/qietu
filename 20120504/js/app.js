var _gaq = _gaq || [];
function _trackPageview(url){
         _gaq.push(['vogueTracker._trackPageview', url.split("com.cn")[1]]);
}

function _trackDfpAd(adCode, adSize){
	var img = new Image();	
	img.src = "http://pubads.g.doubleclick.net/gampad/ad?iu=/4574195/"+ adCode +"&sz="+ adSize +"&c=" + new Date().getTime();
}

//图片横向滚动01
function funPicScrollX01(emId,isCycle, callback){
	this.elem = $('#' + emId + '_picScrollX01');
	this.btnLeft = this.elem.find('.lBtn');
	this.btnRight = this.elem.find('.rBtn');
	this.btnPlay = this.elem.find('.btnPlay');
	this.btnPause = this.elem.find('.btnPause');
	this.scroll = this.elem.find('.scroll');
	this.bd = this.elem.find('.scroll .bd');
	//是否循环播放
	this.isCycle = isCycle ? isCycle : false;
	//容器显示的宽度
	this.W = this.scroll.width();

	//每一个item容器的宽度
	this.w = 520;
	//可见item个数
	this.isShowNum = this.W / this.w;

	//固定差量
	this.GDxy = 167;
	//循环
	this.timer = null;
	//索引
	this.index = 1;
	//提示当前项
	this.indexSpan = this.elem.find('.info .index');
	//是否自动播放
	this.key = true;
	//总数
	this.lenSpan = this.elem.find('.info .total');

	//每次播放图片播放结束执行
	this.callback = (typeof callback === 'function' ? callback : function(){});

	//item容器的个数
	this.len = this.scroll.find('.bd li.item').length;

	this._item = $('#item_start');
	this.item_ = $('#item_end');
	//初始化item集合
	this.item = [];

}

funPicScrollX01.prototype = {
	constructor: funPicScrollX01,
	init: function(){
		var that = this, i = 0;

		that.lenSpan.html(that.len);
		that.bd.css('left', that.GDxy -0);
		that.btnPlay.hide();

		//如果item个数不足以滚动就退出
		if (that.isShowNum > that.len)
		return;

		for(i=1;i<=this.len;i++)
		{
			this.item[i] = 0;
		}
		this.item[1]=1;
		this.item[2]=1;

		that.loadPic(1);
		that.loadPic(2);
		//是否循环播放
		if (that.isCycle) {

			that._item.append('<div class="item"><img src="'+$("#img_"+parseInt(that.len)).attr('crs')+'" ></div>').append('<div class="item"><img src="'+$("#img_"+parseInt(that.len)).attr('crs')+'" ></div>');
			that.item_.append('<div class="item"><img src="'+$("#img_1").attr('crs')+'" ></div>').append('<div class="item"><img src="'+$("#img_2").attr('crs')+'" ></div>');

		}

		that.btnRight.bind('click', function(){
			that.play(1)
		})
		that.btnLeft.bind('click', function(){
			that.play(-1)
		})
		that.btnPlay.click(function(){
			if (!that.key) {
				clearInterval(that.timer);
				that.key = true;
				that.play(1);
				that.timer = setInterval(function(){
					that.play(1);
				}, 5000);

				that.btnPlay.hide();
				that.btnPause.show();
			}
		})
		that.btnPause.click(function(){
			that.key = false;
			clearInterval(that.timer);
			that.btnPlay.show();
			that.btnPause.hide();
		})
		
	},
	loadPic:function(i)
	{
		var that=this;
		var src=$('#img_'+i).attr("src",$('#img_'+i).attr('crs'));
		this.item[i]=1;
	},

	play: function(k){
		var that = this, x_ = 0, cur = null;
		cur = that.nextItem(k);
		x_ = that.getX(cur);
		//add by jzq
		photoId = that.getPhotoId(cur);

		that.bd.animate({
			left: that.GDxy - x_ + 'px'
		}, 500, function(){
			that.indexSpan.html(that.index);
			//为了循环做的
			if (cur.hasClass('item_start')) {
				that.bd.css('left', that.GDxy - that.getX($('#item_'+parseInt(that.len))));
			}
			if (cur.hasClass('item_end')) {
				that.bd.css('left', that.GDxy - 0);
			}


		})

		var slideshow = $('#slideshow')[0];
		//slideshow.gotoSlide(that.index-1);
		//add by jzq
		my_callback(photoId, cur.find("img").attr('crs'));
	},

	
	nextItem: function(v){
		var that = this;
		that.index += v;
		if (that.index == that.len+1) {
			that.index = 1;
			that.prepareLoad();
			return this.item_;
		}

		if (that.index == 0) {
			that.index = that.len;
			that.prepareLoad();
			return that._item;
		}
		that.prepareLoad();
		return $('#item_'+that.index)
	},
	prepareLoad:function()
	{
		var that=this;
		var indexnext=parseInt(that.index+1);
		var indexprev=parseInt(that.index-1);
		var indexnext2=parseInt(that.index+2);
		var indexprev2=parseInt(that.index-2);
		if(that.item[that.index]!=1)
		{
			that.loadPic(that.index);
		}
		if(indexnext<=that.len)
		{

			if(that.item[indexnext]!=1)
			{
				that.loadPic(indexnext);
			}
		}
		if(indexprev>0)
		{
			if(that.item[indexprev]!=1)
			{
				that.loadPic(indexprev);
			}
		}
		if(indexnext2<=that.len)
		{

			if(that.item[indexnext2]!=1)
			{
				that.loadPic(indexnext2);
			}
		}
		if(indexprev2>0)
		{
			if(that.item[indexprev2]!=1)
			{
				that.loadPic(indexprev2);
			}
		}
	},
	getX: function(o){
		var that = this;
		if (o.hasClass('item_start')) {
			return 0 - o.width() / 2;
		}
		else{
			return o.position().left;
		}
	},

	//add by jzq
	getPhotoId:function(o){
		var that = this;
		if (o.attr('photoid'))
		{
			return o.attr('photoid');
		}
		else {
			return 0;
		}
	}
}










/*图片切换时的回调函数 add by jzq*/
function my_callback(v, picUrl)
{
	//ga
	_trackPageview(location.href);

	//更新hash
	var baseUrl = window.location.href;
	window.location.href = (baseUrl.split('#')[0] + '#photo=' + v);
	//jiathis_config.url = baseUrl.split('#')[0]+'hothit/photo-'+ v+'.html';
	//jiathis_config.pic = picUrl;

	_trackDfpAd("vogue_showsContent_expandable_1000x100", "1000x100");
	_trackDfpAd("vogue_showsContent_mpu1_300x250", "300x250");
}