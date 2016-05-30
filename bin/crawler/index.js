'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(link, cb) {
    var _this = this;

    _classCallCheck(this, _class);

    this.link = link;
    var that = this;
    (0, _request2.default)(this.link, function (e, r, b) {
      if (e) {
        console.log(e);
        sys.exit();
      }
      _this.$ = _cheerio2.default.load(b);
      _this.ViewCount();
      _this.getRelatedNodes();
      cb(_this);
    });
  }

  _createClass(_class, [{
    key: "ViewCount",
    value: function ViewCount() {
      var viewCount = this.$('.watch-view-count').html();
      this.viewCount = viewCount;
    }
  }, {
    key: "getRelatedNodes",
    value: function getRelatedNodes() {
      var nodes = [];

      var domNodes = this.$(".video-list-item.related-list-item.related-list-item-compact-video");
      for (var i in Object.keys(domNodes)) {
        this.processNode(this.$(domNodes[i]), function (node) {
          console.log(node);
        });
      }
    }
  }, {
    key: "processNode",
    value: function processNode(node, cb) {
      var no = {
        uri: node.find("a.content-link").attr('href')
      };
      cb(no);
    }
  }]);

  return _class;
}();

exports.default = _class;
