/*
 *    main.js
 */
d3.json('data/buildings.json').then((data) => {
  let size = 0;
  data.forEach((d) => {
    d.height = +d.height;
    if (d.height > size) {
      size = d.height;
    }
  });
  size += 20;
  var svg = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', size)
    .attr('height', size)
    .style('background-color', 'black');
  let width = 50;
  let buildings = svg.selectAll().data(data);
  let currXPos = 0;
  buildings
    .enter()
    .append('rect')
    .attr('width', width)
    .attr('height', (d) => d.height)
    .attr('fill', 'blue')
    .attr('x', (d, i) => {
      let paddingRight = 20;
      if (i == 0) {
        currXPos = paddingRight;
        return currXPos;
      } else {
        currXPos += width + paddingRight;
        return currXPos;
      }
    })
    .attr('y', (d) => size - d.height);
});
