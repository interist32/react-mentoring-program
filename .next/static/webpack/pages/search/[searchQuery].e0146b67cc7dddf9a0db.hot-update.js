webpackHotUpdate_N_E("pages/search/[searchQuery]",{

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
  debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0L01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwib25Nb3ZpZUVkaXRDbGljayIsIm9uTW92aWVEZWxldGVDbGljayIsIm1vdmllSXRlbXMiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwiaWQiLCJtb3ZpZUxpc3QiLCJub01vdmllcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJNb3ZpZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUlaO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsZ0JBRUUsUUFGRkEsZ0JBRUU7QUFBQSxNQURGQyxrQkFDRSxRQURGQSxrQkFDRTtBQUVGO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsd0JBQzFCO0FBQUksU0FBRyxFQUFFQSxLQUFLLENBQUNDLEtBQWY7QUFDSSxlQUFTLEVBQUM7QUFEZCxvQkFFSSwyREFBQyw4Q0FBRDtBQUFNLFVBQUksa0JBQVdELEtBQUssQ0FBQ0UsRUFBakIsQ0FBVjtBQUFpQyxlQUFTLEVBQUM7QUFBM0Msb0JBQ0ksMkRBQUMsNERBQUQ7QUFBTSxXQUFLLEVBQUVGLEtBQWI7QUFDSSxzQkFBZ0IsRUFBRUosZ0JBRHRCO0FBRUksd0JBQWtCLEVBQUVDO0FBRnhCLE1BREosQ0FGSixDQUQwQjtBQUFBLEdBQVgsQ0FBbkI7QUFZQSxNQUFNTSxTQUFTLGdCQUNYO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDS0wsVUFETCxDQURKO0FBS0EsTUFBTU0sUUFBUSxnQkFDVjtBQUFLLGFBQVMsRUFBQztBQUFmLHNCQURKO0FBSUEsU0FDSVQsTUFBTSxDQUFDVSxNQUFQLEdBQWdCRixTQUFoQixHQUE0QkMsUUFEaEM7QUFHSCxDQS9CRDs7S0FBTVYsUztBQWlDTkEsU0FBUyxDQUFDWSxTQUFWLEdBQXNCO0FBQ2xCWCxRQUFNLEVBQUVZLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDLGdEQUFsQixDQURVO0FBRWxCYixrQkFBZ0IsRUFBRVcsaURBQVMsQ0FBQ0csSUFBVixDQUFlQyxVQUZmO0FBR2xCZCxvQkFBa0IsRUFBRVUsaURBQVMsQ0FBQ0csSUFBVixDQUFlQztBQUhqQixDQUF0QjtBQU1lakIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2hRdWVyeV0uZTAxNDZiNjdjYzdkZGRmOWEwZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL01vdmllQ2FyZC9Nb3ZpZUNhcmQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IE1vdmllIH0gZnJvbSAnLi4vLi4vcHJvcFR5cGVzJztcclxuXHJcblxyXG5jb25zdCBNb3ZpZUxpc3QgPSAoe1xyXG4gICAgbW92aWVzLFxyXG4gICAgb25Nb3ZpZUVkaXRDbGljayxcclxuICAgIG9uTW92aWVEZWxldGVDbGljayxcclxufSkgPT4ge1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgY29uc3QgbW92aWVJdGVtcyA9IG1vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2ZpbG0vJHttb3ZpZS5pZH1gfSBjbGFzc05hbWU9XCJjLW1vdmllLWxpc3RfX2xpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdmllRWRpdENsaWNrPXtvbk1vdmllRWRpdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW92aWVEZWxldGVDbGljaz17b25Nb3ZpZURlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUxpc3QgPSAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bW92aWVJdGVtc31cclxuICAgICAgICA8L3VsPik7XHJcblxyXG4gICAgY29uc3Qgbm9Nb3ZpZXMgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLW1vdmllLWxpc3RfX2VtcHR5XCI+Tm8gTW92aWUgRm91bmQ8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBtb3ZpZXMubGVuZ3RoID8gbW92aWVMaXN0IDogbm9Nb3ZpZXNcclxuICAgICk7XHJcbn07XHJcblxyXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZSksXHJcbiAgICBvbk1vdmllRWRpdENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Nb3ZpZURlbGV0ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=