'use strict';

import {Crawler} from "../crawler";
import {Node} from "../crawler/node";

const a = new Node("http://www.youtube.com/watch?v=7qXSSQNS5VM",0,2,(node)=>{
  console.log(node);
});
