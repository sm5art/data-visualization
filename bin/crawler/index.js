'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crawler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = require('./node');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crawler = exports.Crawler = function () {
  function Crawler(url, depth) {
    _classCallCheck(this, Crawler);

    this.level = 0;
    this.nodes = [];
    this.depth = depth;
    this.links = [];
    var start = new _node.Node(url, 0, this.recurse.bind(this));
  }

  _createClass(Crawler, [{
    key: 'recurse',
    value: function recurse(nod) {
      var visited = [];
      visited.push(nod);
      while (visited.length > 0) {
        console.log(visited);
        var visiting = visited.dequeue();
        if (visiting.level > this.depth) break;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = visiting.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            visited.push(new _node.Node(i, visiting.level + 1, this.recurse.bind(this)));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }]);

  return Crawler;
}();

Array.prototype.dequeue = function () {
  return this.splice(0, 1)[0];
};

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