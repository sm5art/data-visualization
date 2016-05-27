'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

let nodes = [];
let links = [];
for(var i = 0; i < 20; i++){
    nodes.push({group:String.fromCharCode(i)})
    links.push({source:i,target:Math.floor(Math.random()*20)})
}




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
      .attr('r',15)
      .style('stroke','#FFFFFF')
      .style('stroke-width',1.5)
      .style('fill',(d) => color(d.group))

    force.on('tick', () => {
      node
      .attr('cx',(d) => d.x)
      .attr('cy',(d) => d.y)

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

ReactDOM.render(
  <ForceLayout width = {$(window).width()} height = {$(window).height()}/>,
  document.getElementById('root')
);
