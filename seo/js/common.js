/*common.js 2017-04-20*/
function urlObj(){
	var a = window.location.href;
	var b = a.substring(a.indexOf('?')+1)
	var arr = b.split('&')
	var obj = {};
	for(var i=0;i<arr.length;i++){
		var arr1 = arr[i].split('=')
		obj[arr1[0]] = arr1[1]
	}
	return obj;
};
function alertTn(a,b,c,d){
    if(!b){
        b = '提示'
    }else{
        b = b
    }
    if(!c){
    	c = ['关闭'];
    }else{
    	c = c;
    }
    var dialog = new auiDialog();
    dialog.alert({
        title:b,
        msg:a,
        buttons:c
    },d)
};
function alertTs(a,b,c){
    if(!b){
        b = '提示'
    }else{
        b = b
    }
    var dialog = new auiDialog();
    dialog.alert({
        title:b,
        msg:a,
        buttons:['关闭']
    },c)
};

//判断字符长度，一个中文代表两个字符
function charLen(a) {  
	var len = 0;  
	for (var i=0; i<a.length; i++) {  
		if (a.charCodeAt(i)>127 || a.charCodeAt(i)==94) {  
			len += 2;  
		} else {  
			len ++;  
		}  
	}  
	return len;  
}
//判断首字符，必须为中文或字母，返回true或false
function zLen(str){
	var bOver = null;
	var zL = /^[a-zA-Z|\u4e00-\u9fa5]{1}$/;
	var a = str.substring(0,1)
	bOver = zL.test(a)
	return bOver
}
//时间转化
function getMyDate(str){
	var num = parseInt(str);
    var oDate = new Date(num);
    var years = oDate.getFullYear();
    var months = oDate.getMonth()+1;
    var day = oDate.getDate();
    var hours = oDate.getHours();
    var mins = oDate.getMinutes();
    var sec = oDate.getSeconds();
    months = months < 10 ? '0'+months : months;
    day = day < 10 ? '0'+day : day;
    hours = hours < 10 ? '0'+hours : hours;
    mins = mins < 10 ? '0'+mins : mins;
    sec = sec < 10 ? '0'+sec : sec;
    var timer = years+'-'+months+'-'+ day +' '+ hours + ':'+mins+':'+sec;
    return timer;
};
function alertMark(a,b){
	var str = '<div class="mark-box"><p>'+
	'<span class="good-sentence" data-id="'+b+'">好句</span>'+
	'<span class="bad-sentence" data-id="'+b+'">残句</span></p>'+
	'<i class="small-arrow"></i></div>';
	a.append(str);
};

//首页的本地存贮章节name,id截取
function aqNameId(a){
	var obj = {};
	console.log(a);
	if(a){
		var arr = a.split('&');
		obj.name = arr[0];
		obj.id = arr[1];
	}else{
		obj = {}
	};
	return obj;
}

//时间转化
function getMyDate1(str){
	var num = parseInt(str)
    var oDate = new Date(num)
    var years = oDate.getFullYear()
    var months = oDate.getMonth()+1
    var day = oDate.getDate()
    if(months < 10){
    	months = '0'+months;
    }
    if(day < 10){
    	day = '0'+day;
    }
    var timer = years+'-'+months+'-'+ day
    return timer
};

//获取当天的整点数的毫秒数
function getDatePoint(){
	var a = new Date();
	var years = a.getFullYear();
    var months = a.getMonth();
    var day = a.getDate();
    var b = (new Date(years,months,day)).getTime();
    return b
}

/*回到顶部的方法*/
function showTopBtn(){
	var str = '<div class="scroll-top"></div>';
	$('body').append(str);
	$(window).scroll(function(){
		var tops = $(window).scrollTop();
		if(tops>500){
			$('.scroll-top').show();
		}else{
			$('.scroll-top').hide();
		}
	});
	$(document).on('tap','.scroll-top',function(){
		$(window).scrollTop(0)
	});
};

//回到底部
function showBottomBtn(){
	var str = '<div class="scroll-bottom"></div>';
	$('body').append(str);
	$(window).scroll(function(){
		var tops = $(window).scrollTop();
		if(tops>500){
			$('.scroll-bottom').show();
		}else{
			$('.scroll-bottom').hide();
		}
	})
	$(document).on('tap','.scroll-bottom',function(){
		var h = document.body.clientHeight;
		$(window).scrollTop(h);
	})
}

//加载等待
	function waitDiglog(){
		var str = '<div class="aui-toast" style="block;margin-top: -97px;display:block">'+
			'<div class="aui-toast-loading"></div>'+
			'<div class="aui-toast-content">加载中</div>'+
		'</div>';
		$('body').append(str);
	};

//阻止冒泡兼容	
	function stopPropagation(e) {  
	    e = e || window.event;  
	    if(e.stopPropagation) { //W3C阻止冒泡方法  
	        e.stopPropagation();  
	    } else {  
	        e.cancelBubble = true; //IE阻止冒泡方法  
	    }  
	} 


//阅读句子的uri,对uri进行切割分段
	function splitUri(uri){
		var str = uri.substring(uri.indexOf('-')+1,uri.lastIndexOf('.'));
		return str;
	}
	
//上下十句的划线函数以及知识点阅读的划线函数
	function underlineStr(arr1){
		for(var i = 0;i < arr1.length;i++){
			var keyArr = JSON.parse(arr1[i].keyWords);
			if(keyArr == null){
				arr1[i].text = arr1[i].text;
			}else{
				for(var j=keyArr.length-1;j>=0;j--){
					var splitArr = arr1[i].text.split('');
					if(splitArr[0] == ' '||splitArr[0]=='　'){
						var splitStr = arr1[i].text.substring(parseInt(keyArr[j].begin)+2,parseInt(keyArr[j].end)+2);
					}else{
						var splitStr = arr1[i].text.substring(keyArr[j].begin,keyArr[j].end);
					}
					arr1[i].text = arr1[i].text.replace(splitStr,'<i>'+splitStr+'</i>');
				}
			}
		}
		return arr1
	}	
	
//关闭弹出层
	$('.aui-close-btn').tap(function(){
		$('.aui-mask1').hide();
		$('.aui-dialog1').hide();
	})		
	
//根据对象的属性值进行排序
	function compare(property,goDown){
	    return function(a,b){
	        var value1 = a[property];
	        var value2 = b[property];
	        return (value1 - value2)*goDown;
	    }
	}
	
//暂无数据的方法
	function noData(icon,text){	//icon阿里矢量图,text为内容
		var str = '<div class="no-data">'+
					'<p class="icon-par"><i class="iconfont">'+icon+'</i></p>'+
					'<p class="text-par">'+text+'</p>'+
				'</div>';
		$('body').append(str);
	};
	
//判断用户登陆
	function judgeLogin(func){
		$.ajax({
			url: '/ebook/user/getUsername',
			type: 'get',
			async: false,
			success: function(data){
				if(data.username == null){		//如果没有登陆，默认账号登陆
					window.location.href = '/ebook/login';
				}else{
					if(func){func()};
				};
			}
		})
	};

//登陆默认账号
	function defaultAccount(){
		$.ajax({
			type : "post",
			url : "/ebook/validateUser",
			async: false,
			data : {
				username: '16666666666',
				pwd: '1bbd886460827015e5d605ed44252251'
			},
			success : function(data) {
				console.log(data);
				localStorage.setItem('departName',data.topDepartmentName);
			}
		})
	};

//发送页面时间，考试次数，阅读次数等行为统计
	function sendCodeTime(times,remark,info,type,func){
		$.ajax({
			url: '/ebook/countInfo/insertCountInfo',
			type: 'get',
			data: {
				countInfo: times,
				remark: remark,
				countDetail: info,
				type: type			//0时行为积分
			},
			success: function(data){
				console.log(data);
				if(func){func()};
			}
		})
	};
	
//一秒执行一次存当前页面停留时长
	function setStorageTime(mark){
		var num = 0;	//num为秒数
		setInterval(function(){
			num++;
			localStorage.setItem('allInfo',num+','+mark);
		},1000);
	};

//取出页面的停留时间并发送时间点赞等东西
	function sendStorageTime(){
		var allInfo = localStorage.getItem('allInfo');
		if(allInfo){
			allInfo = allInfo;
		}else{
			allInfo = '0,信息';
		};
		var sendInfo = allInfo.split(',');
		var times = parseInt(sendInfo[0]/60);		
		var mark = sendInfo[1];
		var info = sendInfo[2];
		var type = sendInfo[3];
		if(times !== 0){
			sendCodeTime(times,mark,info,type);
		};
	};	
	
//获取openId
	function aqOpenId(){
		var opendId = JSON.parse(localStorage.getItem('openId'));
		if(opendId){
			$.ajax({
				url:'/ebook/user/checkOpenId',
				dataType:'JSON',
				type:'post',
				success:function(data){
					localStorage.setItem('openId',false);
					var json = JSON.parse(data);
					// window.location.href = data.codeUrl;
				}
			});
		};
	};
	
	
	
	
	
	
	
	
