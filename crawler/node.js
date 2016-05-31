'use strict';

import  request from "request";
import  cheerio from "cheerio";

export class Node{
  constructor(link,level,depth,cb){
    if(level<=depth){
      this.depth = depth;
      this.link = link;
      let that = this;
      request(that.link,(e,r,b)=>{
        if(e){
          console.log(e);
        }
        that.$ = cheerio.load(b);
        that.ViewCount()
        that.getRelatedNodes(cb);
      });
    }
    else{
      cb();
    }
  }

  ViewCount ()  {
    let viewCount = this.$('.watch-view-count').html();
    viewCount = viewCount.replace(/,/g,"");
    this.viewCount = parseInt(viewCount);
  }

  getRelatedNodes(cb) {

    this.children = [];
    let domNodes = this.$(".video-list-item.related-list-item.related-list-item-compact-video");
    let that = this;
    let count = Object.keys(domNodes).length;
    for(const i in Object.keys(domNodes)){
      that.processNode(that.$(domNodes[i]),(node)=>{
        if(node){
          new Node(node,that.level+1,that.depth,(nod)=>{
            that.children.push(nod);
            --count||cb(that);
          });
        }
        else {
          --count||cb(that);
        }


      });
    }
  }

  processNode(node,cb){
    var no = {
      uri: node.find("a.content-link").attr('href')
    }
    if(no.uri)
    cb("http://www.youtube.com"+no.uri);
    else{
      cb(undefined);
    }
  }

}
