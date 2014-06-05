var fiveInOut = new Frost.Graph({
	element: "#fiveInOut",
	width: 500,
	height: 300,
	type: "bar",
	stack: true,
	barType: 1,
	series: [
	{
		color: "#589400",
		data: [{
			value: 37,
			name: "GA"
		}, {
			value: 65,
			name: "GD"
		}],
		name: "Man City"
	},{
		color: "#0066cc",
		data: [{
			value: 50,
			name: "GA"
		}, {
			value: 51,
			name: "GD"
		}],
		name: "Liverpool"
	},{
		data: [{
			value: 27,
			name: "GA"
		}, {
			value: 44,
			name: "GD"
		}],
		name: "Cheisea"
	},{
		data: [{
			value: 41,
			name: "GA"
		}, {
			value: 27,
			name: "GD"
		}],
		name: "Arsenal"
	},{
		data: [{
			value: 39,
			name: "GA"
		}, {
			value: 22,
			name: "GD"
		}],
		name: "Everton"
	}],
	hasDetail: true,
	xAxis:true,
	yAxis: true,
	legend: true
});
fiveInOut.render();
var goalPlayer = new Frost.Graph({
	element: "#goalPlayer",
	width: 300,
	height: 300,
	type: "pie",
	series: [
	{
		data: [
			{value: 1,name: "Sagna"},
			{value: 2,name: "Mertesacker"}, 
			{value: 2,name: "Koscielny"},
			{value: 2,name: "Rosicky"},
			{value: 2,name: "Arteta"},
			{value: 8,name: "Podolski"},
			{value: 3,name: "Wilshere"},
			{value: 5,name: "Ozil"},
			{value: 16,name: "Giroud"},
			{value: 5,name: "Walcott"},
			{value: 2,name: "Chamberlain"},
			{value: 9,name: "Ramsey"},
			{value: 4,name: "Cazorla"},
			{value: 2,name: "Flamini"},
			{value: 2,name: "Bendtner"},
			{value: 1,name: "Gnabry"}
		],
		name: "Country"
	}],
	hasDetail: true,
	hasContent: false,
	legend:true
});
goalPlayer.render();