/*
 *    main.js
 */
var data = [25, 20, 15, 10, 5];
var dims = 400;
var svg = d3
  .select('#chart-area')
  .append('svg')
  .attr('width', dims)
  .attr('height', dims)
  .style('background-color', 'black');
var currPos = 0;
var size = 40;
var rectangles = svg.selectAll('rectangle').data(data);
rectangles
  .enter()
  .append('rect')
  .attr('x', () => {
    let pos = currPos;
    currPos += size;
    return pos;
  })
  .attr('y', (d) => dims - d)
  .attr('width', size)
  .attr('height', (d) => d)
  .attr('fill', 'blue');
