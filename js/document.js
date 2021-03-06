/*! Frost_Website 0.0.1 2014-06-06 */
/*! Float.js 0.1.2 2014-06-06 */
var frost = new Frost.Graph({
	element: "#standardBarChart",
	width: 300,
	height: 200,
	type: "bar",
	series: [
	{
		color: "steelblue",
		data: [
			{value: 10,name: "一月"},
			{value: 13,name: "二月"}, 
			{value: 10,name: "三月"},
			{value: 40,name: "四月"},
			{value: 13,name: "五月"},
		],
		name: "Country"
	}],
	hasDetail: true,
	hasContent: true
});
frost.render();


var frost = new Frost.Graph({
	element: "#groupBarChart",
	width: 300,
	height: 200,
	type: "bar",
	stack: false,
	barType: 2,
	series: [
	{
		color: "lightblue",
		data: [
			{value: 10,name: "一月"},
			{value: 13,name: "二月"}, 
			{value: 10,name: "三月"},
			{value: 40,name: "四月"},
			{value: 13,name: "五月"},
		],
		name: "Country"
	},
	{
		color: 'steelblue',
		data: [
			{value: 6,name: "一月"},
			{value: 20,name: "二月"}, 
			{value: 20,name: "三月"},
			{value: 50,name: "四月"}
		],
		name: "Village"
	}],
	hasDetail: true
});
frost.render();

var frost = new Frost.Graph({
	element: "#stackBarChart",
	width: 300,
	height: 200,
	type: "bar",
	stack: true,
	barType: 2,
	series: [
	{
		color: "lightblue",
		data: [
			{value: 10,name: "Jan"},
			{value: 13,name: "Feb"}, 
			{value: 10,name: "Mar"},
			{value: 40,name: "Apr"},
			{value: 13,name: "May"},
		],
		name: "Country"
	},
	{
		color: 'steelblue',
		data: [
			{value: 6,name: "Jan"},
			{value: 20,name: "Feb"}, 
			{value: 33,name: "Mar"},
			{value: 50,name: "May"}
		],
		name: "Village"
	}],
	hasDetail: true
});
frost.render();
var frost = new Frost.Graph({
	element: "#lineChart",
	width: 300,
	height: 200,
	type: "line",
	lineType: "linear",
	isXLinear: false,
	series: [
	{
		color: "steelblue",
		data: [
			{value: 10,name: "一月"},
			{value: 13,name: "二月"}, 
			{value: 18,name: "三月"},
			{value: 24,name: "四月"},
			{value: 30,name: "五月"},
		],
		name: "Country"
	},{
		color: "lightblue",
		data: [
			{value: 8,name: "一月"},
			{value: 12,name: "二月"}, 
			{value: 18,name: "三月"},
			{value: 27,name: "四月"},
			{value: 38,name: "五月"},
		],
		name: "Village"
	}],
	xAxis: true,
	yAxis: true,
	legend: false,
	hasStandard: true,
});
frost.render();
var frost = new Frost.Graph({
	element: "#areaChart",
	width: 300,
	height: 200,
	type: "area",
	isXLinear: true,
	lineType: "monotone",
	series: [
	{
		color: "steelblue",
		data: [
			{value: 10,name: "Jan"},
			{value: 15,name: "Feb"}, 
			{value: 13,name: "Mar"},
			{value: 18,name: "Apr"},
			{value: 16,name: "May"},
		],
		name: "Country"
	}]
});
frost.render();
var frost = new Frost.Graph({
	element: "#stackAreaChart",
	width: 300,
	height: 200,
	type: "area",
	stack: true,
	isXLinear: true,
	lineType: "monotone",
	series: [
	{
		color: "#9ecae1",
		data: [
			{name: "a", value: 33},
			{name: "b", value: 32},
			{name: "c", value: 20},
			{name: "d", value: 45}
		],
		name: "Group1"
	},{
		color: "#6bafd6",
		data: [
			{name: "a", value: 22},
			{name: "b", value: 11},
			{name: "c", value: 8},
			{name: "d", value: 42}
		],
		name: "Group2"
	},{
		color: "#3283bd",
		data: [
			{name: "a", value: 34},
			{name: "b", value: 46},
			{name: "c", value: 43},
			{name: "d", value: 70}
		],
		name: "Group3"
	}]
});
frost.render();
var frost = new Frost.Graph({
	element: "#pieChart",
	width: 300,
	height: 200,
	type: "pie",
	series: [
	{
		data: [
			{value: 10,name: "Jan"},
			{value: 11,name: "Feb"}, 
			{value: 13,name: "Mar"},
			{value: 15,name: "Apr"},
			{value: 18,name: "May"},
		],
		name: "Country"
	}],
	hasDetail: true,
	hasContent: true
});
frost.render();
var frost = new Frost.Graph({
	element: "#arcChart",
	width: 300,
	height: 200,
	type: "arc",
	series: [
	{
		data: [
			{value: 10,name: "Jan"},
			{value: 11,name: "Feb"}, 
			{value: 13,name: "Mar"},
			{value: 15,name: "Apr"},
			{value: 18,name: "May"},
			{value: 28,name: "Jun"},
			{value: 14,name: "Jul"},
			{value: 6,name: "Aug"},
			{value: 3,name: "Sep"},
			{value: 2,name: "Oct"},
			{value: 1,name: "Nov"},
			{value: 2,name: "Dec"},
		],
		name: "Country"
	}],
	legend: true,
	hasDetail: true
});
frost.render();
var frost = new Frost.Graph({
	element: "#scatterChart",
	width: 300,
	height: 200,
	type: "scatter",
	series: [
	{
		color: "#9ecae1",
		data: [
			{name: "a", value: 1},
			{name: "b", value: 2},
			{name: "c", value: 3},
			{name: "d", value: 4}
		],
		name: "Group1"
	},
	{
		color: '#bbe468',
		data: [
			{name: "a", value: 12},
			{name: "b", value: 17},
			{name: "c", value: 7},
			{name: "d", value: 3}
		],
		name: "Group2"
	},
	{
		color: "#6bafd6",
		data: [
			{name: "a", value: 2},
			{name: "b", value: 10},
			{name: "c", value: 3},
			{name: "d", value: 9}
		],
		name: "Group3"
	},
	{
		color: '#92875a',
		data: [
			{name: "a", value: 2},
			{name: "b", value: 4},
			{name: "c", value: 6},
			{name: "d", value: 8}
		],
		name: "Group4"
	},
	{
		color: '#ecb796',
		data: [
			{name: "a", value: 3},
			{name: "b", value: 6},
			{name: "c", value: 9},
			{name: "d", value: 12}
		],
		name: "Group5"
	}],
	xAxis: true,
	yAxis: true,
	hasDetail: true
});
frost.render();
var frost = new Frost.Graph({
	element: "#bubbleChart",
	width: 300,
	height: 200,
	type: "bubble",
	series: [
	{
		color: "#9ecae1",
		data: [
			{name: "a", value: 1},
			{name: "b", value: 2},
			{name: "c", value: 3},
			{name: "d", value: 4}
		],
		name: "Group1"
	},
	{
		color: '#bbe468',
		data: [
			{name: "a", value: 12},
			{name: "b", value: 17},
			{name: "c", value: 7},
			{name: "d", value: 3}
		],
		name: "Group2"
	},
	{
		color: "#6bafd6",
		data: [
			{name: "a", value: 2},
			{name: "b", value: 10},
			{name: "c", value: 3},
			{name: "d", value: 9}
		],
		name: "Group3"
	},
	{
		color: '#92875a',
		data: [
			{name: "a", value: 2},
			{name: "b", value: 4},
			{name: "c", value: 6},
			{name: "d", value: 8}
		],
		name: "Group4"
	},
	{
		color: '#ecb796',
		data: [
			{name: "a", value: 3},
			{name: "b", value: 6},
			{name: "c", value: 9},
			{name: "d", value: 12}
		],
		name: "Group5"
	}],
	hasDetail: true,
	legend: true
});
frost.render();
var frost = new Frost.Graph({
	element: "#forceChart",
	width: 300,
	height: 200,
	type: "force",
	series: [
	{
		color: "#9ecae1",
		data: [
			{name: "a1", value: 1},
			{name: "b1", value: 2},
			{name: "c1", value: 3},
			{name: "d1", value: 4},
			{name: "e1", value: 4},
			{name: "f1", value: 4},
			{name: "g1", value: 4},
			{name: "h1", value: 4}
		],
		name: "Group1"
	},{
		color: '#bbe468',
		data: [
			{name: "a2", value: 2},
			{name: "b2", value: 4},
			{name: "c2", value: 6},
			{name: "d2", value: 8}
		],
		name: "Group2"
	},{
		color: "#6bafd6",
		data: [
			{name: "a2", value: 2},
			{name: "b2", value: 4},
			{name: "c2", value: 6},
			{name: "d2", value: 8}
		],
		name: "Group3"
	},{
		color: '#92875a',
		data: [
			{name: "a2", value: 2},
			{name: "b2", value: 4},
			{name: "c2", value: 6},
			{name: "d2", value: 8}
		],
		name: "Group4"
	},{
		color: '#ecb796',
		data: [
			{name: "a3", value: 3},
			{name: "b3", value: 6},
			{name: "c3", value: 9},
			{name: "d3", value: 12}
		],
		name: "Group5"
	}],
	legend: true,
	hasDetail: true
});
frost.render();

$(document).ready(function() {
	$(".container_chart h2").click(function(e) {
		$(this).parent().find("ul").fadeToggle();
	});
});