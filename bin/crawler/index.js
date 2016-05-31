'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crawler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crawler = exports.Crawler = function () {
  function Crawler(url, depth, cb) {
    _classCallCheck(this, Crawler);

    this.cb = cb;
    this.nodes = [];
    this.links = [];
    var start = new _node.Node(url, 0, depth, this.cycle.bind(this));
  }

  _createClass(Crawler, [{
    key: 'cycle',
    value: function cycle(nod) {
      var node = nod;
      node.parent = 0;
      var queue = [];
      this.nodes.push({
        group: node.link,
        view: node.viewCount
      });
      this.links.push({
        source: 0,
        target: 0
      });
      queue.push(node);
      while (queue.length > 0) {
        var visiting = dequeue(queue);
        var parentpos = this.nodes.length - 1;
        var currentpos = this.nodes.length;
        this.nodes.push({
          group: visiting.link,
          view: visiting.viewCount
        });
        this.links.push({
          source: visiting.parent,
          target: currentpos
        });
        for (var i in visiting.children) {
          visiting.children[i].parent = parentpos;
          queue.push(visiting.children[i]);
        }
        console.log(this.nodes, this.links);
      }
      this.cb(this.nodes, this.links);
    }
  }]);

  return Crawler;
}();

var dequeue = function dequeue(arr) {
  return arr.splice(0, 1)[0];
};