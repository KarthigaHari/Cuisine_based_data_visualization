var margin_r = {top: 20, right: 10, bottom: 30, left: 40},
    width_r = 500 - margin_r.left - margin_r.right,
    height_r =490 - margin_r.top - margin_r.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */ 

// setup x 
var xValue_r = function(d) { return d.review_average;}, // data -> value
    xScale_r = d3v3.scale.linear().range([0, width_r]), // value -> display
    xMap_r = function(d) { return xScale_r(xValue_r(d));}, // data -> display
    xAxis_r = d3v3.svg.axis().scale(xScale_r).orient("bottom");

// setup y
var yValue_r = function(d) { return d["count"];}, // data -> value
    yScale_r = d3v3.scale.linear().range([height_r, 0]), // value -> display
    yMap_r = function(d) { return yScale_r(yValue_r(d));}, // data -> display
    yAxis_r = d3v3.svg.axis().scale(yScale_r).orient("left");

// setup fill color
var cValue = function(d) { return d.category;},
    color = d3v3.scale.category10();

// add the graph canvas to the body of the webpage
var svg = d3.select("#rating_div").append("svg")
    .attr("width", width_r + margin_r.left + margin_r.right)
    .attr("height", height_r + margin_r.top + margin_r.bottom)
  .append("g")
    .attr("transform", "translate(" + margin_r.left + "," + margin_r.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select("#rating_div").append("div")
    .attr("class", "tooltip_cr")
    .style("opacity", 0);

// load data
d3.csv("data/average_cusine_rating.csv", function(error, data) {

  // change string (from CSV) into number format
  data.forEach(function(d) {
    d.review_average = +d.review_average;
    d["count"] = +d["count"];
//    console.log(d);
  });

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale_r.domain([d3.min(data, xValue_r)-1, d3.max(data, xValue_r)+1]);
  yScale_r.domain([d3.min(data, yValue_r)-1, d3.max(data, yValue_r)+1]);

  // x-axis
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height_r + ")")
      .call(xAxis_r)
    .append("text")
      .attr("class", "label")
      .attr("x", width_r)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Average Ratings");

  // y-axis
  svg.append("g")
      .attr("class", "axis")
      .call(yAxis_r)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Total Number of Reviews");

	  var selected_category="Mexican";
  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 7.5)
      .attr("cx", xMap_r)
      .attr("cy", yMap_r)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["category"] + "<br/> (" + xValue_r(d) 
	        + ", " + yValue_r(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      })
      .on("click", function(d) {
        showThisCategory(d["category"])
        plotBubbleChart(d["category"])
        console.log('Function called');
      });
	  
  // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width_r - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width_r - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})
});
