webpackHotUpdate_N_E("pages/film/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0L01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwib25Nb3ZpZUVkaXRDbGljayIsIm9uTW92aWVEZWxldGVDbGljayIsIm1vdmllSXRlbXMiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwiaWQiLCJtb3ZpZUxpc3QiLCJub01vdmllcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJNb3ZpZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUlaO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsZ0JBRUUsUUFGRkEsZ0JBRUU7QUFBQSxNQURGQyxrQkFDRSxRQURGQSxrQkFDRTtBQUVGLE1BQU1DLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLHdCQUMxQjtBQUFJLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxLQUFmO0FBQ0ksZUFBUyxFQUFDO0FBRGQsb0JBRUksMkRBQUMsOENBQUQ7QUFBTSxVQUFJLGtCQUFXRCxLQUFLLENBQUNFLEVBQWpCLENBQVY7QUFBaUMsZUFBUyxFQUFDO0FBQTNDLG9CQUNJLDJEQUFDLDREQUFEO0FBQU0sV0FBSyxFQUFFRixLQUFiO0FBQ0ksc0JBQWdCLEVBQUVKLGdCQUR0QjtBQUVJLHdCQUFrQixFQUFFQztBQUZ4QixNQURKLENBRkosQ0FEMEI7QUFBQSxHQUFYLENBQW5CO0FBWUEsTUFBTU0sU0FBUyxnQkFDWDtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0tMLFVBREwsQ0FESjtBQUtBLE1BQU1NLFFBQVEsZ0JBQ1Y7QUFBSyxhQUFTLEVBQUM7QUFBZixzQkFESjtBQUlBLFNBQ0lULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQkYsU0FBaEIsR0FBNEJDLFFBRGhDO0FBR0gsQ0E5QkQ7O0tBQU1WLFM7QUFnQ05BLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUNsQlgsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxPQUFWLENBQWtCQyxnREFBbEIsQ0FEVTtBQUVsQmIsa0JBQWdCLEVBQUVXLGlEQUFTLENBQUNHLElBQVYsQ0FBZUMsVUFGZjtBQUdsQmQsb0JBQWtCLEVBQUVVLGlEQUFTLENBQUNHLElBQVYsQ0FBZUM7QUFIakIsQ0FBdEI7QUFNZWpCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbG0vW2lkXS45OGJjNjgzZTJlNDliODY3MTE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vTW92aWVDYXJkL01vdmllQ2FyZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi8uLi9wcm9wVHlwZXMnO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllTGlzdCA9ICh7XHJcbiAgICBtb3ZpZXMsXHJcbiAgICBvbk1vdmllRWRpdENsaWNrLFxyXG4gICAgb25Nb3ZpZURlbGV0ZUNsaWNrLFxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbW92aWVJdGVtcyA9IG1vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2ZpbG0vJHttb3ZpZS5pZH1gfSBjbGFzc05hbWU9XCJjLW1vdmllLWxpc3RfX2xpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdmllRWRpdENsaWNrPXtvbk1vdmllRWRpdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW92aWVEZWxldGVDbGljaz17b25Nb3ZpZURlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUxpc3QgPSAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bW92aWVJdGVtc31cclxuICAgICAgICA8L3VsPik7XHJcblxyXG4gICAgY29uc3Qgbm9Nb3ZpZXMgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLW1vdmllLWxpc3RfX2VtcHR5XCI+Tm8gTW92aWUgRm91bmQ8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBtb3ZpZXMubGVuZ3RoID8gbW92aWVMaXN0IDogbm9Nb3ZpZXNcclxuICAgICk7XHJcbn07XHJcblxyXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZSksXHJcbiAgICBvbk1vdmllRWRpdENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Nb3ZpZURlbGV0ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=