import {default as node} from './node';

export default class {
  constructor(url,depth){
    this.level = 0;
    this.depth = depth;
    this.nodes = [];
    this.links = [];
    this.queue = new Queue();
    var start = new node(url,this.recurse.bind(this))
  }
  recurse(nod){
    if(this.level>=this.depth)
      return;
    this.nodes.push({
      group:nod.link,
      views:nod.viewCount
    });
    this.level += 1;
    const sourcePos = this.nodes.length-1;
    for(let i in nod.nodes){
      const temp = new node(nod.nodes[i],((n)=>{
        this.node.push({
          group:temp.link,
          views:temp.viewCount
        });
        this.links.push({
          source: sourcePos,
          target: this.nodes.length()-1
        });
        recurse.bind(this)(n);
      }).bind(this));
    }
  }
}

Array.prototype.dequeue = function (){
  return this.splice(0,1)[0];
}
