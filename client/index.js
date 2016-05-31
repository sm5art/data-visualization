'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import d3 from 'd3';

var nodes;
var links;

$.ajax({
    url: "/list",
    type: "GET",
    dataType : "json",
})
.done(function(json){
  nodes = json[0];
  links = json[1];
  ReactDOM.render(
    <ForceLayout width = {$(window).width()} height = {$(window).height()}/>,
    document.getElementById('root')
  );
});

class ForceLayout extends React.Component {
  componentDidMount() {
    const { width,height } = this.props;

    const force = d3.layout.force()
      .charge(-120)
      .linkDistance(50)
      .size([width,height])
      .nodes(nodes)
      .links(links);

    const svg = d3.select(this.refs.mountPoint)
      .append('svg')
      .attr('width',width)
      .attr('height',height);

    const color = d3.scale.category20();

    const node = svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r',(d)=>{
        return d.view/250000;
      })
      .style('stroke','#FFFFFF')
      .style('stroke-width',1.5)
      .style('fill',(d) => color(d.group));

      const link = svg.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .style('stroke',(d) => color(d.source))
        .style('stroke-width',3)

    force.on('tick', () => {
      node
        .attr('cx',(d) => d.x)
        .attr('cy',(d) => d.y);

      link
        .attr('x1', (d) => {return d.source.x;})
        .attr('y1', (d) => {return d.source.y;})
        .attr('x2', (d) => {return d.target.x;})
        .attr('y2', (d) => {return d.target.y;});

    });

    force.start();
    }
  render() {
    const { width, height } = this.props;
    const style = {
      width,
      height,
      border:'1px solid #323232'
    };

    return <div style={style} ref="mountPoint" />
  }
}
