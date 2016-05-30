import {Node as node} from './node';

export class Crawler {
  constructor(url,depth){
    this.level = 0;
    this.nodes = [];
    this.depth = depth;
    this.links = [];
    var start = new node(url,0,this.recurse.bind(this));
  }
  recurse(nod){
    let visited = [];
    visited.push(nod);
    while(visited.length>0){
      let visiting = visited.dequeue();
      if(visiting.level > this.depth)
        break;
      for(let i of visiting.children){
        visited.push(new node(i,visiting.level+1,this.recurse.bind(this)))
      }
    }
  }
}


Array.prototype.dequeue = function (){
  return this.splice(0,1)[0];
}

/*
let visit = [];
visit.push(nod)
while(visit.length>0){
  console.log(visit);
  let child = visit.dequeue();
  if(child.level > this.depth){
    break;
  }
  for(let i of child.children){
    visit.push(i);
  }
}
*/
