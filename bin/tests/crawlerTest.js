'use strict';

var _crawler = require("../crawler");

var _node = require("../crawler/node");

var a = new _crawler.Crawler("http://www.youtube.com/watch?v=7qXSSQNS5VM", 2, function (nodes, links) {
  console.log(nodes, links);
});