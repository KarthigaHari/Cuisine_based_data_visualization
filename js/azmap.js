var leafletMap = L.map('map').setView([33.548927,-111.993735], 10);

L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(leafletMap);

color_list=["#800000","#808000","#469990","#d64a4a","#911eb4","#3cb44b","#e6194B","f58231","#000075","#aaffc3","#9A6324","#d64a4a","#e6beff","#fabebe","#bfef45","#f032e6","#42d4f4","#000000"]

var svgMap = d3.select(leafletMap.getPanes().overlayPane).append("svg")
.attr("width", 900).attr("height", 900);
var circleGroup = svgMap.append("g").attr("class", "leaflet-zoom-hide");


var tooltipmap = d3.select("#map").append("div").attr("class", "toolTipMap");

var controls = d3.select("#map").append("label")
.attr("id", "controls");
var checkbox = controls.append("input")
.attr("id", "collisiondetection")
.attr("type", "checkbox");
controls.append("span")
.text("Collision detection");


d3.csv('data/arizona_cuisine_details.csv', function (error, dataset) {
  if (error) throw error;

  dataset.forEach(function(d) {
   d.LatLng = new L.LatLng(d.latitude, d.longitude);
   d.star = +d.star;

 });



  var circleBind = circleGroup.selectAll("g")
  .data(dataset)

  var mapCircles = circleBind.enter()
  .append("g")
  .append("circle")
  .attr("pointer-events", "visible")
  .attr("r", 3)
  .on('click',function(d){
    d3.select('#detailbar').style('display', 'block');
    d3.select('#storename').html(d.name);
    console.log(d.id)})
  .attr("id-class", function(d){return d.id;})
  .attr("class",function(d){return "visibility-class " + d.category;}).style("fill", function(d) { return color(cValue(d));}) 
  .attr("star-class", function(d){return d.star;})
  .attr("review-class", function(d){return d.review_count;})
  .on("mousemove", function(d){
   tooltipmap
   .style("left", d3.event.pageX - 50 + "px")
   .style("top", d3.event.pageY - 150 + "px")
   .style("display", "inline-block")
   .html((d.name) + "<br>" +"Star:" + d.stars + "<br>Total Review: "+ d.review_count
     + "<br>" + "Address:" + (d.address));
 })
  .on("mouseout", function(d){ tooltipmap.style("display", "none");});



            // .on('click', selectBus)；

function updateMap() {
   mapCircles.attr("transform",
     function(d) {
       return "translate("+
       leafletMap.latLngToLayerPoint(d.LatLng).x +","+
       leafletMap.latLngToLayerPoint(d.LatLng).y +")";
     });
 }

 leafletMap.on("viewreset", updateMap);
 updateMap();

});





