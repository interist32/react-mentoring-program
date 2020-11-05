webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MovieList/MovieList.jsx":
/*!************************************************!*\
  !*** ./src/components/MovieList/MovieList.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MovieCard/MovieCard */ "./src/components/MovieCard/MovieCard.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../propTypes */ "./src/propTypes/index.js");






var MovieList = function MovieList(_ref) {
  var movies = _ref.movies,
      onMovieEditClick = _ref.onMovieEditClick,
      onMovieDeleteClick = _ref.onMovieDeleteClick;
  var movieItems = movies.map(function (movie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: movie.title,
      className: "c-movie-list__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      href: "/film/".concat(movie.id),
      className: "c-movie-list__link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movie: movie,
      onMovieEditClick: onMovieEditClick,
      onMovieDeleteClick: onMovieDeleteClick
    })));
  });
  var movieList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-movie-list"
  }, movieItems);
  var noMovies = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-movie-list__empty"
  }, "No Movie Found");
  return movies.length ? movieList : noMovies;
};

_c = MovieList;
MovieList.propTypes = {
  movies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(_propTypes__WEBPACK_IMPORTED_MODULE_4__["Movie"]),
  onMovieEditClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onMovieDeleteClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieList);

var _c;

$RefreshReg$(_c, "MovieList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0L01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwib25Nb3ZpZUVkaXRDbGljayIsIm9uTW92aWVEZWxldGVDbGljayIsIm1vdmllSXRlbXMiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwiaWQiLCJtb3ZpZUxpc3QiLCJub01vdmllcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJNb3ZpZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUlaO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsZ0JBRUUsUUFGRkEsZ0JBRUU7QUFBQSxNQURGQyxrQkFDRSxRQURGQSxrQkFDRTtBQUVGLE1BQU1DLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLHdCQUMxQjtBQUFJLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxLQUFmO0FBQ0ksZUFBUyxFQUFDO0FBRGQsb0JBRUksMkRBQUMsOENBQUQ7QUFBTSxVQUFJLGtCQUFXRCxLQUFLLENBQUNFLEVBQWpCLENBQVY7QUFBaUMsZUFBUyxFQUFDO0FBQTNDLG9CQUNJLDJEQUFDLDREQUFEO0FBQU0sV0FBSyxFQUFFRixLQUFiO0FBQ0ksc0JBQWdCLEVBQUVKLGdCQUR0QjtBQUVJLHdCQUFrQixFQUFFQztBQUZ4QixNQURKLENBRkosQ0FEMEI7QUFBQSxHQUFYLENBQW5CO0FBWUEsTUFBTU0sU0FBUyxnQkFDWDtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0tMLFVBREwsQ0FESjtBQUtBLE1BQU1NLFFBQVEsZ0JBQ1Y7QUFBSyxhQUFTLEVBQUM7QUFBZixzQkFESjtBQUlBLFNBQ0lULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQkYsU0FBaEIsR0FBNEJDLFFBRGhDO0FBR0gsQ0E5QkQ7O0tBQU1WLFM7QUFnQ05BLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUNsQlgsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxPQUFWLENBQWtCQyxnREFBbEIsQ0FEVTtBQUVsQmIsa0JBQWdCLEVBQUVXLGlEQUFTLENBQUNHLElBQVYsQ0FBZUMsVUFGZjtBQUdsQmQsb0JBQWtCLEVBQUVVLGlEQUFTLENBQUNHLElBQVYsQ0FBZUM7QUFIakIsQ0FBdEI7QUFNZWpCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4YmM2ODNlMmU0OWI4NjcxMTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9Nb3ZpZUNhcmQvTW92aWVDYXJkJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uLy4uL3Byb3BUeXBlcyc7XHJcblxyXG5cclxuY29uc3QgTW92aWVMaXN0ID0gKHtcclxuICAgIG1vdmllcyxcclxuICAgIG9uTW92aWVFZGl0Q2xpY2ssXHJcbiAgICBvbk1vdmllRGVsZXRlQ2xpY2ssXHJcbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUl0ZW1zID0gbW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICA8bGkga2V5PXttb3ZpZS50aXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYy1tb3ZpZS1saXN0X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZmlsbS8ke21vdmllLmlkfWB9IGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdF9fbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW92aWVFZGl0Q2xpY2s9e29uTW92aWVFZGl0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZpZURlbGV0ZUNsaWNrPXtvbk1vdmllRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICkpO1xyXG5cclxuICAgIGNvbnN0IG1vdmllTGlzdCA9IChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYy1tb3ZpZS1saXN0XCI+XHJcbiAgICAgICAgICAgIHttb3ZpZUl0ZW1zfVxyXG4gICAgICAgIDwvdWw+KTtcclxuXHJcbiAgICBjb25zdCBub01vdmllcyA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdF9fZW1wdHlcIj5ObyBNb3ZpZSBGb3VuZDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG1vdmllcy5sZW5ndGggPyBtb3ZpZUxpc3QgOiBub01vdmllc1xyXG4gICAgKTtcclxufTtcclxuXHJcbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllKSxcclxuICAgIG9uTW92aWVFZGl0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbk1vdmllRGVsZXRlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==