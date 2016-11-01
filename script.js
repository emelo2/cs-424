var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

		// 	THIS LEGEND COULD BE USED FOR SOMETHING ELSE, NOT NECESSARRY HERE 
		// 	BECAUSE ONLY ONE COMMUNITY SHOULD BE SHOWN AT A TIME 
var LegendOptions = ['Albany Park','Archer Heights', 'Ashburn'];

//Data
var d = [
		  [	
			{axis:"January",value:1520056},
			{axis:"February",value:1702023},
			{axis:"March",value:1703714},
			{axis:"April",value:1646921},
			{axis:"May",value:2141045},
			{axis:"June",value:3350039},
			{axis:"July",value:3874318},
			{axis:"August",value:02841312},
			{axis:"September",value:1933076},
			{axis:"October",value:1935290},
			{axis:"November",value:2815237},
			{axis:"December",value:3006797},
		  ],[
			{axis:"January",value:2563748},
			{axis:"February",value:2527124},
			{axis:"March",value:2411892},
			{axis:"April",value:2556100},
			{axis:"May",value:3226767},
			{axis:"June",value:4892737},
			{axis:"July",value:6037846},
			{axis:"August",value:4741099},
			{axis:"September",value:3052046},
			{axis:"October",value:2805395},
			{axis:"November",value:3961093},
			{axis:"December",value:4466966},
		],[
			{axis:"January",value:5644859},
			{axis:"February",value:5538011},
			{axis:"March",value:5399230},
			{axis:"April",value:5545123},
			{axis:"May",value:7721287},
			{axis:"June",value:12192411},
			{axis:"July",value:13567533},
			{axis:"August",value:10005017},
			{axis:"September",value:6683138},
			{axis:"October",value:6156970},
			{axis:"November",value:8891564},
			{axis:"December",value:9849723},
		]];

console.log(d);
/*var arr1 = [];

var request = new XMLHttpRequest();
request.open("GET", "electricity.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
  	var d = JSON.parse(request.responseText);
  	arr1 = create(d);
    console.log(d);
  }
}

function create(d){
var iMax = 77;
var jMax = 12;
var arr1 = new Array();
var arr2 = new Array();
for (var i = 0; i < iMax; i++){
	arr1.push([
		arr2.push({
			axis: "January", value: d.January
			}),
		arr2.push({
			axis: "February", value: d.February
			}), 
		arr2.push({	
			axis: "March", value: d.March
			}),
		arr2.push({
			axis: "April", value: d.April
			}),
		arr2.push({
			axis: "May", value: d.May
			}),
		arr2.push({
			axis: "June", value: d.June
			}),
		arr2.push({
			axis: "July", value: d.July
			}),
		arr2.push({
			axis: "August", value: d.August
			}),
		arr2.push({
			axis: "September", value: d.September
			}),
		arr2.push({
			axis: "October", value: d.October
			}),
		arr2.push({
			axis: "November", value: d.November
			}),
		arr2.push({
			axis: "December", value: d.December
			})
	])          
}

console.log(arr1);
return arr1;

}*/

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 14000000,
  levels: 5,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s

RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Energy Consumption in KWH");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	