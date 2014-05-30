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
	xAxis: false,
	yAxis: false,
	legend: false,
	hasDetail: false
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
	xAxis: false,
	yAxis: false,
	hasStandard: false,
	legend: false,
	hasDetail: false
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
	xAxis: false,
	yAxis: false,
	legend: false,
	hasDetail: false
});
frost.render();