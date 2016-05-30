'use strict';

import  request from "request";
import  cheerio from "cheerio";


export default class {
  constructor(link,cb){
    this.link = link;
    let that = this;
    request(this.link,(e,r,b)=>{
      if(e){
        console.log(e);
      }
      console.log(b);
      this.$ = cheerio.load(b);
      this.ViewCount()
      this.getRelatedNodes();
      cb(this);
    });
  }

  ViewCount ()  {
    let viewCount = this.$('.watch-view-count').html();
    viewCount = viewCount.replace(/,/g,"");
    console.log(viewCount);
    this.viewCount = parseInt(viewCount);
  }

  getRelatedNodes() {
    this.nodes = [];
    const domNodes = this.$(".video-list-item.related-list-item.related-list-item-compact-video");
    let that = this;
    for(var i in Object.keys(domNodes)){
      this.processNode(this.$(domNodes[i]),(node)=>{
          that.nodes.push(node);
      });
    }

  }

  processNode(node,cb){
    var no = {
      uri: node.find("a.content-link").attr('href')
    }
    if(no.uri)
    cb("https:www.//youtube.com"+no.uri);
  }

}
