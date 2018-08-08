import Component from '@ember/component';
import { getProperties, observer } from "@ember/object";
import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { axisBottom, axisLeft } from 'd3-axis';
import { max }  from 'd3-array';

export default Component.extend({
  tagName: 'div',
  classNames: ['bar-chart'],
  width: 0,
  height: 0,
  padding: '100',
  barColor: 'grey',
  data: [],
  didInsertElement() {
    this._super(...arguments);
    this.plotbarchart();
  },
  triggerPlog: observer('height', 'width', 'data', 'barColor', function() {
    let svg = select('svg');
    svg.selectAll("*").remove();
    svg.remove();

    this.plotbarchart();
  }),

  plotbarchart() {
    /*
    data list = the hash will be label and value
    */

    /* bar colors */

    /* widht/height of the container */

    /* sticks */


    let {
      data,
      height,
      width,
      barColor,
      padding
    } = getProperties(this, ['data', 'height', 'width', 'barColor', 'padding']);


    let chart = select('.bar-chart')
                  .append('svg')
                  .attr('class', 'bar-chart')
                  .attr('width', width)
                  .attr('height', height);


    width = width - padding;
    height = height - padding;

    // 2. Plot chart group
     let g = chart.append('g')
                  .attr('transform', "translate("+ padding/2 + "," + padding/2 +")");


    // 3. Plot axis
    let xScale = scaleBand().range([0, width]).padding(0.5),
        yScale = scaleLinear().range([height, 0]);


    //adding domain to scale

    let mappedValues = data.map(function(d) {
        return d.label;
    });

    xScale.domain(mappedValues);

    //Axis
    let xAxis = axisBottom().scale(xScale);

    g.append('g')
        .attr('transform', "translate(0," + height + ")")
        .call(xAxis);


    // Y Axis

    yScale.domain([0, max(data, function(d) { return d.value; })]);

    let yAxis  = axisLeft()
                   .scale(yScale)
                   .tickFormat(function(d){
                       return "Rs."+d;
                   });

    g.append('g').call(yAxis);

    //appding rect bar

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) { return xScale(d.label); })
      .attr('y', function(d) { return yScale(d.value); })
      .attr('fill', barColor)
      .attr('width', xScale.bandwidth())
      .attr('height', function(d) { return height - yScale(d.value); })
  }
});
