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
  var hero = router.route.startsWith('/film/') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MovieDetails__WEBPACK_IMPORTED_MODULE_11__["default"], null) : searchForm;
  var main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterOptions__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-result__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, movies.length), " movies found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MovieList_MovieList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    movies: movies,
    onMovieEditClick: handleMovieEditClick,
    onMovieDeleteClick: handleMovieDeleteClick
  }), addMovieModal, editMovieModal, deleteMovieModal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_HeroLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headerRight: headerRight,
    hero: hero,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9Ib21lLmpzeCJdLCJuYW1lcyI6WyJIb21lIiwibW92aWVzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkaXNwYXRjaEdldE1vdmllcyIsInVzZU1vZGFsU3RhdGUiLCJhZGRNb3ZpZU1vZGFsT3BlbiIsInNob3dBZGRNb3ZpZGVNb2RhbCIsImNsb3NlQWRkTW92aWRlTW9kYWwiLCJ1c2VTdGF0ZSIsIm1vdmllSWRUb0VkaXQiLCJzZXRNb3ZpZUlkVG9FZGl0IiwiZWRpdE1vdmllTW9kYWxPcGVuIiwic2hvd0VkaXRNb3ZpZGVNb2RhbCIsImNsb3NlRWRpdE1vdmlkZU1vZGFsIiwibW92aWVJZFRvRGVsZXRlIiwic2V0TW92aWVJZFRvRGVsZXRlIiwiZGVsZXRlTW92aWVNb2RhbE9wZW4iLCJzaG93RGVsZXRlTW92aWRlTW9kYWwiLCJjbG9zZURlbGV0ZU1vdmlkZU1vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGVhZGVyUmlnaHQiLCJhZGRNb3ZpZU1vZGFsIiwiZWRpdE1vdmllTW9kYWwiLCJkZWxldGVNb3ZpZU1vZGFsIiwiaGFuZGxlTW92aWVFZGl0Q2xpY2siLCJtb3ZpZUlkIiwiaGFuZGxlTW92aWVEZWxldGVDbGljayIsInNlYXJjaEZvcm0iLCJoZXJvIiwicm91dGUiLCJzdGFydHNXaXRoIiwibWFpbiIsImxlbmd0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibW92aWVzU2VsZWN0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BS1A7QUFBQTs7QUFBQSxNQUpGQyxNQUlFLFFB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RztBQUhWLElBREo7QUFTSCxDQTVGRDs7SUFBTWpDLEk7VUFNbUVLLDZELEVBRUdBLDZELEVBRU1BLDZELEVBQy9EZ0IscUQ7OztLQVhickIsSTs7QUE4Rk4sSUFBTW1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFNBQU87QUFDSG5DLFVBQU0sRUFBRW9DLHVFQUFBLENBQStCRCxLQUEvQixDQURMO0FBRUhsQyxhQUFTLEVBQUVtQyxrRUFBQSxDQUEwQkQsS0FBMUIsQ0FGUjtBQUdIakMsU0FBSyxFQUFFa0MsOERBQUEsQ0FBc0JELEtBQXRCO0FBSEosR0FBUDtBQUtILENBTkQ7O0FBUWVFLDBIQUFPLENBQ2xCSCxlQURrQixDQUFQLENBRWJuQyxJQUZhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2hRdWVyeV0uYjBjZTk4MTllMjc1ZjRkMzhiNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgSGVyb0xheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL0hlcm9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5cclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9TZWFyY2hGb3JtJztcclxuaW1wb3J0IEZpbHRlck9wdGlvbnMgZnJvbSAnLi9GaWx0ZXJPcHRpb25zJztcclxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdC9Nb3ZpZUxpc3QnO1xyXG5pbXBvcnQgQWRkTW92aWVNb2RhbCBmcm9tICcuL0FkZE1vdmllTW9kYWwnO1xyXG5pbXBvcnQgRWRpdE1vdmllTW9kYWwgZnJvbSAnLi9FZGl0TW92aWVNb2RhbCc7XHJcbmltcG9ydCBEZWxldGVNb3ZpZU1vZGFsIGZyb20gJy4vRGVsZXRlTW92aWVNb2RhbCc7XHJcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi9Nb3ZpZURldGFpbHMnO1xyXG5pbXBvcnQgKiBhcyBtb3ZpZXNBY3Rpb25zIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvbW92aWVzJztcclxuaW1wb3J0ICogYXMgbW92aWVzU2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycy9tb3ZpZXMnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB1c2VNb2RhbFN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZU1vZGFsU3RhdGUnO1xyXG5cclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kL05vdEZvdW5kJztcclxuXHJcblxyXG5jb25zdCBIb21lID0gKHtcclxuICAgIG1vdmllcyxcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGVycm9yLFxyXG4gICAgZGlzcGF0Y2hHZXRNb3ZpZXMsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFthZGRNb3ZpZU1vZGFsT3Blbiwgc2hvd0FkZE1vdmlkZU1vZGFsLCBjbG9zZUFkZE1vdmlkZU1vZGFsXSA9IHVzZU1vZGFsU3RhdGUoKTtcclxuICAgIGNvbnN0IFttb3ZpZUlkVG9FZGl0LCBzZXRNb3ZpZUlkVG9FZGl0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2VkaXRNb3ZpZU1vZGFsT3Blbiwgc2hvd0VkaXRNb3ZpZGVNb2RhbCwgY2xvc2VFZGl0TW92aWRlTW9kYWxdID0gdXNlTW9kYWxTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21vdmllSWRUb0RlbGV0ZSwgc2V0TW92aWVJZFRvRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RlbGV0ZU1vdmllTW9kYWxPcGVuLCBzaG93RGVsZXRlTW92aWRlTW9kYWwsIGNsb3NlRGVsZXRlTW92aWRlTW9kYWxdID0gdXNlTW9kYWxTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyUmlnaHQgPSAoXHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93QWRkTW92aWRlTW9kYWwoKX0+KyBBREQgTU9WSUU8L0J1dHRvbj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWRkTW92aWVNb2RhbCA9IChcclxuICAgICAgICBhZGRNb3ZpZU1vZGFsT3BlbiA/XHJcbiAgICAgICAgICAgIDxBZGRNb3ZpZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IGNsb3NlQWRkTW92aWRlTW9kYWwoKX0gLz4gOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGVkaXRNb3ZpZU1vZGFsID0gKFxyXG4gICAgICAgIGVkaXRNb3ZpZU1vZGFsT3BlbiAmJiBtb3ZpZUlkVG9FZGl0ID9cclxuICAgICAgICAgICAgPEVkaXRNb3ZpZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBtb3ZpZUlkPXttb3ZpZUlkVG9FZGl0fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiBjbG9zZUVkaXRNb3ZpZGVNb2RhbCgpfSAvPiA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlTW92aWVNb2RhbCA9IChcclxuICAgICAgICBkZWxldGVNb3ZpZU1vZGFsT3BlbiAmJiBtb3ZpZUlkVG9EZWxldGUgP1xyXG4gICAgICAgICAgICA8RGVsZXRlTW92aWVNb2RhbFxyXG4gICAgICAgICAgICAgICAgbW92aWVJZD17bW92aWVJZFRvRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiBjbG9zZURlbGV0ZU1vdmlkZU1vZGFsKCl9IC8+IDpcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3ZpZUVkaXRDbGljayA9IChtb3ZpZUlkKSA9PiB7XHJcbiAgICAgICAgc2V0TW92aWVJZFRvRWRpdChtb3ZpZUlkKTtcclxuICAgICAgICBzaG93RWRpdE1vdmlkZU1vZGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdmllRGVsZXRlQ2xpY2sgPSAobW92aWVJZCkgPT4ge1xyXG4gICAgICAgIHNldE1vdmllSWRUb0RlbGV0ZShtb3ZpZUlkKTtcclxuICAgICAgICBzaG93RGVsZXRlTW92aWRlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHAtaGVhZGVyIGhvbWVfX3RpdGxlXCI+RklORCBZT1VSIE1PVklFPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvbWVfX3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoZXJvID0gKFxyXG4gICAgICAgIHJvdXRlci5yb3V0ZS5zdGFydHNXaXRoKCcvZmlsbS8nKSA/IDxNb3ZpZURldGFpbHMgLz4gOiBzZWFyY2hGb3JtXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZpbHRlck9wdGlvbnMgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yZXN1bHRfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPnttb3ZpZXMubGVuZ3RofTwvc3Ryb25nPiBtb3ZpZXMgZm91bmRcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfVxyXG4gICAgICAgICAgICAgICAgb25Nb3ZpZUVkaXRDbGljaz17aGFuZGxlTW92aWVFZGl0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICBvbk1vdmllRGVsZXRlQ2xpY2s9e2hhbmRsZU1vdmllRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7YWRkTW92aWVNb2RhbH1cclxuICAgICAgICAgICAge2VkaXRNb3ZpZU1vZGFsfVxyXG4gICAgICAgICAgICB7ZGVsZXRlTW92aWVNb2RhbH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVyb0xheW91dFxyXG4gICAgICAgICAgICBoZWFkZXJSaWdodD17aGVhZGVyUmlnaHR9XHJcbiAgICAgICAgICAgIGhlcm89e2hlcm99XHJcbiAgICAgICAgICAgIG1haW49e21haW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvSGVyb0xheW91dD5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW92aWVzOiBtb3ZpZXNTZWxlY3RvcnMuZmlsdGVyZWRNb3ZpZXMoc3RhdGUpLFxyXG4gICAgICAgIGlzTG9hZGluZzogbW92aWVzU2VsZWN0b3JzLmlzTG9hZGluZyhzdGF0ZSksXHJcbiAgICAgICAgZXJyb3I6IG1vdmllc1NlbGVjdG9ycy5lcnJvcihzdGF0ZSksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbikoSG9tZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==