(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nodes = [];
var links = [];
for (var i = 0; i < 20; i++) {
  nodes.push({ group: String.fromCharCode(i) });
  links.push({ source: i, target: Math.floor(Math.random() * 20) });
}

var ForceLayout = function (_React$Component) {
  _inherits(ForceLayout, _React$Component);

  function ForceLayout() {
    _classCallCheck(this, ForceLayout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ForceLayout).apply(this, arguments));
  }

  _createClass(ForceLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;


      var force = d3.layout.force().charge(-120).linkDistance(50).size([width, height]).nodes(nodes).links(links);

      var svg = d3.select(this.refs.mountPoint).append('svg').attr('width', width).attr('height', height);

      var color = d3.scale.category20();

      var node = svg.selectAll('circle').data(nodes).enter().append('circle').attr('r', function (d) {
        return d.group.charCodeAt(0);
      }).style('stroke', '#FFFFFF').style('stroke-width', 1.5).style('fill', function (d) {
        return color(d.group);
      });

      var link = svg.selectAll('line').data(links).enter().append('line').style('stroke', function (d) {
        return color(d.source);
      }).style('stroke-width', 3);

      force.on('tick', function () {
        node.attr('cx', function (d) {
          return d.x;
        }).attr('cy', function (d) {
          return d.y;
        });

        link.attr('x1', function (d) {
          return d.source.x;
        }).attr('y1', function (d) {
          return d.source.y;
        }).attr('x2', function (d) {
          return d.target.x;
        }).attr('y2', function (d) {
          return d.target.y;
        });
      });

      force.start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;

      var style = {
        width: width,
        height: height,
        border: '1px solid #323232'
      };

      return React.createElement('div', { style: style, ref: 'mountPoint' });
    }
  }]);

  return ForceLayout;
}(React.Component);

ReactDOM.render(React.createElement(ForceLayout, { width: $(window).width(), height: $(window).height() }), document.getElementById('root'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7OztBQUVBLElBQUksUUFBUSxFQUFaO0FBQ0EsSUFBSSxRQUFRLEVBQVo7QUFDQSxLQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxFQUFuQixFQUF1QixHQUF2QixFQUEyQjtBQUN2QixRQUFNLElBQU4sQ0FBVyxFQUFDLE9BQU0sT0FBTyxZQUFQLENBQW9CLENBQXBCLENBQVAsRUFBWDtBQUNBLFFBQU0sSUFBTixDQUFXLEVBQUMsUUFBTyxDQUFSLEVBQVUsUUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxFQUF6QixDQUFqQixFQUFYO0FBQ0g7O0lBS0ssVzs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUEsbUJBQ08sS0FBSyxLQURaO0FBQUEsVUFDVixLQURVLFVBQ1YsS0FEVTtBQUFBLFVBQ0osTUFESSxVQUNKLE1BREk7OztBQUdsQixVQUFNLFFBQVEsR0FBRyxNQUFILENBQVUsS0FBVixHQUNYLE1BRFcsQ0FDSixDQUFDLEdBREcsRUFFWCxZQUZXLENBRUUsRUFGRixFQUdYLElBSFcsQ0FHTixDQUFDLEtBQUQsRUFBTyxNQUFQLENBSE0sRUFJWCxLQUpXLENBSUwsS0FKSyxFQUtYLEtBTFcsQ0FLTCxLQUxLLENBQWQ7O0FBT0EsVUFBTSxNQUFNLEdBQUcsTUFBSCxDQUFVLEtBQUssSUFBTCxDQUFVLFVBQXBCLEVBQ1QsTUFEUyxDQUNGLEtBREUsRUFFVCxJQUZTLENBRUosT0FGSSxFQUVJLEtBRkosRUFHVCxJQUhTLENBR0osUUFISSxFQUdLLE1BSEwsQ0FBWjs7QUFLQSxVQUFNLFFBQVEsR0FBRyxLQUFILENBQVMsVUFBVCxFQUFkOztBQUVBLFVBQU0sT0FBTyxJQUFJLFNBQUosQ0FBYyxRQUFkLEVBQ1YsSUFEVSxDQUNMLEtBREssRUFFVixLQUZVLEdBR1YsTUFIVSxDQUdILFFBSEcsRUFJVixJQUpVLENBSUwsR0FKSyxFQUlELFVBQUMsQ0FBRCxFQUFLO0FBQ2IsZUFBTyxFQUFFLEtBQUYsQ0FBUSxVQUFSLENBQW1CLENBQW5CLENBQVA7QUFDRCxPQU5VLEVBT1YsS0FQVSxDQU9KLFFBUEksRUFPSyxTQVBMLEVBUVYsS0FSVSxDQVFKLGNBUkksRUFRVyxHQVJYLEVBU1YsS0FUVSxDQVNKLE1BVEksRUFTRyxVQUFDLENBQUQ7QUFBQSxlQUFPLE1BQU0sRUFBRSxLQUFSLENBQVA7QUFBQSxPQVRILENBQWI7O0FBV0UsVUFBTSxPQUFPLElBQUksU0FBSixDQUFjLE1BQWQsRUFDVixJQURVLENBQ0wsS0FESyxFQUVWLEtBRlUsR0FHVixNQUhVLENBR0gsTUFIRyxFQUlWLEtBSlUsQ0FJSixRQUpJLEVBSUssVUFBQyxDQUFEO0FBQUEsZUFBTyxNQUFNLEVBQUUsTUFBUixDQUFQO0FBQUEsT0FKTCxFQUtWLEtBTFUsQ0FLSixjQUxJLEVBS1csQ0FMWCxDQUFiOztBQU9GLFlBQU0sRUFBTixDQUFTLE1BQVQsRUFBaUIsWUFBTTtBQUNyQixhQUNHLElBREgsQ0FDUSxJQURSLEVBQ2EsVUFBQyxDQUFEO0FBQUEsaUJBQU8sRUFBRSxDQUFUO0FBQUEsU0FEYixFQUVHLElBRkgsQ0FFUSxJQUZSLEVBRWEsVUFBQyxDQUFEO0FBQUEsaUJBQU8sRUFBRSxDQUFUO0FBQUEsU0FGYjs7QUFJQSxhQUNHLElBREgsQ0FDUSxJQURSLEVBQ2MsVUFBQyxDQUFELEVBQU87QUFBQyxpQkFBTyxFQUFFLE1BQUYsQ0FBUyxDQUFoQjtBQUFtQixTQUR6QyxFQUVHLElBRkgsQ0FFUSxJQUZSLEVBRWMsVUFBQyxDQUFELEVBQU87QUFBQyxpQkFBTyxFQUFFLE1BQUYsQ0FBUyxDQUFoQjtBQUFtQixTQUZ6QyxFQUdHLElBSEgsQ0FHUSxJQUhSLEVBR2MsVUFBQyxDQUFELEVBQU87QUFBQyxpQkFBTyxFQUFFLE1BQUYsQ0FBUyxDQUFoQjtBQUFtQixTQUh6QyxFQUlHLElBSkgsQ0FJUSxJQUpSLEVBSWMsVUFBQyxDQUFELEVBQU87QUFBQyxpQkFBTyxFQUFFLE1BQUYsQ0FBUyxDQUFoQjtBQUFtQixTQUp6QztBQU1ELE9BWEQ7O0FBYUEsWUFBTSxLQUFOO0FBQ0M7Ozs2QkFDTTtBQUFBLG9CQUNtQixLQUFLLEtBRHhCO0FBQUEsVUFDQyxLQURELFdBQ0MsS0FERDtBQUFBLFVBQ1EsTUFEUixXQUNRLE1BRFI7O0FBRVAsVUFBTSxRQUFRO0FBQ1osb0JBRFk7QUFFWixzQkFGWTtBQUdaLGdCQUFPO0FBSEssT0FBZDs7QUFNQSxhQUFPLDZCQUFLLE9BQU8sS0FBWixFQUFtQixLQUFJLFlBQXZCLEdBQVA7QUFDRDs7OztFQTVEdUIsTUFBTSxTOztBQStEaEMsU0FBUyxNQUFULENBQ0Usb0JBQUMsV0FBRCxJQUFhLE9BQVMsRUFBRSxNQUFGLEVBQVUsS0FBVixFQUF0QixFQUF5QyxRQUFVLEVBQUUsTUFBRixFQUFVLE1BQVYsRUFBbkQsR0FERixFQUVFLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubGV0IG5vZGVzID0gW107XG5sZXQgbGlua3MgPSBbXTtcbmZvcih2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKXtcbiAgICBub2Rlcy5wdXNoKHtncm91cDpTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfSlcbiAgICBsaW5rcy5wdXNoKHtzb3VyY2U6aSx0YXJnZXQ6TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKX0pXG59XG5cblxuXG5cbmNsYXNzIEZvcmNlTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB3aWR0aCxoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBmb3JjZSA9IGQzLmxheW91dC5mb3JjZSgpXG4gICAgICAuY2hhcmdlKC0xMjApXG4gICAgICAubGlua0Rpc3RhbmNlKDUwKVxuICAgICAgLnNpemUoW3dpZHRoLGhlaWdodF0pXG4gICAgICAubm9kZXMobm9kZXMpXG4gICAgICAubGlua3MobGlua3MpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHRoaXMucmVmcy5tb3VudFBvaW50KVxuICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JyxoZWlnaHQpO1xuXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZS5jYXRlZ29yeTIwKCk7XG5cbiAgICBjb25zdCBub2RlID0gc3ZnLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgIC5kYXRhKG5vZGVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cigncicsKGQpPT57XG4gICAgICAgIHJldHVybiBkLmdyb3VwLmNoYXJDb2RlQXQoMCk7XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCcjRkZGRkZGJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywxLjUpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLChkKSA9PiBjb2xvcihkLmdyb3VwKSk7XG5cbiAgICAgIGNvbnN0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgICAgLmRhdGEobGlua3MpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsKGQpID0+IGNvbG9yKGQuc291cmNlKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLDMpXG5cbiAgICBmb3JjZS5vbigndGljaycsICgpID0+IHtcbiAgICAgIG5vZGVcbiAgICAgICAgLmF0dHIoJ2N4JywoZCkgPT4gZC54KVxuICAgICAgICAuYXR0cignY3knLChkKSA9PiBkLnkpO1xuXG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIChkKSA9PiB7cmV0dXJuIGQuc291cmNlLng7fSlcbiAgICAgICAgLmF0dHIoJ3kxJywgKGQpID0+IHtyZXR1cm4gZC5zb3VyY2UueTt9KVxuICAgICAgICAuYXR0cigneDInLCAoZCkgPT4ge3JldHVybiBkLnRhcmdldC54O30pXG4gICAgICAgIC5hdHRyKCd5MicsIChkKSA9PiB7cmV0dXJuIGQudGFyZ2V0Lnk7fSk7XG5cbiAgICB9KTtcblxuICAgIGZvcmNlLnN0YXJ0KCk7XG4gICAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBib3JkZXI6JzFweCBzb2xpZCAjMzIzMjMyJ1xuICAgIH07XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IHJlZj1cIm1vdW50UG9pbnRcIiAvPlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEZvcmNlTGF5b3V0IHdpZHRoID0geyQod2luZG93KS53aWR0aCgpfSBoZWlnaHQgPSB7JCh3aW5kb3cpLmhlaWdodCgpfS8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl19
