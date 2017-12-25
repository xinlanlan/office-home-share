function aqChart(ele){
	var echarted = echarts.init(ele);
	var option = {
	    color: ['#3398DB'],
	    legend: {data:['考试成绩']},
	    xAxis : [
	        {
	            type : 'category',
	            data : ['优秀', '良好', '合格', '不合格'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name:'考试成绩',
	        }
	    ],
	    series : [
	        {
	            name:'考试成绩',
	            type:'bar',
	            barWidth: '50%',
	            data:[10, 52, 200, 334]
	        }
	    ]
	}
	echarted.setOption(option);
}