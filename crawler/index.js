import {Node as node} from './node';

export class Crawler {
  constructor(url,depth,cb){
    this.cb = cb;
    this.nodes = [];
    this.links = [];
    var start = new node(url,0,depth,this.cycle.bind(this));
  }
  cycle(nod){
    let node = nod;
    node.parent = 0;
    let queue = [];
    this.nodes.push({
      group:node.link,
      view:node.viewCount
    });
    this.links.push({
      source:0,
      target:0
    });
    queue.push(node);
    while(queue.length>0){
      const visiting = dequeue(queue);
      const parentpos = this.nodes.length-1;
      const currentpos = this.nodes.length;
      this.nodes.push({
        group:visiting.link,
        view:visiting.viewCount
      });
      this.links.push({
        source:visiting.parent,
        target: currentpos
      })
      for(const i in visiting.children){
        visiting.children[i].parent = parentpos;
        queue.push(visiting.children[i])
      }
      console.log(this.nodes,this.links)
    }
    this.cb(this.nodes,this.links)
  }
}


const dequeue = function (arr){
  return arr.splice(0,1)[0];
}
