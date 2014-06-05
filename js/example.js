var fiveShootGoal = new Frost.Graph({
	element: "#fiveShootGoal",
	width: 480,
	height: 300,
	type: "bar",
	stack: true,
	barType: 1,
	series: [
	{
		color: "#589400",
		data: [{
			value: 102,
			name: "Goal"
		}, {
			value: 645-102,
			name: "Shoot Miss"
		}],
		name: "Man City"
	},{
		color: "#0066cc",
		data: [{
			value: 101,
			name: "Goal"
		}, {
			value: 578-101,
			name: "Shoot Miss"
		}],
		name: "Liverpool"
	},{
		data: [{
			value: 71,
			name: "Goal"
		}, {
			value: 661-71,
			name: "Shoot Miss"
		}],
		name: "Cheisea"
	},{
		data: [{
			value: 68,
			name: "Goal"
		}, {
			value: 509-68,
			name: "Shoot Miss"
		}],
		name: "Arsenal"
	},{
		data: [{
			value: 61,
			name: "Goal"
		}, {
			value: 541-61,
			name: "Shoot Miss"
		}],
		name: "Everton"
	}],
	hasDetail: true,
	xAxis:true,
	yAxis: true,
	legend: true,
});
fiveShootGoal.render();
var fiveInOut = new Frost.Graph({
	element: "#fiveInOut",
	width: 480,
	height: 300,
	type: "bar",
	stack: true,
	barType: 1,
	series: [
	{
		color: "#cc7a6f",
		data: [{
			value: 37,
			name: "Goal Loose"
		}, {
			value: 65,
			name: "GD"
		}],
		name: "Man City"
	},{
		color: "#6f88c0",
		data: [{
			value: 50,
			name: "Goal Loose"
		}, {
			value: 51,
			name: "GD"
		}],
		name: "Liverpool"
	},{
		data: [{
			value: 27,
			name: "Goal Loose"
		}, {
			value: 44,
			name: "GD"
		}],
		name: "Cheisea"
	},{
		data: [{
			value: 41,
			name: "Goal Loose"
		}, {
			value: 27,
			name: "GD"
		}],
		name: "Arsenal"
	},{
		data: [{
			value: 39,
			name: "Goal Loose"
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
var manCityPlayerGoal = new Frost.Graph({
	element: "#manCityPlayerGoal",
	width: 470,
	height: 300,
	type: "pie",
	series: [
	{
		data: [
			{value: 3,name: "Kompany"},
			{value: 1,name: "Zabaleta"}, 
			{value: 1,name: "Milner"},
			{value: 6,name: "Nasri"},
			{value: 9,name: "Negredo"},
			{value: 16,name: "Dzeko"},
			{value: 1,name: "Kolarov"},
			{value: 4,name: "Navas"},
			{value: 17,name: "Aguero"},
			{value: 7,name: "Silva"},
			{value: 5,name: "Fernandinho"},
			{value: 2,name: "Demichelis"},
			{value: 3,name: "Jovetic"},
			{value: 20,name: "Toure"}
		],
		name: "Man City"
	}],
	hasDetail: true,
	hasContent: false,
	legend:true
});
manCityPlayerGoal.render();
var liverpoolPlayerGoal = new Frost.Graph({
	element: "#liverpoolPlayerGoal",
	width: 470,
	height: 300,
	type: "pie",
	series: [
	{
		data: [
			{value: 1,name: "Agger"},
			{value: 31,name: "Suarez"}, 
			{value: 13,name: "Gerrard"},
			{value: 5,name: "Coutinho"},
			{value: 1,name: "Moses"},
			{value: 4,name: "Henderson"},
			{value: 21,name: "Sturridge"},
			{value: 1,name: "Sakho"},
			{value: 1,name: "Allen"},
			{value: 9,name: "Sterling"},
			{value: 7,name: "Skrtel"},
			{value: 1,name: "Flanagan"}
		],
		name: "Man City"
	}],
	hasDetail: true,
	hasContent: false,
	legend:true
});
liverpoolPlayerGoal.render();
var cheiseaPlayerGoal = new Frost.Graph({
	element: "#cheiseaPlayerGoal",
	width: 470,
	height: 300,
	type: "pie",
	series: [
	{
		data: [
			{value: 3,name: "Ivanovic"},
			{value: 1,name: "Ramires"}, 
			{value: 5,name: "Lampard"},
			{value: 4,name: "Torres"},
			{value: 8,name: "Oscar"},
			{value: 1,name: "Mikel"},
			{value: 7,name: "Schurrle"},
			{value: 2,name: "Salah"},
			{value: 14,name: "Hazard"},
			{value: 5,name: "Demba Ba"},
			{value: 4,name: "Willian"},
			{value: 1,name: "Cahill"},
			{value: 3,name: "Terry"},
			{value: 9,name: "Eto'o"}
		],
		name: "Country"
	}],
	hasDetail: true,
	hasContent: false,
	legend:true
});
cheiseaPlayerGoal.render();
var arsenalPlayerGoal = new Frost.Graph({
	element: "#arsenalPlayerGoal",
	width: 470,
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
arsenalPlayerGoal.render();