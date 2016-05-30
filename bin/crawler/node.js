'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = exports.Node = function () {
  function Node(link, level, cb) {
    _classCallCheck(this, Node);

    this.level = level;
    this.link = link;
    var that = this;
    (0, _request2.default)(that.link, function (e, r, b) {
      if (e) {
        console.log(e);
      }
      that.$ = _cheerio2.default.load(b);
      that.ViewCount();
      that.getRelatedNodes(cb);
    });
  }

  _createClass(Node, [{
    key: "ViewCount",
    value: function ViewCount() {
      var viewCount = this.$('.watch-view-count').html();
      viewCount = viewCount.replace(/,/g, "");
      this.viewCount = parseInt(viewCount);
    }
  }, {
    key: "getRelatedNodes",
    value: function getRelatedNodes(cb) {
      this.children = [];
      var domNodes = this.$(".video-list-item.related-list-item.related-list-item-compact-video");
      var that = this;
      var count = Object.keys(domNodes).length;
      for (var i in Object.keys(domNodes)) {
        that.processNode(that.$(domNodes[i]), function (node) {
          if (node) {
            that.children.push(node);
            --count || cb(that);
          } else --count || cb(that);
        });
      }
    }
  }, {
    key: "processNode",
    value: function processNode(node, cb) {
      var no = {
        uri: node.find("a.content-link").attr('href')
      };
      if (no.uri) cb("https://www.youtube.com" + no.uri);else {
        cb(undefined);
      }
    }
  }]);

  return Node;
}();