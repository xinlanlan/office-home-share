/*
 * fei-scroll.js
 * @author fiveStarsAndMoon
 */
(function(window){
	'use strict';
	var isToBottom = false;
	var feiScroll = function(param,callback){
		this.extend(this.param,param);
		this._init(param,callback);
	};
	feiScroll.prototype = {
		param: {
			listenTap: false,		//是否监听按住移动或点击事件
			distance: 50
		},
		_init: function(param,callback){
			var self = this;
			if(self.param.listenTap){
				document.body.addEventListener('touchend',function(e){
					self.scroll(callback);
				});
				document.body.addEventListener('touchmove',function(e){
					self.scroll(callback);
				});
			};
			window.onscroll = function(){
				self.scroll(callback);
			};
		},
		scroll: function(callback){
			var self = this;
			var scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
			var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
			if(scrollHeight - scrollTop -self.param.distance <= window.innerHeight){
				isToBottom = true;
				if(isToBottom){
					callback({
						isToBottom: true,
						scrollTop: scrollTop
					});
				}
			}else{
				isToBottom = false;
				callback({
					isToBottom: false,
					scrollTop: scrollTop
				})
			};
		},
		extend: function(a,b){
			for(var key in b){
				if(b.hasOwnProperty(key)){
					a[key] = b[key]
				};
			};
			return a;
		}
	};
	window.feiScroll = feiScroll;
})(window);
