import {Node as node} from './node';

export class Crawler {
  constructor(url,depth,cb){
    this.cb = cb;
    this.level = 0;
    this.nodes = [];
    this.depth = depth;
    this.count = depth-1;
    this.links = [];
    this.parents = []
    var start = new node(url,0,0,this.recurse.bind(this));
  }
  recurse(nod){
    let visited = [];
    let that = this;
    visited.push(nod);
    let visiting = dequeue(visited);
    let parent = {
      group:nod.link,
      views:nod.viewCount
    };
    this.nodes[visiting.level] = parent;
    this.links.push({source:nod.parent,target:visiting.level});
    if(visiting.level < this.depth-1){
      for(let i in visiting.children){
        const x = new node(visiting.children[i].url,visiting.level+1,visiting.level,that.recurse.bind(that));
      }
    }
    else if(visiting.level < this.depth){
      let count = visiting.children.length;
      for(let i in visiting.children){
        const x = new node(visiting.children[i].url,visiting.level+1,visiting.level,(node)=>{
          that.nodes.push({
            group:node.link,
            views:node.viewCount
          })
          that.links.push({source:visiting.level,target:that.nodes.length -1});
          --count||this.cb(that.nodes,that.links);
        });
      }
    }
  }
}


const dequeue = function (arr){
  return arr.splice(0,1)[0];
}
