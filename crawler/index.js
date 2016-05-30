import {default as node} from './node';

export default class {
  constructor(url,depth){
    this.depth = depth;
    this.nodes = [];
    this.links = [];
    var start = new node(url,this.recurse.bind(this))
  }
  recurse(nod){
    this.nodes.push({
      group:nod.link,
      views:nod.viewCount
    });
    const sourcePos = this.nodes.length-1;
    const temp = new node(nod.nodes[i],(n)=>{
      this.node.push({
        group:temp.link,
        views:temp.viewCount
      });
      this.links.push({
        source: sourcePos,
        target: this.nodes.length()-1
      });
    }.bind(this));

  }
}
