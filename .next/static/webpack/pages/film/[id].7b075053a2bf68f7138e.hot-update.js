webpackHotUpdate_N_E("pages/film/[id]",{

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

 // import { useParams } from 'react-router-dom';






var MovieDetails = function MovieDetails(_ref) {
  _s();

  var selectMovie = _ref.selectMovie;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var movieId = router.query.movieId;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9Nb3ZpZURldGFpbHMuanN4Il0sIm5hbWVzIjpbIk1vdmllRGV0YWlscyIsInNlbGVjdE1vdmllIiwicm91dGVyIiwidXNlUm91dGVyIiwibW92aWVJZCIsInF1ZXJ5IiwicG9zdGVyUGF0aCIsInRpdGxlIiwiZ2VucmVzIiwicmVsZWFzZURhdGUiLCJvdmVydmlldyIsInRhZ2xpbmUiLCJqb2luIiwicHJvcFR5cGVzIiwibW92aWUiLCJNb3ZpZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJtb3ZpZXNTZWxlY3RvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNDLE1BRTlCQyxPQUY4QixHQUVsQkYsTUFBTSxDQUFDRyxLQUZXLENBRTlCRCxPQUY4Qjs7QUFBQSxxQkFHZ0NILFdBQVcsQ0FBQ0csT0FBRCxDQUgzQztBQUFBLE1BRzlCRSxVQUg4QixnQkFHOUJBLFVBSDhCO0FBQUEsTUFHbEJDLEtBSGtCLGdCQUdsQkEsS0FIa0I7QUFBQSxNQUdYQyxNQUhXLGdCQUdYQSxNQUhXO0FBQUEsTUFHSEMsV0FIRyxnQkFHSEEsV0FIRztBQUFBLE1BR1VDLFFBSFYsZ0JBR1VBLFFBSFY7QUFBQSxNQUdvQkMsT0FIcEIsZ0JBR29CQSxPQUhwQjs7QUFJdEMsc0JBQ0kscUlBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssT0FBRyxFQUFFTCxVQUFWO0FBQXNCLE9BQUcsRUFBRUM7QUFBM0IsSUFESixDQURKLGVBSUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTJCQSxLQUEzQixDQURKLGVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUE0Q0ksT0FBNUMsQ0FGSixlQUdJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBNENILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLElBQVosQ0FBNUMsQ0FISixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBOENILFdBQTlDLENBSkosZUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQWtEQyxRQUFsRCxDQUxKLENBSkosQ0FESixDQURKO0FBZ0JILENBcEJEOztHQUFNVixZO1VBQ2FHLHFEOzs7S0FEYkgsWTtBQXNCTkEsWUFBWSxDQUFDYSxTQUFiLEdBQXlCO0FBQ3JCQyxPQUFLLEVBQUVDLGdEQUFLQTtBQURTLENBQXpCOztBQUlBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3RDLFNBQU87QUFDSGpCLGVBQVcsRUFBRSxxQkFBQ0csT0FBRDtBQUFBLGFBQWFlLHFFQUFBLENBQThCRixLQUE5QixFQUFxQ2IsT0FBckMsQ0FBYjtBQUFBO0FBRFYsR0FBUDtBQUdILENBSkQ7O0FBTWVnQiwwSEFBTyxDQUNsQkosZUFEa0IsQ0FBUCxDQUViaEIsWUFGYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbG0vW2lkXS43YjA3NTA1M2EyYmY2OGY3MTM4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uLy4uL3Byb3BUeXBlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIG1vdmllc1NlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMvbW92aWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IE1vdmllRGV0YWlscyA9ICh7IHNlbGVjdE1vdmllIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBtb3ZpZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IHBvc3RlclBhdGgsIHRpdGxlLCBnZW5yZXMsIHJlbGVhc2VEYXRlLCBvdmVydmlldywgdGFnbGluZSB9ID0gc2VsZWN0TW92aWUobW92aWVJZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1tb3ZpZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbW92aWUtZGV0YWlsc19faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdGVyUGF0aH0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHAtaGVhZGVyXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNfX2dlbnJlXCI+e3RhZ2xpbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLW1vdmllLWRldGFpbHNfX2dlbnJlXCI+e2dlbnJlcy5qb2luKCcsICcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1tb3ZpZS1kZXRhaWxzX19yZWxlYXNlXCI+e3JlbGVhc2VEYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1tb3ZpZS1kZXRhaWxzX19kZXNjcmlwdGlvblwiPntvdmVydmlld308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Nb3ZpZURldGFpbHMucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IE1vdmllLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RNb3ZpZTogKG1vdmllSWQpID0+IG1vdmllc1NlbGVjdG9ycy5zZWxlY3RlZE1vdmllKHN0YXRlLCBtb3ZpZUlkKSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbikoTW92aWVEZXRhaWxzKTsiXSwic291cmNlUm9vdCI6IiJ9