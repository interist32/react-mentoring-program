module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ErrorBoundary/ErrorBoundary.jsx":
/*!********************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "class": "global-error"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          "class": "global-error__title"
        }, "OMG! :("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          "class": "global-error__error"
        }, this.state.error.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
          "class": "global-error__details"
        }, this.state.errorInfo.componentStack));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/data/api.js":
/*!*************************!*\
  !*** ./src/data/api.js ***!
  \*************************/
/*! exports provided: getMovies, updateMovie, deleteMovie, addMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
var camelcaseKeys = __webpack_require__(/*! camelcase-keys */ "camelcase-keys");

var snakeize = __webpack_require__(/*! snakeize */ "snakeize");

var API_HOST = 'http://localhost:4000';
var MOVIES_URL = "".concat(API_HOST, "/movies");
var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8'
};
function getMovies(searchQuery) {
  return fetch(searchQuery ? "".concat(MOVIES_URL, "?search=").concat(searchQuery, "&searchBy=title") : MOVIES_URL, {
    method: 'GET',
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return camelcaseKeys(data, {
      deep: true
    });
  }).then(function (data) {
    return data.data;
  });
}
function updateMovie(movie) {
  return fetch(MOVIES_URL, {
    method: 'PUT',
    body: JSON.stringify(snakeize(movie)),
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return camelcaseKeys(data, {
      deep: true
    });
  })["catch"](function (error) {
    return error;
  });
}
function deleteMovie(movieId) {
  return fetch("".concat(MOVIES_URL, "/").concat(movieId), {
    method: 'DELETE'
  });
}
function addMovie(movie) {
  return fetch(MOVIES_URL, {
    method: 'POST',
    body: JSON.stringify(snakeize(movie)),
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return camelcaseKeys(data, {
      deep: true
    });
  });
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ErrorBoundary/ErrorBoundary */ "./src/components/ErrorBoundary/ErrorBoundary.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);






function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, pageProps)));
}

/***/ }),

/***/ "./src/store/actions/movies.js":
/*!*************************************!*\
  !*** ./src/store/actions/movies.js ***!
  \*************************************/
/*! exports provided: GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR, UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_ERROR, DELETE_MOVIE, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_ERROR, SET_FILTER_BY_GENRE, SET_SORTING, getMovies, getMoviesSuccess, getMoviesError, setFilterByGenre, addMovie, addMovieSuccess, addMovieError, updateMovie, updateMovieSuccess, updateMovieError, deleteMovie, deleteMovieSuccess, deleteMovieError, setSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return GET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_SUCCESS", function() { return GET_MOVIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_ERROR", function() { return GET_MOVIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return ADD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_ERROR", function() { return ADD_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE", function() { return UPDATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_SUCCESS", function() { return UPDATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE_ERROR", function() { return UPDATE_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_SUCCESS", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_ERROR", function() { return DELETE_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER_BY_GENRE", function() { return SET_FILTER_BY_GENRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORTING", function() { return SET_SORTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesSuccess", function() { return getMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesError", function() { return getMoviesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterByGenre", function() { return setFilterByGenre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieSuccess", function() { return addMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieError", function() { return addMovieError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieSuccess", function() { return updateMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieError", function() { return updateMovieError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieSuccess", function() { return deleteMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieError", function() { return deleteMovieError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSorting", function() { return setSorting; });
var GET_MOVIES = 'GET MOVIES';
var GET_MOVIES_SUCCESS = 'GET MOVIES SUCCESS';
var GET_MOVIES_ERROR = 'GET MOVIES ERROR';
var ADD_MOVIE = 'ADD MOVIE';
var ADD_MOVIE_SUCCESS = 'ADD MOVIE SUCCESS';
var ADD_MOVIE_ERROR = 'ADD MOVIE ERROR';
var UPDATE_MOVIE = 'UPDATE MOVIE';
var UPDATE_MOVIE_SUCCESS = 'UPDATE MOVIE SUCCESS';
var UPDATE_MOVIE_ERROR = 'UPDATE MOVIE ERROR';
var DELETE_MOVIE = 'DELETE MOVIE';
var DELETE_MOVIE_SUCCESS = 'DELETE MOVIE SUCCESS';
var DELETE_MOVIE_ERROR = 'DELETE MOVIE ERROR';
var SET_FILTER_BY_GENRE = 'SET FILTER BY GENRE';
var SET_SORTING = 'SET SORTING';
var getMovies = function getMovies(title) {
  return {
    type: GET_MOVIES,
    title: title
  };
};
var getMoviesSuccess = function getMoviesSuccess(movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies: movies
  };
};
var getMoviesError = function getMoviesError(error) {
  return {
    type: GET_MOVIES_ERROR,
    error: error
  };
};
var setFilterByGenre = function setFilterByGenre(genre) {
  return {
    type: SET_FILTER_BY_GENRE,
    genre: genre
  };
};
var addMovie = function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie: movie
  };
};
var addMovieSuccess = function addMovieSuccess(movie) {
  return {
    type: ADD_MOVIE_SUCCESS,
    movie: movie
  };
};
var addMovieError = function addMovieError(error) {
  return {
    type: ADD_MOVIE_ERROR,
    error: error
  };
};
var updateMovie = function updateMovie(movie) {
  return {
    type: UPDATE_MOVIE,
    movie: movie
  };
};
var updateMovieSuccess = function updateMovieSuccess(movie) {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    movie: movie
  };
};
var updateMovieError = function updateMovieError(error) {
  return {
    type: UPDATE_MOVIE_ERROR,
    error: error
  };
};
var deleteMovie = function deleteMovie(movieId) {
  return {
    type: DELETE_MOVIE,
    movieId: movieId
  };
};
var deleteMovieSuccess = function deleteMovieSuccess(movieId) {
  return {
    type: DELETE_MOVIE_SUCCESS,
    movieId: movieId
  };
};
var deleteMovieError = function deleteMovieError(error) {
  return {
    type: DELETE_MOVIE_ERROR,
    error: error
  };
};
var setSorting = function setSorting(sortBy) {
  return {
    type: SET_SORTING,
    sortBy: sortBy
  };
};

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _sagas_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas/movies */ "./src/store/sagas/movies.js");




var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

var configureStore = function configureStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_sagas_movies__WEBPACK_IMPORTED_MODULE_3__["getMovies"]);
  sagaMiddleware.run(_sagas_movies__WEBPACK_IMPORTED_MODULE_3__["addMovie"]);
  sagaMiddleware.run(_sagas_movies__WEBPACK_IMPORTED_MODULE_3__["editMovie"]);
  sagaMiddleware.run(_sagas_movies__WEBPACK_IMPORTED_MODULE_3__["removeMovie"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies */ "./src/store/reducers/movies.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  movies: _movies__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/movies.js":
/*!**************************************!*\
  !*** ./src/store/reducers/movies.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/movies */ "./src/store/actions/movies.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  movies: [],
  isLoading: false,
  error: null,
  filterByGenre: null,
  sortBy: null,
  selectedMovieId: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isLoading: true
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES_SUCCESS"]:
      var movies = action.movies;
      return _objectSpread(_objectSpread({}, state), {}, {
        movies: movies,
        isLoading: false
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES_ERROR"]:
      var error = action.error;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        error: error
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER_BY_GENRE"]:
      var genre = action.genre;
      return _objectSpread(_objectSpread({}, state), {}, {
        filterByGenre: genre
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        movies: [].concat(_toConsumableArray(state.movies), [action.movie])
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MOVIE_SUCCESS"]:
      var movieIds = state.movies.map(function (movie) {
        return movie.id;
      });
      var ind = movieIds.indexOf(action.movie.id);
      return _objectSpread(_objectSpread({}, state), {}, {
        movies: [].concat(_toConsumableArray(state.movies.slice(0, ind)), [action.movie], _toConsumableArray(state.movies.slice(ind + 1)))
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["DELETE_MOVIE_SUCCESS"]:
      var movieInd = state.movies.findIndex(function (movie) {
        return movie.id === action.movieId;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        movies: [].concat(_toConsumableArray(state.movies.slice(0, movieInd)), _toConsumableArray(state.movies.slice(movieInd + 1)))
      });

    case _actions_movies__WEBPACK_IMPORTED_MODULE_0__["SET_SORTING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sortBy: action.sortBy
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/sagas/movies.js":
/*!***********************************!*\
  !*** ./src/store/sagas/movies.js ***!
  \***********************************/
/*! exports provided: getMovies, addMovie, editMovie, removeMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editMovie", function() { return editMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMovie", function() { return removeMovie; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/api */ "./src/data/api.js");
/* harmony import */ var _actions_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/movies */ "./src/store/actions/movies.js");
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchMovies),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getMovies),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(createMovie),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(addMovie),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(updateMovie),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(editMovie),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(deleteMovie),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(removeMovie);






function fetchMovies(_ref) {
  var title, movies;
  return regeneratorRuntime.wrap(function fetchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          title = _ref.title;
          _context.prev = 1;
          _context.next = 4;
          return Object(_data_api__WEBPACK_IMPORTED_MODULE_2__["getMovies"])(title);

        case 4:
          movies = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["getMoviesSuccess"](movies));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["getMoviesError"](_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function getMovies() {
  return regeneratorRuntime.wrap(function getMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["GET_MOVIES"], fetchMovies);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function createMovie(_ref2) {
  var movie, newMovie;
  return regeneratorRuntime.wrap(function createMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          movie = _ref2.movie;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(_data_api__WEBPACK_IMPORTED_MODULE_2__["addMovie"])(movie);

        case 4:
          newMovie = _context3.sent;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["addMovieSuccess"](newMovie));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["addMovieError"](_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

function addMovie() {
  return regeneratorRuntime.wrap(function addMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["ADD_MOVIE"], createMovie);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function updateMovie(_ref3) {
  var movie, updateResult;
  return regeneratorRuntime.wrap(function updateMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          movie = _ref3.movie;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(_data_api__WEBPACK_IMPORTED_MODULE_2__["updateMovie"])(movie);

        case 4:
          updateResult = _context5.sent;
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["updateMovieSuccess"](updateResult));

        case 7:
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["updateMovieError"](_context5.t0));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 9]]);
}

function editMovie() {
  return regeneratorRuntime.wrap(function editMovie$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["UPDATE_MOVIE"], updateMovie);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function deleteMovie(_ref4) {
  var movieId;
  return regeneratorRuntime.wrap(function deleteMovie$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          movieId = _ref4.movieId;
          _context7.prev = 1;
          _context7.next = 4;
          return Object(_data_api__WEBPACK_IMPORTED_MODULE_2__["deleteMovie"])(movieId);

        case 4:
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["deleteMovieSuccess"](movieId));

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["deleteMovieError"](_context7.t0));

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[1, 8]]);
}

function removeMovie() {
  return regeneratorRuntime.wrap(function removeMovie$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions_movies__WEBPACK_IMPORTED_MODULE_3__["DELETE_MOVIE"], deleteMovie);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "camelcase-keys":
/*!*********************************!*\
  !*** external "camelcase-keys" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("camelcase-keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),

/***/ "snakeize":
/*!***************************!*\
  !*** external "snakeize" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("snakeize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL21vdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NhZ2FzL21vdmllcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjYW1lbGNhc2Uta2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic25ha2VpemVcIiJdLCJuYW1lcyI6WyJFcnJvckJvdW5kYXJ5IiwicHJvcHMiLCJzdGF0ZSIsImVycm9yIiwiZXJyb3JJbmZvIiwic2V0U3RhdGUiLCJ0b1N0cmluZyIsImNvbXBvbmVudFN0YWNrIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNhbWVsY2FzZUtleXMiLCJyZXF1aXJlIiwic25ha2VpemUiLCJBUElfSE9TVCIsIk1PVklFU19VUkwiLCJoZWFkZXJzIiwiZ2V0TW92aWVzIiwic2VhcmNoUXVlcnkiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGVlcCIsInVwZGF0ZU1vdmllIiwibW92aWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbGV0ZU1vdmllIiwibW92aWVJZCIsImFkZE1vdmllIiwiQXBwIiwicGFnZVByb3BzIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsIkdFVF9NT1ZJRVMiLCJHRVRfTU9WSUVTX1NVQ0NFU1MiLCJHRVRfTU9WSUVTX0VSUk9SIiwiQUREX01PVklFIiwiQUREX01PVklFX1NVQ0NFU1MiLCJBRERfTU9WSUVfRVJST1IiLCJVUERBVEVfTU9WSUUiLCJVUERBVEVfTU9WSUVfU1VDQ0VTUyIsIlVQREFURV9NT1ZJRV9FUlJPUiIsIkRFTEVURV9NT1ZJRSIsIkRFTEVURV9NT1ZJRV9TVUNDRVNTIiwiREVMRVRFX01PVklFX0VSUk9SIiwiU0VUX0ZJTFRFUl9CWV9HRU5SRSIsIlNFVF9TT1JUSU5HIiwidGl0bGUiLCJ0eXBlIiwiZ2V0TW92aWVzU3VjY2VzcyIsIm1vdmllcyIsImdldE1vdmllc0Vycm9yIiwic2V0RmlsdGVyQnlHZW5yZSIsImdlbnJlIiwiYWRkTW92aWVTdWNjZXNzIiwiYWRkTW92aWVFcnJvciIsInVwZGF0ZU1vdmllU3VjY2VzcyIsInVwZGF0ZU1vdmllRXJyb3IiLCJkZWxldGVNb3ZpZVN1Y2Nlc3MiLCJkZWxldGVNb3ZpZUVycm9yIiwic2V0U29ydGluZyIsInNvcnRCeSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiZWRpdE1vdmllIiwicmVtb3ZlTW92aWUiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJmaWx0ZXJCeUdlbnJlIiwic2VsZWN0ZWRNb3ZpZUlkIiwicmVkdWNlciIsImFjdGlvbiIsImFjdGlvbnMiLCJtb3ZpZUlkcyIsIm1hcCIsImlkIiwiaW5kIiwiaW5kZXhPZiIsInNsaWNlIiwibW92aWVJbmQiLCJmaW5kSW5kZXgiLCJmZXRjaE1vdmllcyIsImNyZWF0ZU1vdmllIiwiZ2V0TW92aWVzQXBpIiwicHV0IiwibW92aWVzQWN0aW9ucyIsIm1lc3NhZ2UiLCJ0YWtlRXZlcnkiLCJhZGRNb3ZpZUFwaSIsIm5ld01vdmllIiwidXBkYXRlTW92aWVBcGkiLCJ1cGRhdGVSZXN1bHQiLCJkZWxldGVNb3ZpZUFwaSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztJQUdxQkEsYTs7Ozs7QUFDakIseUJBQVlD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LHFDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9ySW5mbzogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IsIGVycm9ySW5mbyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJnbG9iYWwtZXJyb3JfX3RpdGxlXCI+T01HISA6KDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ2xvYmFsLWVycm9yX19lcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yLnRvU3RyaW5nKCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGV0YWlscyBjbGFzcz1cImdsb2JhbC1lcnJvcl9fZGV0YWlsc1wiPnt0aGlzLnN0YXRlLmVycm9ySW5mby5jb21wb25lbnRTdGFja308L2RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG59IiwiY29uc3QgY2FtZWxjYXNlS2V5cyA9IHJlcXVpcmUoJ2NhbWVsY2FzZS1rZXlzJyk7XHJcbmNvbnN0IHNuYWtlaXplID0gcmVxdWlyZSgnc25ha2VpemUnKVxyXG5cclxuY29uc3QgQVBJX0hPU1QgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcclxuY29uc3QgTU9WSUVTX1VSTCA9IGAke0FQSV9IT1NUfS9tb3ZpZXNgO1xyXG5jb25zdCBoZWFkZXJzID0ge1xyXG4gICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmllcyhzZWFyY2hRdWVyeSkge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5ID9cclxuICAgICAgICAgICAgICAgICBgJHtNT1ZJRVNfVVJMfT9zZWFyY2g9JHtzZWFyY2hRdWVyeX0mc2VhcmNoQnk9dGl0bGVgIDpcclxuICAgICAgICAgICAgICAgICBNT1ZJRVNfVVJMLFxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IGNhbWVsY2FzZUtleXMoZGF0YSwge2RlZXA6IHRydWV9KSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW92aWUobW92aWUpIHtcclxuICByZXR1cm4gZmV0Y2goTU9WSUVTX1VSTCwge1xyXG4gICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc25ha2VpemUobW92aWUpKSxcclxuICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBjYW1lbGNhc2VLZXlzKGRhdGEsIHtkZWVwOiB0cnVlfSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTW92aWUobW92aWVJZCkge1xyXG4gIHJldHVybiBmZXRjaChgJHtNT1ZJRVNfVVJMfS8ke21vdmllSWR9YCwge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vdmllKG1vdmllKSB7XHJcbiAgcmV0dXJuIGZldGNoKE1PVklFU19VUkwsIHtcclxuICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzbmFrZWl6ZShtb3ZpZSkpLFxyXG4gICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBjYW1lbGNhc2VLZXlzKGRhdGEsIHtkZWVwOiB0cnVlfSkpO1xyXG59IiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4uL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeSc7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICAgICAgPC9Qcm92aWRlcj4pO1xyXG59IiwiZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUIE1PVklFUyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVTX1NVQ0NFU1MgPSAnR0VUIE1PVklFUyBTVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVNfRVJST1IgPSAnR0VUIE1PVklFUyBFUlJPUic7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9WSUUgPSAnQUREIE1PVklFJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9TVUNDRVNTID0gJ0FERCBNT1ZJRSBTVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRV9FUlJPUiA9ICdBREQgTU9WSUUgRVJST1InO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFID0gJ1VQREFURSBNT1ZJRSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfU1VDQ0VTUyA9ICdVUERBVEUgTU9WSUUgU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUVfRVJST1IgPSAnVVBEQVRFIE1PVklFIEVSUk9SJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9NT1ZJRSA9ICdERUxFVEUgTU9WSUUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX1NVQ0NFU1MgPSAnREVMRVRFIE1PVklFIFNVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01PVklFX0VSUk9SID0gJ0RFTEVURSBNT1ZJRSBFUlJPUic7XHJcbmV4cG9ydCBjb25zdCBTRVRfRklMVEVSX0JZX0dFTlJFID0gJ1NFVCBGSUxURVIgQlkgR0VOUkUnO1xyXG5leHBvcnQgY29uc3QgU0VUX1NPUlRJTkcgPSAnU0VUIFNPUlRJTkcnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAodGl0bGUpID0+ICh7XHJcbiAgdHlwZTogR0VUX01PVklFUyxcclxuICB0aXRsZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzU3VjY2VzcyA9IChtb3ZpZXMpID0+ICh7XHJcbiAgdHlwZTogR0VUX01PVklFU19TVUNDRVNTLFxyXG4gIG1vdmllcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzRXJyb3IgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogR0VUX01PVklFU19FUlJPUixcclxuICBlcnJvcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyQnlHZW5yZSA9IChnZW5yZSkgPT4gKHtcclxuICB0eXBlOiBTRVRfRklMVEVSX0JZX0dFTlJFLFxyXG4gIGdlbnJlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNb3ZpZSA9IChtb3ZpZSkgPT4gKHtcclxuICB0eXBlOiBBRERfTU9WSUUsXHJcbiAgbW92aWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE1vdmllU3VjY2VzcyA9IChtb3ZpZSkgPT4gKHtcclxuICB0eXBlOiBBRERfTU9WSUVfU1VDQ0VTUyxcclxuICBtb3ZpZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTW92aWVFcnJvciA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBBRERfTU9WSUVfRVJST1IsXHJcbiAgZXJyb3IsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKG1vdmllKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9NT1ZJRSxcclxuICBtb3ZpZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVTdWNjZXNzID0gKG1vdmllKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9NT1ZJRV9TVUNDRVNTLFxyXG4gIG1vdmllLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZUVycm9yID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9NT1ZJRV9FUlJPUixcclxuICBlcnJvcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAobW92aWVJZCkgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfTU9WSUUsXHJcbiAgbW92aWVJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVTdWNjZXNzID0gKG1vdmllSWQpID0+ICh7XHJcbiAgdHlwZTogREVMRVRFX01PVklFX1NVQ0NFU1MsXHJcbiAgbW92aWVJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWVFcnJvciA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBERUxFVEVfTU9WSUVfRVJST1IsXHJcbiAgZXJyb3IsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNvcnRpbmcgPSAoc29ydEJ5KSA9PiAoe1xyXG4gIHR5cGU6IFNFVF9TT1JUSU5HLFxyXG4gIHNvcnRCeSxcclxufSk7IiwiaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcclxuaW1wb3J0IHthZGRNb3ZpZSwgZWRpdE1vdmllLCBnZXRNb3ZpZXMsIHJlbW92ZU1vdmllfSBmcm9tICcuL3NhZ2FzL21vdmllcyc7XHJcblxyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgcm9vdFJlZHVjZXIsXHJcbiAgICAgIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSksXHJcbiAgKTtcclxuXHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKGdldE1vdmllcyk7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKGFkZE1vdmllKTtcclxuICBzYWdhTWlkZGxld2FyZS5ydW4oZWRpdE1vdmllKTtcclxuICBzYWdhTWlkZGxld2FyZS5ydW4ocmVtb3ZlTW92aWUpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTsiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IG1vdmllcyBmcm9tICcuL21vdmllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIG1vdmllcyxcclxufSk7IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL21vdmllcyc7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vdmllczogW10sXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBmaWx0ZXJCeUdlbnJlOiBudWxsLFxyXG4gIHNvcnRCeTogbnVsbCxcclxuICBzZWxlY3RlZE1vdmllSWQ6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvbnMuR0VUX01PVklFUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUsXHJcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25zLkdFVF9NT1ZJRVNfU1VDQ0VTUzpcclxuICAgICAgY29uc3Qge21vdmllc30gPSBhY3Rpb247XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW92aWVzLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvbnMuR0VUX01PVklFU19FUlJPUjpcclxuICAgICAgY29uc3Qge2Vycm9yfSA9IGFjdGlvbjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25zLlNFVF9GSUxURVJfQllfR0VOUkU6XHJcbiAgICAgIGNvbnN0IHtnZW5yZX0gPSBhY3Rpb247XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmlsdGVyQnlHZW5yZTogZ2VucmUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIGFjdGlvbnMuQUREX01PVklFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW92aWVzOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5tb3ZpZXMsXHJcbiAgICAgICAgICBhY3Rpb24ubW92aWUsXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9ucy5VUERBVEVfTU9WSUVfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgbW92aWVJZHMgPSBzdGF0ZS5tb3ZpZXMubWFwKG1vdmllID0+IG1vdmllLmlkKTtcclxuICAgICAgY29uc3QgaW5kID0gbW92aWVJZHMuaW5kZXhPZihhY3Rpb24ubW92aWUuaWQpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vdmllczogW1xyXG4gICAgICAgICAgLi4uc3RhdGUubW92aWVzLnNsaWNlKDAsIGluZCksXHJcbiAgICAgICAgICBhY3Rpb24ubW92aWUsXHJcbiAgICAgICAgICAuLi5zdGF0ZS5tb3ZpZXMuc2xpY2UoaW5kICsgMSksXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9ucy5ERUxFVEVfTU9WSUVfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgbW92aWVJbmQgPVxyXG4gICAgICAgICAgc3RhdGUubW92aWVzLmZpbmRJbmRleChtb3ZpZSA9PiBtb3ZpZS5pZCA9PT0gYWN0aW9uLm1vdmllSWQpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb3ZpZXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLm1vdmllcy5zbGljZSgwLCBtb3ZpZUluZCksXHJcbiAgICAgICAgICAuLi5zdGF0ZS5tb3ZpZXMuc2xpY2UobW92aWVJbmQgKyAxKSxcclxuICAgICAgICBdLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBhY3Rpb25zLlNFVF9TT1JUSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNvcnRCeTogYWN0aW9uLnNvcnRCeSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcclxuXHJcbmltcG9ydCB7Y2FsbCwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge2FkZE1vdmllIGFzIGFkZE1vdmllQXBpLCBkZWxldGVNb3ZpZSBhcyBkZWxldGVNb3ZpZUFwaSwgZ2V0TW92aWVzIGFzIGdldE1vdmllc0FwaSwgdXBkYXRlTW92aWUgYXMgdXBkYXRlTW92aWVBcGl9IGZyb20gJy4uLy4uL2RhdGEvYXBpJztcclxuaW1wb3J0ICogYXMgbW92aWVzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL21vdmllcyc7XHJcblxyXG5cclxuZnVuY3Rpb24qIGZldGNoTW92aWVzKHt0aXRsZX0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbW92aWVzID0geWllbGQgZ2V0TW92aWVzQXBpKHRpdGxlKTtcclxuICAgIHlpZWxkIHB1dChtb3ZpZXNBY3Rpb25zLmdldE1vdmllc1N1Y2Nlc3MobW92aWVzKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChtb3ZpZXNBY3Rpb25zLmdldE1vdmllc0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0TW92aWVzKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShtb3ZpZXNBY3Rpb25zLkdFVF9NT1ZJRVMsIGZldGNoTW92aWVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZU1vdmllKHttb3ZpZX0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbmV3TW92aWUgPSB5aWVsZCBhZGRNb3ZpZUFwaShtb3ZpZSk7XHJcbiAgICB5aWVsZCBwdXQobW92aWVzQWN0aW9ucy5hZGRNb3ZpZVN1Y2Nlc3MobmV3TW92aWUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KG1vdmllc0FjdGlvbnMuYWRkTW92aWVFcnJvcihlcnJvcikpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRNb3ZpZSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkobW92aWVzQWN0aW9ucy5BRERfTU9WSUUsIGNyZWF0ZU1vdmllKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZU1vdmllKHttb3ZpZX0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXBkYXRlUmVzdWx0ID0geWllbGQgdXBkYXRlTW92aWVBcGkobW92aWUpO1xyXG4gICAgeWllbGQgcHV0KG1vdmllc0FjdGlvbnMudXBkYXRlTW92aWVTdWNjZXNzKHVwZGF0ZVJlc3VsdCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQobW92aWVzQWN0aW9ucy51cGRhdGVNb3ZpZUVycm9yKGVycm9yKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGVkaXRNb3ZpZSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkobW92aWVzQWN0aW9ucy5VUERBVEVfTU9WSUUsIHVwZGF0ZU1vdmllKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZU1vdmllKHttb3ZpZUlkfSkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxldGVNb3ZpZUFwaShtb3ZpZUlkKTtcclxuICAgIHlpZWxkIHB1dChtb3ZpZXNBY3Rpb25zLmRlbGV0ZU1vdmllU3VjY2Vzcyhtb3ZpZUlkKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChtb3ZpZXNBY3Rpb25zLmRlbGV0ZU1vdmllRXJyb3IoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcmVtb3ZlTW92aWUoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KG1vdmllc0FjdGlvbnMuREVMRVRFX01PVklFLCBkZWxldGVNb3ZpZSk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjYW1lbGNhc2Uta2V5c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzbmFrZWl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9