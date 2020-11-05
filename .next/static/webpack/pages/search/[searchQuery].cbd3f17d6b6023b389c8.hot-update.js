webpackHotUpdate_N_E("pages/search/[searchQuery]",{

/***/ "./src/containers/Home/SearchForm.jsx":
/*!********************************************!*\
  !*** ./src/containers/Home/SearchForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/movies */ "./src/store/actions/movies.js");
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Input/Input */ "./src/components/Input/Input.jsx");
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SearchForm = function SearchForm(_ref) {
  _s2();

  var dispatchGetMovies = _ref.dispatchGetMovies;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var searchQuery = router.query.searchQuery || '';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(searchQuery),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setQuery(searchQuery);
    dispatchGetMovies(searchQuery);
  }, [query]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    query && router.push("/search/".concat(query));
  };

  var handleChange = function handleChange(e) {
    setQuery(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "home-search-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "search",
    className: "home-search-form__input",
    placeholder: "What do you want to watch?",
    onChange: handleChange,
    value: query
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    colorType: "primary",
    className: "home-search-form__button"
  }, "SEARCH"));
};

_s2(SearchForm, "xkq8/pSoszr5sQisuCMKdHegIWY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = SearchForm;

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {
  dispatchGetMovies: _store_actions_movies__WEBPACK_IMPORTED_MODULE_4__["getMovies"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SearchForm));

var _c;

$RefreshReg$(_c, "SearchForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9TZWFyY2hGb3JtLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwiZGlzcGF0Y2hHZXRNb3ZpZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hRdWVyeSIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzZXRRdWVyeSIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibW92aWVzQWN0aW9ucyIsImdldE1vdmllcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QjtBQUFBOztBQUFBLE1BQXpCQyxpQkFBeUIsUUFBekJBLGlCQUF5QjtBQUMzQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsV0FBYixJQUE0QixFQUFoRDs7QUFGMkMsa0JBR2pCRSxzREFBUSxDQUFDRixXQUFELENBSFM7QUFBQTtBQUFBLE1BR3BDQyxLQUhvQztBQUFBLE1BRzdCRSxRQUg2Qjs7QUFLM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxZQUFRLENBQUNILFdBQUQsQ0FBUjtBQUNBSCxxQkFBaUIsQ0FBQ0csV0FBRCxDQUFqQjtBQUNILEdBSFEsRUFHTixDQUFDQyxLQUFELENBSE0sQ0FBVDs7QUFLQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixTQUFLLElBQUlILE1BQU0sQ0FBQ1UsSUFBUCxtQkFBdUJQLEtBQXZCLEVBQVQ7QUFDSCxHQUhEOztBQUtBLE1BQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILENBQUQsRUFBTztBQUN4QkgsWUFBUSxDQUFDRyxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsWUFBUSxFQUFFTjtBQUE3QyxrQkFDSSwyREFBQywrREFBRDtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksYUFBUyxFQUFDLHlCQUZkO0FBR0ksZUFBVyxFQUFDLDRCQUhoQjtBQUlJLFlBQVEsRUFBRUksWUFKZDtBQUtJLFNBQUssRUFBRVI7QUFMWCxJQURKLGVBT0ksMkRBQUMsaUVBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUNJLGFBQVMsRUFBQyxTQURkO0FBRUksYUFBUyxFQUFDO0FBRmQsY0FQSixDQURKO0FBYUgsQ0FoQ0Q7O0lBQU1MLFU7VUFDYUcscUQ7OztLQURiSCxVOztBQWtDTixJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsU0FBTyxFQUFQO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRztBQUN2QmpCLG1CQUFpQixFQUFFa0IsK0RBQXVCQztBQURuQixDQUEzQjtBQUllQywwSEFBTyxDQUNsQkwsZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR2JsQixVQUhhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2hRdWVyeV0uY2JkM2YxN2Q2YjYwMjNiMzg5YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIG1vdmllc0FjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9tb3ZpZXMnO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQvSW5wdXQnO1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSAoeyBkaXNwYXRjaEdldE1vdmllcywgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHJvdXRlci5xdWVyeS5zZWFyY2hRdWVyeSB8fCAnJztcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoc2VhcmNoUXVlcnkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnkoc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgIGRpc3BhdGNoR2V0TW92aWVzKHNlYXJjaFF1ZXJ5KTtcclxuICAgIH0sIFtxdWVyeV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHF1ZXJ5ICYmIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7cXVlcnl9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhvbWUtc2VhcmNoLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtc2VhcmNoLWZvcm1fX2lucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3Ugd2FudCB0byB3YXRjaD9cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yVHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZS1zZWFyY2gtZm9ybV9fYnV0dG9uXCI+U0VBUkNIPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBkaXNwYXRjaEdldE1vdmllczogbW92aWVzQWN0aW9ucy5nZXRNb3ZpZXMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoU2VhcmNoRm9ybSk7Il0sInNvdXJjZVJvb3QiOiIifQ==