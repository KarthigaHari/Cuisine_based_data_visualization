function showThisCategory(name){
  console.log(name);
  changeColumnVisiblity("visibility-class","hidden")
  changeColumnVisiblity(name,"visible")
}

function changeColumnVisiblity(className,property) {
    var cols = document.getElementsByClassName(className);
    console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      cols[i].style.visibility = property;
    }
}

function swapColumnVisiblity(className) {
    var cols = document.getElementsByClassName(className);
    console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      if(cols[i].style.visibility == "hidden"){
      	cols[i].style.visibility = "visible"
      }else{
      	cols[i].style.visibility = "hidden"
      }
    }
}
// function plotBubbleChart(name)
// {
//   console.log(name);
//   let data = [{
//       cat: '1', name: 'curry', value: 72,
//       desc: `
//         "It was the best Thai Curry i had"<br/>
//         "We ordered curry with rice"
//       `
//     }, {
//       cat: '2', name: 'rice', value: 52,
//       desc: `
//         "The rice was dry. Loved the dessert"<br/>
//         "I ordered an order of hummus, falafel, and a chicken schwarma"
//       `
//     }, 
      
//     {
//       cat: '3', name: 'spicy', value: 44,
//       desc: `
//         "Pita bread is so outrageously good"<br/> 
//         "The plain pita is tender and fresh"
//         `
//     }, {
//       cat: '4', name: 'soup', value: 37,
//       desc: `
//         "The dinner's best part was hot soup with thai curry"<br/>
//         "Thai restaurant's soups have a very different taste"
//         `
//     }, {
//       cat: '5', name: 'beef', value: 30,
//       desc: `
//         "My favourite of the night was the Grilled Beef Heart with Chili Lime Salsa"<br/>
//         "I like the sun dried beef a lot"   
//         `
//     }, {
//       cat: '6', name: 'rolls', value: 23,
//       desc: `
//         "Favs include their vegetable egg rolls , pineapple fried rice, pad thai, and the currys"<br/>
//         "Can't say more than have the fresh and spring rolls and as much pad Thai as you can get your hands on!"
//       `
//     }, {
//       cat: '7', name: 'noodles', value: 29,
//       desc: `
//         "Great Pad Thai & Drunken noodles!"<br/>
//         "Thai rice noodles stir fried with sweet & sour tamarind sauce"
//       `
//     },  {
//       cat: '8', name: 'shrimp', value: 24,
//       desc: `
//         "Stir-fried shrimp with curry powder, egg, onion and chili garlic sauce"<br/>
//         "For our mains we had the garlic shrimp and Pad Thai_ Neither was impressive"
//       `
//     }, {
//       cat: '9', name: 'green', value: 21,
//       desc: `
//         "My favorite is the green curry"<br/>
//         "Green Curry with bamboo shoots, kaffir lime leaves, basil leaves, green peppers and coconut milk"  
//       `
//     }, {
//       cat: '10', name: 'salad', value: 21,
//       desc: `
//         "The mango salad, which is typically sweet and sour with some vinegar, was pretty much just sweet"<br/>
//         "Herbal Salad is a unique salad I've never found at any other Thai restaurant"
                
//         `
//     }];
//     var margin_r = {top: 20, right: 10, bottom: 30, left: 40},
//     width_r = 650 - margin_r.left - margin_r.right,
//     height_r = 550 - margin_r.top - margin_r.bottom;
//     var svg = d3.select("#bubblechart_div").append("svg")
//     .attr("width", width_r + margin_r.left + margin_r.right)
//     .attr("height", height_r + margin_r.top + margin_r.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin_r.left + "," + margin_r.top + ")");
//   let svg = d3.select('svg');
//     let width = document.body.clientWidth; // get width in pixels
//     let height = +svg.attr('height');
//     let centerX = width * 0.5;
//     let centerY = height * 0.5;
//     let strength = 0.05;
//     let focusedNode;

//     let format = d3.format(',d');

//     let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

//     // use pack to calculate radius of the circle
//     let pack = d3.pack()
//       .size([width , height ])
//       .padding(1.5);

//     let forceCollide = d3.forceCollide(d => d.r + 1);

//     // use the force
//     let simulation = d3.forceSimulation()
//       // .force('link', d3.forceLink().id(d => d.id))
//       .force('charge', d3.forceManyBody())
//       .force('collide', forceCollide)
//       // .force('center', d3.forceCenter(centerX, centerY))
//       .force('x', d3.forceX(centerX ).strength(strength))
//       .force('y', d3.forceY(centerY ).strength(strength));

//     // reduce number of circles on mobile screen due to slow computation
//     if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
//       data = data.filter(el => {
//         return el.value >= 50;
//       });
//     }

//     let root = d3.hierarchy({ children: data })
//       .sum(d => d.value);
//     let nodes = pack(root).leaves().map(node => {
//       console.log('node:', node.x, (node.x - centerX) * 2);
//       const data = node.data;
//       return {
//         x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
//         y: centerY + (node.y - centerY) * 3,
//         r: 0, // for tweening
//         radius: node.r, //original radius
//         id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
//         cat: data.cat,
//         name: data.name,
//         value: data.value,
//         icon: data.icon,
//         desc: data.desc,
//       }
//     });
//     simulation.nodes(nodes).on('tick', ticked);

//     svg.style('background-color', '#eee');
//     let node = svg.selectAll('.node')
//       .data(nodes)
//       .enter().append('g')
//       .attr('class', 'node')
//       .call(d3.drag()
//         .on('start', (d) => {
//           if (!d3.event.active) simulation.alphaTarget(0.2).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         })
//         .on('drag', (d) => {
//           d.fx = d3.event.x;
//           d.fy = d3.event.y;
//         })
//         .on('end', (d) => {
//           if (!d3.event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }));

//     node.append('circle')
//       .attr('id', d => d.id)
//       .attr('r', 0)
//       .style('fill', d => scaleColor(d.cat))
//       .transition().duration(2000).ease(d3.easeElasticOut)
//         .tween('circleIn', (d) => {
//           let i = d3.interpolateNumber(0, d.radius);
//           return (t) => {
//             d.r = i(t);
//             simulation.force('collide', forceCollide);
//           }
//         })

//     node.append('clipPath')
//       .attr('id', d => `clip-${d.id}`)
//       .append('use')
//       .attr('xlink:href', d => `#${d.id}`);

//     node.append("text")
//             .attr("dy", ".2em")
//             .classed('node-icon', true)
//             .style("text-anchor", "middle")
//             .text(d => d.name)
//             .attr("font-family", "sans-serif")
//             .attr("font-size", function(d){
//                 if (d.value == 55)
//                     return d.value - 12 ;
//                   else
//                     return d.value;

//             })
//             .attr("fill", "white");


//     node.append('title')
//       .text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

//     let legendOrdinal = d3.legendColor()
//       .scale(scaleColor)
//       .shape('circle');


//     let sizeScale = d3.scaleOrdinal()
//         .domain(['less use', 'more use'])
//         .range([5, 10] );

//     let legendSize = d3.legendSize()
//       .scale(sizeScale)
//       .shape('circle')
//       .shapePadding(10)
//       .labelAlign('end');

//     let legend2 = svg.append('g')
//       .classed('legend-size', true)
//       .attr('text-anchor', 'start')
//       .attr('transform', 'translate(20, 30)')
//       .style('font-size', '12px')
//       .call(legendSize);

//     let infoBox = node.append('foreignObject')
//       .classed('circle-overlay hidden', true)
//       .attr('x', -350 * 0.5 * 0.8)
//       .attr('y', -350 * 0.5 * 0.8)
//       .attr('height', 350 * 0.8)
//       .attr('width', 350 * 0.8)
//         .append('xhtml:div')
//         .classed('circle-overlay__inner', true);

//     infoBox.append('h2')
//       .classed('circle-overlay__title', true)
//       .text(d => d.name);

//     infoBox.append('p')
//       .classed('circle-overlay__body', true)
//       .html(d => d.desc);


//     node.on('click', (currentNode) => {
//       d3.event.stopPropagation();
//       console.log('currentNode', currentNode);
//       let currentTarget = d3.event.currentTarget; // the <g> el

//       if (currentNode === focusedNode) {
//         // no focusedNode or same focused node is clicked
//         return;
//       }
//       let lastNode = focusedNode;
//       focusedNode = currentNode;

//       simulation.alphaTarget(0.2).restart();
//       // hide all circle-overlay
//       d3.selectAll('.circle-overlay').classed('hidden', true);
//       //d3.selectAll('.node-icon').classed('hidden', true);

//       // don't fix last node to center anymore
//       if (lastNode) {
//         console.log('lastNode',lastNode)
//         lastNode.fx = null;
//         lastNode.fy = null;
//         node.filter((d, i) => i === lastNode.index)
//           .transition().duration(2000).ease(d3.easePolyOut)
//           .tween('circleOut', () => {
//             let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
//             return (t) => {
//               lastNode.r = irl(t);
//             }
//           })
//           .on('interrupt', () => {
//             lastNode.r = lastNode.radius;

//           });
//       d3.selectAll('.node-icon').classed('hidden', false);
//       }

//       // if (!d3.event.active) simulation.alphaTarget(0.5).restart();

//       d3.transition().duration(2000).ease(d3.easePolyOut)
//         .tween('moveIn', () => {
//           console.log('tweenMoveIn', currentNode);
//           let ix = d3.interpolateNumber(currentNode.x, centerX);
//           let iy = d3.interpolateNumber(currentNode.y, centerY);
//           let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
//           return function (t) {
//             // console.log('i', ix(t), iy(t));
//             currentNode.fx = ix(t);
//             currentNode.fy = iy(t);
//             currentNode.r = ir(t);
//             simulation.force('collide', forceCollide);
//           };
//         })
//         .on('end', () => {
//           simulation.alphaTarget(0);
//           let $currentGroup = d3.select(currentTarget);
//           $currentGroup.select('.circle-overlay')
//             .classed('hidden', false);
//           $currentGroup.select('.node-icon')
//             .classed('hidden', true);

//         })
//         .on('interrupt', () => {
//           console.log('move interrupt', currentNode);
//           currentNode.fx = null;
//           currentNode.fy = null;
//           simulation.alphaTarget(0);
//         });

//     });

//     // blur
//     d3.select(document).on('click', () => {
//       let target = d3.event.target;
//       // check if click on document but not on the circle overlay
//       if (!target.closest('#circle-overlay') && focusedNode) {
//         focusedNode.fx = null;
//         focusedNode.fy = null;
//         simulation.alphaTarget(0.2).restart();
//         d3.transition().duration(2000).ease(d3.easePolyOut)
//           .tween('moveOut', function () {
//             console.log('tweenMoveOut', focusedNode);
//             let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
//             return function (t) {
//               focusedNode.r = ir(t);
//               simulation.force('collide', forceCollide);
//             };
//           })
//           .on('end', () => {
    
//             focusedNode = null;
//             simulation.alphaTarget(0);
        
//           })
//           .on('interrupt', () => {
//             simulation.alphaTarget(0);

//           });

//         // hide all circle-overlay
//         d3.selectAll('.circle-overlay').classed('hidden', true);
//         d3.selectAll('.node-icon').classed('hidden', false);
//       }
//     });

//     function ticked() {
//       node
//         .attr('transform', d => `translate(${d.x},${d.y})`)
//         .select('circle')
//           .attr('r', d => d.r);
//     }
// }



function clearall(){
	changeColumnVisiblity("visibility-class","hidden")
}


/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

$(".dropdown dt a").on('click', function() {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function() {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
    title = $(this).val() + ",";
    swapColumnVisiblity($(this).val())

  if ($(this).is(':checked')) {
    var html = '<span title="' + title + '">' + title + '</span>';
    $('.multiSel').append(html);
    $(".hida").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $('.dropdown dt a').append(ret);

  }
});