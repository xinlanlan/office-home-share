(function(window) {
	'use strict';
	var _winHeight = window.innerHeight,
		_winScrollTop = 0;
	var lazyLoadPic = function(ele) {
		this.param.elements = ele;
	};
	lazyLoadPic.prototype = {
		param: {
			placeholder: '/seo/img/001.png',
			threshold: 0,
		},
		setOption: function(param, callback){
			this.extend(this.param, param);
			this.init(param, callback);
		},
		init: function(param, callback) {
			var self = this;
			self.loadPic(callback);
			window.onscroll = function() {
				_winScrollTop = document.documentElement.scrollTop;
				self.loadPic(callback);
			};
		},
		loadPic: function(callback) {
			var self = this;
			self.param.elements.forEach(function(item, index) {
				if(item.tagName == 'IMG') {
					if(item.getAttribute('data-original')) {
						var _offsetTop = item.offsetTop,
							_clientHight = window.innerHeight;
						if((_offsetTop - self.param.threshold) <= (_winScrollTop + _clientHight)) {
							item.setAttribute('src', item.getAttribute('data-original'));
							item.removeAttribute('data-original');
							if(callback){
								callback({
									'scrollHeight': _winScrollTop
								});
							};
						};
					};
				} else {
					if(item.getAttribute('data-original')) {
						if(item.style.backgroundImage == 'none') {
							item.style.backgroundImage = 'url(' + self.param.placeholder + ')';
						};
						var _offsetTop = item.offsetTop,
							_clientHight = window.innerHeight;
						if((_offsetTop - self.param.threshold) <= (_winScrollTop + _clientHight)) {
							item.style.backgroundImage = 'url(' + item.getAttribute('data-original') + ')';
							item.removeAttribute('data-original');
							if(callback){
								callback({
									'scrollHeight': _winScrollTop
								});
							};
						};
					};
				};
			});
		},
		extend: function(a, b) {
			for(var key in b) {
				if(b.hasOwnProperty(key)) {
					a[key] = b[key];
				};
			};
			return a;
		}
	};
	window.lazyLoadPic = lazyLoadPic;
})(window);