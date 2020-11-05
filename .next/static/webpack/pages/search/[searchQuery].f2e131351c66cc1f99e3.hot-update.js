webpackHotUpdate_N_E("pages/search/[searchQuery]",{

/***/ "./src/containers/Home/Home.jsx":
/*!**************************************!*\
  !*** ./src/containers/Home/Home.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_HeroLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/HeroLayout */ "./src/layouts/HeroLayout.jsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.jsx");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm */ "./src/containers/Home/SearchForm.jsx");
/* harmony import */ var _FilterOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterOptions */ "./src/containers/Home/FilterOptions.jsx");
/* harmony import */ var _components_MovieList_MovieList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MovieList/MovieList */ "./src/components/MovieList/MovieList.jsx");
/* harmony import */ var _AddMovieModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddMovieModal */ "./src/containers/Home/AddMovieModal.jsx");
/* harmony import */ var _EditMovieModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditMovieModal */ "./src/containers/Home/EditMovieModal.jsx");
/* harmony import */ var _DeleteMovieModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteMovieModal */ "./src/containers/Home/DeleteMovieModal.jsx");
/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MovieDetails */ "./src/containers/Home/MovieDetails.jsx");
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _store_selectors_movies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/selectors/movies */ "./src/store/selectors/movies.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/useModalState */ "./src/hooks/useModalState.js");
/* harmony import */ var _NotFound_NotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../NotFound/NotFound */ "./src/containers/NotFound/NotFound.jsx");
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var Home = function Home(_ref) {
  _s2();

  var movies = _ref.movies,
      isLoading = _ref.isLoading,
      error = _ref.error,
      dispatchGetMovies = _ref.dispatchGetMovies;

  var _useModalState = Object(_hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      _useModalState2 = _slicedToArray(_useModalState, 3),
      addMovieModalOpen = _useModalState2[0],
      showAddMovideModal = _useModalState2[1],
      closeAddMovideModal = _useModalState2[2];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      movieIdToEdit = _useState2[0],
      setMovieIdToEdit = _useState2[1];

  var _useModalState3 = Object(_hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      _useModalState4 = _slicedToArray(_useModalState3, 3),
      editMovieModalOpen = _useModalState4[0],
      showEditMovideModal = _useModalState4[1],
      closeEditMovideModal = _useModalState4[2];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      movieIdToDelete = _useState4[0],
      setMovieIdToDelete = _useState4[1];

  var _useModalState5 = Object(_hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      _useModalState6 = _slicedToArray(_useModalState5, 3),
      deleteMovieModalOpen = _useModalState6[0],
      showDeleteMovideModal = _useModalState6[1],
      closeDeleteMovideModal = _useModalState6[2];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  debugger;
  var headerRight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return showAddMovideModal();
    }
  }, "+ ADD MOVIE");
  var addMovieModal = addMovieModalOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddMovieModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onCloseClick: function onCloseClick() {
      return closeAddMovideModal();
    }
  }) : null;
  var editMovieModal = editMovieModalOpen && movieIdToEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditMovieModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    movieId: movieIdToEdit,
    onCloseClick: function onCloseClick() {
      return closeEditMovideModal();
    }
  }) : null;
  var deleteMovieModal = deleteMovieModalOpen && movieIdToDelete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteMovieModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    movieId: movieIdToDelete,
    onCloseClick: function onCloseClick() {
      return closeDeleteMovideModal();
    }
  }) : null;

  var handleMovieEditClick = function handleMovieEditClick(movieId) {
    setMovieIdToEdit(movieId);
    showEditMovideModal();
  };

  var handleMovieDeleteClick = function handleMovieDeleteClick(movieId) {
    setMovieIdToDelete(movieId);
    showDeleteMovideModal();
  };

  var searchForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "tp-header home__title"
  }, "FIND YOUR MOVIE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home__search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  var hero = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, searchForm) // <Switch>
  //     <Route path="/search/:searchQuery">
  //         {searchForm}
  //     </Route>
  //     <Route path="/film/:movieId">
  //         <MovieDetails />
  //     </Route>
  //     <Route path="/" exact>
  //         {searchForm}
  //     </Route>
  //     <Route path="*">
  //         {NotFound}
  //     </Route>
  // </Switch>
  ;
  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterOptions__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-result__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, movies.length), " movies found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MovieList_MovieList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    movies: movies,
    onMovieEditClick: handleMovieEditClick,
    onMovieDeleteClick: handleMovieDeleteClick
  }), addMovieModal, editMovieModal, deleteMovieModal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_HeroLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headerRight: headerRight,
    hero: searchForm,
    main: main
  });
};

_s2(Home, "LPw1BcbP0N945mkJjqtNvKBlWEU=", false, function () {
  return [_hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"], _hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"], _hooks_useModalState__WEBPACK_IMPORTED_MODULE_15__["default"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: _store_selectors_movies__WEBPACK_IMPORTED_MODULE_13__["filteredMovies"](state),
    isLoading: _store_selectors_movies__WEBPACK_IMPORTED_MODULE_13__["isLoading"](state),
    error: _store_selectors_movies__WEBPACK_IMPORTED_MODULE_13__["error"](state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Home));

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9Ib21lLmpzeCJdLCJuYW1lcyI6WyJIb21lIiwibW92aWVzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkaXNwYXRjaEdldE1vdmllcyIsInVzZU1vZGFsU3RhdGUiLCJhZGRNb3ZpZU1vZGFsT3BlbiIsInNob3dBZGRNb3ZpZGVNb2RhbCIsImNsb3NlQWRkTW92aWRlTW9kYWwiLCJ1c2VTdGF0ZSIsIm1vdmllSWRUb0VkaXQiLCJzZXRNb3ZpZUlkVG9FZGl0IiwiZWRpdE1vdmllTW9kYWxPcGVuIiwic2hvd0VkaXRNb3ZpZGVNb2RhbCIsImNsb3NlRWRpdE1vdmlkZU1vZGFsIiwibW92aWVJZFRvRGVsZXRlIiwic2V0TW92aWVJZFRvRGVsZXRlIiwiZGVsZXRlTW92aWVNb2RhbE9wZW4iLCJzaG93RGVsZXRlTW92aWRlTW9kYWwiLCJjbG9zZURlbGV0ZU1vdmlkZU1vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGVhZGVyUmlnaHQiLCJhZGRNb3ZpZU1vZGFsIiwiZWRpdE1vdmllTW9kYWwiLCJkZWxldGVNb3ZpZU1vZGFsIiwiaGFuZGxlTW92aWVFZGl0Q2xpY2siLCJtb3ZpZUlkIiwiaGFuZGxlTW92aWVEZWxldGVDbGljayIsInNlYXJjaEZvcm0iLCJoZXJvIiwibWFpbiIsImxlbmd0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibW92aWVzU2VsZWN0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BS1A7QUFBQTs7QUFBQSxNQUpGQyxNQUlFLFFBSkZBLE1BSUU7QUFBQSxNQUhGQyxT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RUU7QUFIVixJQURKO0FBU0gsQ0E3R0Q7O0lBQU0vQixJO1VBTW1FSyw2RCxFQUVHQSw2RCxFQUVNQSw2RCxFQUMvRGdCLHFEOzs7S0FYYnJCLEk7O0FBK0dOLElBQU1pQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUMvQixTQUFPO0FBQ0hqQyxVQUFNLEVBQUVrQyx1RUFBQSxDQUErQkQsS0FBL0IsQ0FETDtBQUVIaEMsYUFBUyxFQUFFaUMsa0VBQUEsQ0FBMEJELEtBQTFCLENBRlI7QUFHSC9CLFNBQUssRUFBRWdDLDhEQUFBLENBQXNCRCxLQUF0QjtBQUhKLEdBQVA7QUFLSCxDQU5EOztBQVFlRSwwSEFBTyxDQUNsQkgsZUFEa0IsQ0FBUCxDQUViakMsSUFGYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNoUXVlcnldLmYyZTEzMTM1MWM2NmNjMWY5OWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEhlcm9MYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9IZXJvTGF5b3V0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vU2VhcmNoRm9ybSc7XHJcbmltcG9ydCBGaWx0ZXJPcHRpb25zIGZyb20gJy4vRmlsdGVyT3B0aW9ucyc7XHJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb3ZpZUxpc3QvTW92aWVMaXN0JztcclxuaW1wb3J0IEFkZE1vdmllTW9kYWwgZnJvbSAnLi9BZGRNb3ZpZU1vZGFsJztcclxuaW1wb3J0IEVkaXRNb3ZpZU1vZGFsIGZyb20gJy4vRWRpdE1vdmllTW9kYWwnO1xyXG5pbXBvcnQgRGVsZXRlTW92aWVNb2RhbCBmcm9tICcuL0RlbGV0ZU1vdmllTW9kYWwnO1xyXG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4vTW92aWVEZXRhaWxzJztcclxuaW1wb3J0ICogYXMgbW92aWVzQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL21vdmllcyc7XHJcbmltcG9ydCAqIGFzIG1vdmllc1NlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMvbW92aWVzJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgdXNlTW9kYWxTdGF0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VNb2RhbFN0YXRlJztcclxuXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9Ob3RGb3VuZC9Ob3RGb3VuZCc7XHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICh7XHJcbiAgICBtb3ZpZXMsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBlcnJvcixcclxuICAgIGRpc3BhdGNoR2V0TW92aWVzLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbYWRkTW92aWVNb2RhbE9wZW4sIHNob3dBZGRNb3ZpZGVNb2RhbCwgY2xvc2VBZGRNb3ZpZGVNb2RhbF0gPSB1c2VNb2RhbFN0YXRlKCk7XHJcbiAgICBjb25zdCBbbW92aWVJZFRvRWRpdCwgc2V0TW92aWVJZFRvRWRpdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlZGl0TW92aWVNb2RhbE9wZW4sIHNob3dFZGl0TW92aWRlTW9kYWwsIGNsb3NlRWRpdE1vdmlkZU1vZGFsXSA9IHVzZU1vZGFsU3RhdGUoKTtcclxuICAgIGNvbnN0IFttb3ZpZUlkVG9EZWxldGUsIHNldE1vdmllSWRUb0RlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkZWxldGVNb3ZpZU1vZGFsT3Blbiwgc2hvd0RlbGV0ZU1vdmlkZU1vZGFsLCBjbG9zZURlbGV0ZU1vdmlkZU1vZGFsXSA9IHVzZU1vZGFsU3RhdGUoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgZGVidWdnZXI7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyUmlnaHQgPSAoXHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93QWRkTW92aWRlTW9kYWwoKX0+KyBBREQgTU9WSUU8L0J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWRkTW92aWVNb2RhbCA9IChcclxuICAgICAgICBhZGRNb3ZpZU1vZGFsT3BlbiA/XHJcbiAgICAgICAgICAgIDxBZGRNb3ZpZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IGNsb3NlQWRkTW92aWRlTW9kYWwoKX0gLz4gOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGVkaXRNb3ZpZU1vZGFsID0gKFxyXG4gICAgICAgIGVkaXRNb3ZpZU1vZGFsT3BlbiAmJiBtb3ZpZUlkVG9FZGl0ID9cclxuICAgICAgICAgICAgPEVkaXRNb3ZpZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBtb3ZpZUlkPXttb3ZpZUlkVG9FZGl0fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiBjbG9zZUVkaXRNb3ZpZGVNb2RhbCgpfSAvPiA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlTW92aWVNb2RhbCA9IChcclxuICAgICAgICBkZWxldGVNb3ZpZU1vZGFsT3BlbiAmJiBtb3ZpZUlkVG9EZWxldGUgP1xyXG4gICAgICAgICAgICA8RGVsZXRlTW92aWVNb2RhbFxyXG4gICAgICAgICAgICAgICAgbW92aWVJZD17bW92aWVJZFRvRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiBjbG9zZURlbGV0ZU1vdmlkZU1vZGFsKCl9IC8+IDpcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3ZpZUVkaXRDbGljayA9IChtb3ZpZUlkKSA9PiB7XHJcbiAgICAgICAgc2V0TW92aWVJZFRvRWRpdChtb3ZpZUlkKTtcclxuICAgICAgICBzaG93RWRpdE1vdmlkZU1vZGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdmllRGVsZXRlQ2xpY2sgPSAobW92aWVJZCkgPT4ge1xyXG4gICAgICAgIHNldE1vdmllSWRUb0RlbGV0ZShtb3ZpZUlkKTtcclxuICAgICAgICBzaG93RGVsZXRlTW92aWRlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHAtaGVhZGVyIGhvbWVfX3RpdGxlXCI+RklORCBZT1VSIE1PVklFPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvbWVfX3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoZXJvID0gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzZWFyY2hGb3JtfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIC8vIDxTd2l0Y2g+XHJcbiAgICAgICAgLy8gICAgIDxSb3V0ZSBwYXRoPVwiL3NlYXJjaC86c2VhcmNoUXVlcnlcIj5cclxuICAgICAgICAvLyAgICAgICAgIHtzZWFyY2hGb3JtfVxyXG4gICAgICAgIC8vICAgICA8L1JvdXRlPlxyXG4gICAgICAgIC8vICAgICA8Um91dGUgcGF0aD1cIi9maWxtLzptb3ZpZUlkXCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8TW92aWVEZXRhaWxzIC8+XHJcbiAgICAgICAgLy8gICAgIDwvUm91dGU+XHJcbiAgICAgICAgLy8gICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0PlxyXG4gICAgICAgIC8vICAgICAgICAge3NlYXJjaEZvcm19XHJcbiAgICAgICAgLy8gICAgIDwvUm91dGU+XHJcbiAgICAgICAgLy8gICAgIDxSb3V0ZSBwYXRoPVwiKlwiPlxyXG4gICAgICAgIC8vICAgICAgICAge05vdEZvdW5kfVxyXG4gICAgICAgIC8vICAgICA8L1JvdXRlPlxyXG4gICAgICAgIC8vIDwvU3dpdGNoPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtYWluID0gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGaWx0ZXJPcHRpb25zIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57bW92aWVzLmxlbmd0aH08L3N0cm9uZz4gbW92aWVzIGZvdW5kXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc31cclxuICAgICAgICAgICAgICAgIG9uTW92aWVFZGl0Q2xpY2s9e2hhbmRsZU1vdmllRWRpdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgb25Nb3ZpZURlbGV0ZUNsaWNrPXtoYW5kbGVNb3ZpZURlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge2FkZE1vdmllTW9kYWx9XHJcbiAgICAgICAgICAgIHtlZGl0TW92aWVNb2RhbH1cclxuICAgICAgICAgICAge2RlbGV0ZU1vdmllTW9kYWx9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlcm9MYXlvdXRcclxuICAgICAgICAgICAgaGVhZGVyUmlnaHQ9e2hlYWRlclJpZ2h0fVxyXG4gICAgICAgICAgICBoZXJvPXtzZWFyY2hGb3JtfVxyXG4gICAgICAgICAgICBtYWluPXttYWlufVxyXG4gICAgICAgID5cclxuICAgICAgICA8L0hlcm9MYXlvdXQ+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1vdmllczogbW92aWVzU2VsZWN0b3JzLmZpbHRlcmVkTW92aWVzKHN0YXRlKSxcclxuICAgICAgICBpc0xvYWRpbmc6IG1vdmllc1NlbGVjdG9ycy5pc0xvYWRpbmcoc3RhdGUpLFxyXG4gICAgICAgIGVycm9yOiBtb3ZpZXNTZWxlY3RvcnMuZXJyb3Ioc3RhdGUpLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4pKEhvbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=