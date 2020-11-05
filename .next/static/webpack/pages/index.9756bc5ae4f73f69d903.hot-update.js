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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movie: movie,
      onMovieEditClick: onMovieEditClick,
      onMovieDeleteClick: onMovieDeleteClick
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVMaXN0L01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwib25Nb3ZpZUVkaXRDbGljayIsIm9uTW92aWVEZWxldGVDbGljayIsIm1vdmllSXRlbXMiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwibW92aWVMaXN0Iiwibm9Nb3ZpZXMiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiTW92aWUiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FJWjtBQUFBLE1BSEZDLE1BR0UsUUFIRkEsTUFHRTtBQUFBLE1BRkZDLGdCQUVFLFFBRkZBLGdCQUVFO0FBQUEsTUFERkMsa0JBQ0UsUUFERkEsa0JBQ0U7QUFFRixNQUFNQyxVQUFVLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSx3QkFDMUI7QUFBSSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsS0FBZjtBQUNJLGVBQVMsRUFBQztBQURkLG9CQUdJLDJEQUFDLDREQUFEO0FBQU0sV0FBSyxFQUFFRCxLQUFiO0FBQ0ksc0JBQWdCLEVBQUVKLGdCQUR0QjtBQUVJLHdCQUFrQixFQUFFQztBQUZ4QixNQUhKLENBRDBCO0FBQUEsR0FBWCxDQUFuQjtBQVlBLE1BQU1LLFNBQVMsZ0JBQ1g7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNLSixVQURMLENBREo7QUFLQSxNQUFNSyxRQUFRLGdCQUNWO0FBQUssYUFBUyxFQUFDO0FBQWYsc0JBREo7QUFJQSxTQUNJUixNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLFNBQWhCLEdBQTRCQyxRQURoQztBQUdILENBOUJEOztLQUFNVCxTO0FBZ0NOQSxTQUFTLENBQUNXLFNBQVYsR0FBc0I7QUFDbEJWLFFBQU0sRUFBRVcsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsZ0RBQWxCLENBRFU7QUFFbEJaLGtCQUFnQixFQUFFVSxpREFBUyxDQUFDRyxJQUFWLENBQWVDLFVBRmY7QUFHbEJiLG9CQUFrQixFQUFFUyxpREFBUyxDQUFDRyxJQUFWLENBQWVDO0FBSGpCLENBQXRCO0FBTWVoQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NzU2YmM1YWU0ZjczZjY5ZDkwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vTW92aWVDYXJkL01vdmllQ2FyZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi8uLi9wcm9wVHlwZXMnO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllTGlzdCA9ICh7XHJcbiAgICBtb3ZpZXMsXHJcbiAgICBvbk1vdmllRWRpdENsaWNrLFxyXG4gICAgb25Nb3ZpZURlbGV0ZUNsaWNrLFxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbW92aWVJdGVtcyA9IG1vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdF9faXRlbVwiPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9maWxtLyR7bW92aWUuaWR9YH0gY2xhc3NOYW1lPVwiYy1tb3ZpZS1saXN0X19saW5rXCI+ICovfVxyXG4gICAgICAgICAgICA8Q2FyZCBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdmllRWRpdENsaWNrPXtvbk1vdmllRWRpdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgb25Nb3ZpZURlbGV0ZUNsaWNrPXtvbk1vdmllRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUxpc3QgPSAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImMtbW92aWUtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bW92aWVJdGVtc31cclxuICAgICAgICA8L3VsPik7XHJcblxyXG4gICAgY29uc3Qgbm9Nb3ZpZXMgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLW1vdmllLWxpc3RfX2VtcHR5XCI+Tm8gTW92aWUgRm91bmQ8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBtb3ZpZXMubGVuZ3RoID8gbW92aWVMaXN0IDogbm9Nb3ZpZXNcclxuICAgICk7XHJcbn07XHJcblxyXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZSksXHJcbiAgICBvbk1vdmllRWRpdENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Nb3ZpZURlbGV0ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=