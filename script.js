//Used from Nadieh Bremer at http://bl.ocks.org/nbremer/6506614

		// 	THIS LEGEND COULD BE USED FOR SOMETHING ELSE, NOT NECESSARRY HERE 
		// 	BECAUSE ONLY ONE COMMUNITY SHOULD BE SHOWN AT A TIME 
//var LegendOptions = ['Albany Park','Archer Heights', 'Ashburn'];



//Options for the Radar chart, other than default
var mycfg = {
  w: 500,
  h: 500,
  maxValue: 14000000,
  levels: 5,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", DATA[1], mycfg);


////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////
// RadarChart.draw("#chart", d, mycfg);

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
	// //Create colour squares
	// legend.selectAll('rect')
	//   .data(LegendOptions)
	//   .enter()
	//   .append("rect")
	//   .attr("x", w - 65)
	//   .attr("y", function(d, i){ return i * 20;})
	//   .attr("width", 10)
	//   .attr("height", 10)
	//   .style("fill", function(d, i){ return colorscale(i);})
	//   ;
	// //Create text next to squares
	// legend.selectAll('text')
	//   .data(LegendOptions)
	//   .enter()
	//   .append("text")
	//   .attr("x", w - 52)
	//   .attr("y", function(d, i){ return i * 20 + 9;})
	//   .attr("font-size", "11px")
	//   .attr("fill", "#737373")
	//   .text(function(d) { return d; })
	//   ;	