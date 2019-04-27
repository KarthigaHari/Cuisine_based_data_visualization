//Reference - http://bl.ocks.org/micahstubbs/8e15870eb432a21f0bc4d3d527b2d14f

const loadMap = (mapContainer) => {
   
   const el = $(mapContainer);

    let margin = {top: 0, right: 0, bottom: 0, left: 0},
        width = el.width() - margin.left - margin.right - 20,
        height = 600 - margin.top - margin.bottom;

	let color = d3.scaleLinear()
  .domain([1,2,10,15,20,25,30])
  .range([ "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);
	//.range(['#e2a4a4','#db8d8d','#d37676','#cc6060','#c54949','#be3232','#b71c1c']);
  
    let svg = d3.select(mapContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "background-color");
	
	var legendLinear = d3.legendColor()
						.shapeWidth(30).labelFormat(d3.format(".0f"))
						.cells(6)
						.orient('horizontal')
						.title("Number of players")
						.scale(color);
  
	svg.append("g")
		.attr("class","map")
		.attr("class", "legendLinear")
  .		attr("transform", "translate(20,20)");

	//svg.select(".legendLinear")
		//.call(legendLinear);

    let projection = d3.geoMercator()
        .scale(130)
        .translate( [width / 2, height / 1.5]);

    let path = d3.geoPath().projection(projection);
	
	let tooltip=d3.tip()
        .attr('class', 'd3-tip')
        .html(function(d) {
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>"
                + "<strong>No of Players: </strong><span class='details'>" + d.players +"</span>";
        });

    svg.call(tooltip);

    queue()
        .defer(d3.json, "world_countries.json")
        .defer(d3.csv, "10yearAUSOpenMatches.csv")
        .await(ready);

    function ready(error, data, matchData){
        let playerCountByCountry = {};
		
		const size = obj => Object.keys(obj).length;

        matchData.forEach(d => {
            let playerName = d['player1'];
            if(d['country1'] in playerCountByCountry){
                if(playerName in playerCountByCountry[d['country1']]){
                    playerCountByCountry[d['country1']][playerName].push(d);
                }
                else{
                    playerCountByCountry[d['country1']][playerName] = [d];
                }
            }
            else{
                playerCountByCountry[d['country1']] = {};
                playerCountByCountry[d['country1']][playerName] = [d];
            }
        });
        data.features.forEach(function(d) {
            d.players = d.id in playerCountByCountry ? size(playerCountByCountry[d.id]) : 0;
            d.data = playerCountByCountry[d.id];
        });
		
        svg.append("g")
            .attr("class", "countries")
            .selectAll("path")
            .data(data.features)
            .enter().append("path")
            .attr("d", path)
            .style("fill", function(d) {
                return color(d.id in playerCountByCountry ? size(playerCountByCountry[d.id]) : 0);
            })
            .style('stroke', 'white')
            .style('stroke-width', 1.5)
            .style("opacity",0.8)
            .style("stroke","white")
            .style('stroke-width', 0.3)
            .on('mouseover',function(d){
                tooltip.show(d);

                d3.select(this)
                    .style("opacity", 1)
                    .style("stroke","white")
                    .style("stroke-width",2.5);

                if(d.players > 0){
                    d3.select(this)
                        .style('cursor', 'pointer');
                }
            })
            .on('mouseout', function(d){
                tooltip.hide(d);

                d3.select(this)
                    .style("opacity", 0.8)
                    .style("stroke","white")
                    .style("stroke-width",0.3);
            })
            .on('click', function (data) {
                if(data.players > 0){
                    d3.select('.selected-country')
                        .classed('selected-country', false);
                    d3.select(this)
                        .classed('selected-country', true);
						
                    callback(data);
                }
            });

        svg.append("path")
            .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
            .attr("class", "names")
            .attr("d", path);
    }
};
