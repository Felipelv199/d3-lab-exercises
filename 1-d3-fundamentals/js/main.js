/*
 *    main.js
 */
var svg = d3
  .select('#chart-area')
  .append('svg')
  .attr('width', 400)
  .attr('height', 400)
  .style('background-color', 'black');
svg
  .append('circle')
  .attr('cx', 150 + 100 / 2)
  .attr('cy', 150 + 100 / 2)
  .attr('r', 150)
  .attr('fill', 'red');
svg
  .append('rect')
  .attr('x', 0)
  .attr('y', 400 / 2 - 75 / 2)
  .attr('rx', 10)
  .attr('width', 400)
  .attr('height', 75)
  .attr('fill', 'red');
svg
  .append('rect')
  .attr('x', 400 / 2 - 75 / 2)
  .attr('y', 0)
  .attr('rx', 10)
  .attr('width', 75)
  .attr('height', 400)
  .attr('fill', 'red');
svg
  .append('rect')
  .attr('x', 400 / 2 - 75 / 2)
  .attr('y', 0)
  .attr('rx', 10)
  .attr('transform', 'rotate(45)')
  .attr('transform-origin', 'center')
  .attr('width', 75)
  .attr('height', 400)
  .attr('fill', 'red');
svg
  .append('rect')
  .attr('x', 400 / 2 - 75 / 2)
  .attr('y', 0)
  .attr('rx', 10)
  .attr('transform', 'rotate(-45)')
  .attr('transform-origin', 'center')
  .attr('width', 75)
  .attr('height', 400)
  .attr('fill', 'red');
svg
  .append('circle')
  .attr('cx', 150 + 100 / 2)
  .attr('cy', 150 + 100 / 2)
  .attr('r', 95)
  .attr('fill', 'black');
