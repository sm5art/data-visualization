'use strict';

import {default as crawler, Queue} from "../crawler";
import {default as node} from "../crawler/node";

//const a = new crawler  ("https://www.youtube.com/watch?v=7qXSSQNS5VM",1);

let a = [];
a.push(2)
a.push(5)
a.push(7)
console.log(a)
console.log(a.dequeue(),a)
console.log(a.dequeue(),a)
