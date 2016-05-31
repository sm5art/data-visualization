'use strict';

import {Crawler} from "../crawler";
import {Node} from "../crawler/node";

const a = new Crawler("http://www.youtube.com/watch?v=7qXSSQNS5VM",2,(nodes,links)=>{
  console.log(nodes,links);
});
