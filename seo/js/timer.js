var timeObj = {
	getMyDate: function(){
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
	}
}
