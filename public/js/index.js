'use strict';

import * as React from "react";
import * as ReactDOM from 'react-dom';
import * as d3 from 'd3';

const nodes = [{ group: "a" }, { group: "b" }, { group: "c" }];
const links = [{ source: "a", target: "b" }, { source: "b", target: "c" }, { source: "a", target: "c" }];

class ForceLayout extends React.Component {
  componentDidMount() {
    const { width, height } = this.props;

    const force = d3.layout.force().charge(-120).linkDistance(50).size([width, height]).nodes(nodes).links(links);

    const svg = d3.select(this.refs.mountPoint).append('svg').attr('width', width).attr('height', height);

    const color = d3.scale.category20();

    const node = svg.selectAll('circle').data(nodes).enter().append('circle').attr('r', 5).style('stroke', '#FFFFFF').style('stroke-width', 1.5).style('fill', d => color(d.group));

    force.on('tick', () => {
      node.attr('cx', d => d.x).attr('cy', d => d.y);
    });

    force.start();
  }
  render() {
    const { width, height } = this.props;
    const style = {
      width,
      height,
      border: '1px solid #323232'
    };

    return React.createElement("div", { style: style, ref: "mountPoint" });
  }
}

ReactDOM.render(React.createElement(ForceLayout, { width: 300, height: 300 }), document.querySelector('#root'));