webpackHotUpdate_N_E("pages/search/[searchQuery]",{

/***/ "./src/containers/Home/MovieDetails.jsx":
/*!**********************************************!*\
  !*** ./src/containers/Home/MovieDetails.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../propTypes */ "./src/propTypes/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_selectors_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/movies */ "./src/store/selectors/movies.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();







var MovieDetails = function MovieDetails(_ref) {
  _s();

  var selectMovie = _ref.selectMovie;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var movieId = router.query.id;

  var _selectMovie = selectMovie(movieId),
      posterPath = _selectMovie.posterPath,
      title = _selectMovie.title,
      genres = _selectMovie.genres,
      releaseDate = _selectMovie.releaseDate,
      overview = _selectMovie.overview,
      tagline = _selectMovie.tagline;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: posterPath,
    alt: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "tp-header"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__genre"
  }, tagline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__genre"
  }, genres.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__release"
  }, releaseDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-movie-details__description"
  }, overview))));
};

_s(MovieDetails, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = MovieDetails;
MovieDetails.propTypes = {
  movie: _propTypes__WEBPACK_IMPORTED_MODULE_1__["Movie"]
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    selectMovie: function selectMovie(movieId) {
      return _store_selectors_movies__WEBPACK_IMPORTED_MODULE_3__["selectedMovie"](state, movieId);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MovieDetails));

var _c;

$RefreshReg$(_c, "MovieDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9Nb3ZpZURldGFpbHMuanN4Il0sIm5hbWVzIjpbIk1vdmllRGV0YWlscyIsInNlbGVjdE1vdmllIiwicm91dGVyIiwidXNlUm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwiaWQiLCJwb3N0ZXJQYXRoIiwidGl0bGUiLCJnZW5yZXMiLCJyZWxlYXNlRGF0ZSIsIm92ZXJ2aWV3IiwidGFnbGluZSIsImpvaW4iLCJwcm9wVHlwZXMiLCJtb3ZpZSIsIk1vdmllIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsIm1vdmllc1NlbGVjdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDdEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQTdCOztBQUZzQyxxQkFHZ0NMLFdBQVcsQ0FBQ0csT0FBRCxDQUgzQztBQUFBLE1BRzlCRyxVQUg4QixnQkFHOUJBLFVBSDhCO0FBQUEsTUFHbEJDLEtBSGtCLGdCQUdsQkEsS0FIa0I7QUFBQSxNQUdYQyxNQUhXLGdCQUdYQSxNQUhXO0FBQUEsTUFHSEMsV0FIRyxnQkFHSEEsV0FIRztBQUFBLE1BR1VDLFFBSFYsZ0JBR1VBLFFBSFY7QUFBQSxNQUdvQkMsT0FIcEIsZ0JBR29CQSxPQUhwQjs7QUFLdEMsc0JBQ0kscUlBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssT0FBRyxFQUFFTCxVQUFWO0FBQXNCLE9BQUcsRUFBRUM7QUFBM0IsSUFESixDQURKLGVBSUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTJCQSxLQUEzQixDQURKLGVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUE0Q0ksT0FBNUMsQ0FGSixlQUdJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNENILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLElBQVosQ0FBNUMsQ0FISixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBOENILFdBQTlDLENBSkosZUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQWtEQyxRQUFsRCxDQUxKLENBSkosQ0FESixDQURKO0FBZ0JILENBckJEOztHQUFNWCxZO1VBQ2FHLHFEOzs7S0FEYkgsWTtBQXVCTkEsWUFBWSxDQUFDYyxTQUFiLEdBQXlCO0FBQ3JCQyxPQUFLLEVBQUVDLGdEQUFLQTtBQURTLENBQXpCOztBQUlBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3RDLFNBQU87QUFDSGxCLGVBQVcsRUFBRSxxQkFBQ0csT0FBRDtBQUFBLGFBQWFnQixxRUFBQSxDQUE4QkYsS0FBOUIsRUFBcUNkLE9BQXJDLENBQWI7QUFBQTtBQURWLEdBQVA7QUFHSCxDQUpEOztBQU1laUIsMEhBQU8sQ0FDbEJKLGVBRGtCLENBQVAsQ0FFYmpCLFlBRmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaFF1ZXJ5XS5mNjlmYzBmOTA5NDU3ZTk4MTJiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IE1vdmllIH0gZnJvbSAnLi4vLi4vcHJvcFR5cGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgbW92aWVzU2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycy9tb3ZpZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgTW92aWVEZXRhaWxzID0gKHsgc2VsZWN0TW92aWUgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBtb3ZpZUlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgY29uc3QgeyBwb3N0ZXJQYXRoLCB0aXRsZSwgZ2VucmVzLCByZWxlYXNlRGF0ZSwgb3ZlcnZpZXcsIHRhZ2xpbmUgfSA9IHNlbGVjdE1vdmllKG1vdmllSWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1tb3ZpZS1kZXRhaWxzX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0ZXJQYXRofSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbW92aWUtZGV0YWlsc19fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0cC1oZWFkZXJcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbW92aWUtZGV0YWlsc19fZ2VucmVcIj57dGFnbGluZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbW92aWUtZGV0YWlsc19fZ2VucmVcIj57Z2VucmVzLmpvaW4oJywgJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNfX3JlbGVhc2VcIj57cmVsZWFzZURhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNfX2Rlc2NyaXB0aW9uXCI+e292ZXJ2aWV3fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk1vdmllRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogTW92aWUsXHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlbGVjdE1vdmllOiAobW92aWVJZCkgPT4gbW92aWVzU2VsZWN0b3JzLnNlbGVjdGVkTW92aWUoc3RhdGUsIG1vdmllSWQpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuKShNb3ZpZURldGFpbHMpOyJdLCJzb3VyY2VSb290IjoiIn0=