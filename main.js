/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/webfonts/moonlesssc-regular_1-webfont.woff2 */ \"./src/assets/webfonts/moonlesssc-regular_1-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/webfonts/moonlesssc-regular_1-webfont.woff */ \"./src/assets/webfonts/moonlesssc-regular_1-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.jpg */ \"./src/assets/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/loading-icon.png */ \"./src/assets/images/loading-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* css resets */\\n\\n*, html, body, a, ul {\\n    box-sizing: border-box;\\n    color: inherit;\\n    list-style: none;\\n    margin: 0;\\n    padding: 0;\\n    text-decoration: none;\\n}\\n\\n@font-face {\\n    font-family: \\\"moonless\\\";\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-style: normal;\\n    font-weight: normal;\\n}\\n\\nbody {\\n    font-family: \\\"moonless\\\", sans-serif;\\n    min-height: 100vh; \\n}\\n\\n.layout-wrapper {\\n    display: flex;    \\n}\\n\\nmain {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-position: center;\\n    background-size: cover;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 40px;\\n    width: 100%;\\n}\\n\\n/* Nav section */\\n\\nnav {\\n    background-color: #B73E3E;\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n    gap: 10px;\\n    min-height: 100vh;\\n    min-width: 350px;\\n    padding: 10px;\\n}\\n\\nheader {\\n    display: grid;\\n    font-size: 1.8rem;\\n    padding: 10px;\\n    place-items: center;\\n}\\n\\ninput[type=text] {\\n    border: 1px solid black;\\n    border-radius: 20px;\\n    font-size: 1.1rem;\\n    padding: 5px 10px;\\n    width: 100%;\\n}\\n\\n.button-container {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.button-container button {\\n    flex-grow: 1;\\n    width: 40%;\\n}\\n\\nbutton {\\n    background-color: rgb(255, 231, 204);\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    font-family: \\\"moonless\\\", sans-serif;\\n    font-size: 1.3rem;\\n    padding: 3px 13px;\\n\\n    transition: ease-in-out all .1s;\\n    -webkit-transition: ease-in-out all .1s;\\n    -moz-transition: ease-in-out all .1s;\\n    -o-transition: ease-in-out all .1s;\\n}\\n\\nbutton:hover {\\n    background-color: rgb(185, 161, 134);\\n}\\n\\n/* Startup section */\\n\\n.startup-container {\\n    display: grid;\\n    height: 100%;\\n    place-items: center;\\n    text-align: center;\\n    width: 100%;\\n}\\n\\n.startup-container .search-button {\\n    margin-left: 10px;\\n}\\n\\n.startup-container input[type=text] {\\n    width: 350px;\\n}\\n\\n/* Forecast section */\\n\\n.forecast-container {\\n    flex-grow: 1;\\n}\\n\\n.current-forecast-container {\\n    background-color: rgba(255, 185, 104, 1);\\n    border-radius: 10px;\\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\\n    display: flex;\\n    height: 400px;\\n}\\n\\n.current-forecast-image {\\n    background-position: center;\\n    background-size: cover;\\n    border-top-left-radius: 10px;\\n    border-bottom-left-radius: 10px;\\n    height: 100%;\\n    width: 65%;\\n}\\n\\n.current-forecast-info {\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 2rem;\\n    padding: 20px;\\n}\\n\\n.current-forecast-info .para-location {\\n    font-size: 4rem;\\n}\\n\\n.current-forecast-info .para-temp {\\n    font-size: 3.2rem;\\n}\\n\\n.current-forecast-info .para-weather {\\n    margin-top: 10px;\\n}\\n\\n.forecast-card-stack {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\\n    gap: 20px;\\n    margin: 20px 0;\\n}\\n\\n.forecast-card {\\n    background-color: rgba(255, 185, 104, 1);\\n    border-radius: 10px;\\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\\n    height: 300px;\\n}\\n\\n.card-image {\\n    background-position: center;\\n    background-size: cover;\\n    height: 40%;\\n    border-top-left-radius: 10px;\\n    border-top-right-radius: 10px;\\n}\\n\\n.forecast-card .card-info {\\n    padding: 10px;\\n}\\n\\n.forecast-card .para-date {\\n    font-size: 2rem;\\n}\\n\\n.forecast-card p {\\n    font-size: 1.5rem;\\n}\\n\\n/* Loading */\\n\\n@keyframes rotating-animation {\\n    0% {\\n        transform: rotate(0deg);\\n    }\\n    99% {\\n        transform: rotate(359deg)\\n    }\\n}\\n\\n.loading-container {\\n    background-color: rgba(100, 100, 100, 0.5);\\n    border-radius: 10px;\\n    display: grid;\\n    height: 100%;\\n    place-items: center;\\n    width: 100%;\\n}\\n\\n.loading-icon {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-position: center;\\n    background-size: cover;\\n    height: 200px;\\n    width: 200px;\\n\\n    animation: rotating-animation 2s infinite linear;\\n}\\n\\n/* Modals */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\n\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _utilities_apiManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/apiManager */ \"./src/utilities/apiManager.js\");\n/* harmony import */ var _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/domManager */ \"./src/utilities/domManager.js\");\n\n\n\n\nasync function showForecast(inputBar) {\n  _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeMain()\n  _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showLoading()\n  try {\n    const weatherData = await _utilities_apiManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeLocationSearch(inputBar.value)\n    _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeMain()\n    _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showCurrentForecast(weatherData, _utilities_apiManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrentUnits())\n  } catch(err) {\n    _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showErrorModal()\n  }\n  \n}\n\n_utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initHome()\n\nconst navSearchBar = document.querySelector('#nav-location-input')\nconst navSearchButton = document.querySelector('nav .search-button')\nnavSearchButton.addEventListener('click', () => {\n  showForecast(navSearchBar)\n})\n\nconst startupSearchBar = document.querySelector('#startup-location-input')\nconst startupSearchButton = document.querySelector('.startup-container .search-button')\nstartupSearchButton.addEventListener('click', () => {\n  showForecast(startupSearchBar)\n})\n\nconst unitButton = document.querySelector('.unit-button')\nunitButton.addEventListener('click', () => {\n  const newUnits = _utilities_apiManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeApiUnits()\n  _utilities_domManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateUnitText(newUnits)\n})\n\n// async function initialForecastTest() {\n//   const weatherData = await api.makeLocationSearch('Bristol')\n//   dom.removeMain()\n//   dom.showCurrentForecast(weatherData, api.getCurrentUnits())\n// }\n\n// initialForecastTest()\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utilities/apiManager.js":
/*!*************************************!*\
  !*** ./src/utilities/apiManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/addDays/index.js\");\n\n\nconst apiManager = (() => {\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n\n  let units = 'metric'\n  const apiKey = '43df7ed317e5646ac516d5c73acdd3fc'\n\n  const noNumRegEx = /\\d/\n  const lonLatRegEx = /^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$/\n  const usZipRegEx = /\\^[0-9]{5}(?:-[0-9]{4})?$/\n  const gbPostRegEx = /^[A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}$/i\n\n  function checkSearchType(searchTerm) {\n    if (!searchTerm.match(noNumRegEx)) return 'locationName'\n    if (searchTerm.match(gbPostRegEx)) return 'postcodeGB'\n    if (searchTerm.match(usZipRegEx)) return 'postcodeUS'\n    if (searchTerm.match(lonLatRegEx)) return 'lonLat'\n    return 'unknown'\n  }\n\n  function createSearchQuery(searchTerm, searchType) {\n    let searchQuery\n\n    if (searchType === 'locationName' || searchType === 'unknown') searchQuery = `direct?q=${searchTerm}`\n    if (searchType === 'postcodeGB') searchQuery = `zip?zip=${searchTerm},GB`\n    if (searchType === 'postcodeUS') searchQuery = `zip?zip=${searchTerm},US`\n    if (searchType === 'lonLat') {\n      const splitSearch = searchTerm.replace(/\\s/, '').split(',')\n      searchQuery = `reverse?lat=${splitSearch[0]}&lon=${splitSearch[1]}`\n    }\n    return searchQuery\n  }\n\n  function createDateArray() {\n    const dateArr = []\n    const today = new Date()\n\n    for (let i = 0; i < 7; i += 1) {\n      const simulatedDate =  (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(today, i)\n      dateArr.push(simulatedDate)\n    }\n    return dateArr\n  }\n\n  async function getLocationData(searchTerm) {\n    const searchType = checkSearchType(searchTerm)\n    const searchQuery = createSearchQuery(searchTerm, searchType)\n\n    const response = await fetch(\n      `http://api.openweathermap.org/geo/1.0/${searchQuery}&limit=1&appid=${apiKey}`,\n      {mode: 'cors'},\n    )\n    const data = await response.json()\n\n    // If the search is for postcode, \n    if (searchType === 'postcodeGB' || searchType === 'postcodeUS') {\n      return {\n        name: data.name,\n        lat: data.lat,\n        lon: data.lon\n      }\n    }\n    return {\n      name: data[0].name,\n      lat: data[0].lat,\n      lon: data[0].lon\n    }\n  }\n\n  async function getWeatherData(lat, lon) {\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,\n      {mode: 'cors'},\n    )\n    const responseData = await response.json()\n    const dateArr = createDateArray()\n\n    return {\n      name: responseData.city.name,\n      forecast: [\n        {\n          day: days[dateArr[0].getDay()],\n          date: `${[dateArr[0].getDate()]} ${months[dateArr[0].getMonth()]}`,\n          temp: Math.floor(responseData.list[0].main.temp),\n          weather: {\n            weatherID: responseData.list[0].weather[0].id,\n            weatherType: responseData.list[0].weather[0].description\n          },\n          feelsLike: Math.floor(responseData.list[0].main.feels_like),\n          windSpeed: responseData.list[0].wind.speed\n        },\n        {\n          day: days[dateArr[1].getDay()],\n          date: `${dateArr[1].getDate()} ${months[dateArr[1].getMonth()]}`,\n          temp: Math.floor(responseData.list[8].main.temp),\n          weather: {\n            weatherID: responseData.list[8].weather[0].id,\n            weatherType: responseData.list[8].weather[0].description\n          },\n          feelsLike: Math.floor(responseData.list[8].main.feels_like),\n          windSpeed: responseData.list[8].wind.speed\n        },\n        {\n          day: days[dateArr[2].getDay()],\n          date: `${dateArr[2].getDate()} ${months[dateArr[2].getMonth()]}`,\n          temp: Math.floor(responseData.list[16].main.temp),\n          weather: {\n            weatherID: responseData.list[16].weather[0].id,\n            weatherType: responseData.list[16].weather[0].description\n          },\n          feelsLike: Math.floor(responseData.list[16].main.feels_like),\n          windSpeed: responseData.list[16].wind.speed\n        },\n        {\n          day: days[dateArr[3].getDay()],\n          date: `${dateArr[3].getDate()} ${months[dateArr[3].getMonth()]}`,\n          temp: Math.floor(responseData.list[24].main.temp),\n          weather: {\n            weatherID: responseData.list[16].weather[0].id,\n            weatherType: responseData.list[16].weather[0].description\n          },\n          feelsLike: Math.floor(responseData.list[24].main.feels_like),\n          windSpeed: responseData.list[24].wind.speed\n        },\n        {\n          day: days[dateArr[4].getDay()],\n          date: `${dateArr[4].getDate()} ${months[dateArr[4].getMonth()]}`,\n          temp: Math.floor(responseData.list[32].main.temp),\n          weather: {\n            weatherID: responseData.list[32].weather[0].id,\n            weatherType: responseData.list[32].weather[0].description\n          },\n          feelsLike: Math.floor(responseData.list[32].main.feels_like),\n          windSpeed: responseData.list[32].wind.speed\n        },\n      ]\n    }\n  }\n\n  // Return functions\n\n  async function makeLocationSearch(location) {\n    let weatherData\n    try {\n      const locationData = await getLocationData(location)\n      weatherData = await getWeatherData(locationData.lat, locationData.lon)\n    } catch(err) {\n      console.log(err)\n      weatherData = false\n    }\n    return weatherData\n  }\n\n  function getCurrentUnits() {\n    return units\n  }\n\n  function changeApiUnits() {\n    if (units === 'imperial') {\n      units = 'metric'\n    } else {\n      units = 'imperial'\n    }\n    return units\n  }\n\n  return {\n    makeLocationSearch,\n    getCurrentUnits,\n    changeApiUnits,\n  }\n\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiManager);\n\n//# sourceURL=webpack://weather-app/./src/utilities/apiManager.js?");

/***/ }),

/***/ "./src/utilities/domManager.js":
/*!*************************************!*\
  !*** ./src/utilities/domManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\nconst domManager = (() => {\n  const imageLibrary = {\n    clouds: 'assets/images/cloud.jpg',\n    fog: 'assets/images/fog.jpeg',\n    rain: 'assets/images/rain.jpeg',\n    snow: 'assets/images/snow.jpeg',\n    sunny: 'assets/images/sunny.jpeg',\n    storm: 'assets/images/storm.jpeg',\n  }\n\n  // Utility functions\n\n  function createClassElement(element, ...classes) {\n    const newElement = document.createElement(element)\n    classes.forEach((className) => newElement.classList.add(className))\n    return newElement\n  }\n\n  function createTextElement(element, text) {\n    const newElement = document.createElement(element)\n    newElement.textContent = text\n    return newElement\n  }\n\n  HTMLElement.prototype.appendChildren = function appendChildren(...elementsToAppend) {\n    elementsToAppend.forEach((element) => this.appendChild(element))\n    return this\n  }\n\n  HTMLElement.prototype.setAttributes = function setAttributes(attributeObject) {\n    Object.keys(attributeObject).forEach((key) => this.setAttribute(key, attributeObject[key]))\n  }\n\n  function retrieveWeatherImage(weatherID) {\n    if (weatherID.match(/^800/)) return imageLibrary.sunny\n    if (weatherID.match(/^8/)) return imageLibrary.clouds\n    if (weatherID.match(/^(3|5)/)) return imageLibrary.rain\n    if (weatherID.match(/^2/)) return imageLibrary.storm\n    if (weatherID.match(/^6/)) return imageLibrary.snow\n    return imageLibrary.fog\n  }\n\n  // Dom creation functions\n\n  const layoutWrapper = createClassElement('div', 'layout-wrapper')\n  document.body.appendChild(layoutWrapper)\n\n  function createHeaderElement() {\n    const header = document.createElement('header')\n    const logo = createTextElement('h1', 'Whatever\\'s the Weather')\n    header.appendChild(logo)\n    return header\n  }\n\n  function createSearchBar(inputName) {\n    const locationInput = document.createElement('input')\n    locationInput.setAttributes({\n      'type': 'text',\n      'name': inputName,\n      'id': inputName,\n      'placeholder': 'City, Town or Village',\n      'minLength': 2,\n      'maxLength': 100,\n      'required': ''\n    })\n    return locationInput\n  }\n\n  function createButtonContainer() {\n    const buttonContainer = createClassElement('div', 'button-container')\n    const unitButton = createTextElement('button', 'Metric')\n    unitButton.classList.add('unit-button')\n    const searchButton = createTextElement('button', 'search')\n    searchButton.classList.add('search-button')\n    return buttonContainer.appendChildren(unitButton, searchButton)\n  }\n\n  function createSearchInput() {\n    const label = document.createElement('label')\n    label.setAttribute('for', 'nav-location-input')\n    const locationInput = createSearchBar('nav-location-input')\n    label.appendChild(locationInput)\n    const buttonContainer = createButtonContainer()\n\n    return [label, buttonContainer]\n  }\n\n  function createForecastInfo(location, weatherForecast, unit) {\n    const forecastInfo = createClassElement('div', 'current-forecast-info')\n\n    const paraLocation = createClassElement('p', 'para-location')\n    const paraDate = createClassElement('p', 'para-date')\n    const paraTemperature = createClassElement('p', 'para-temp')\n    const paraWeather = createClassElement('p', 'para-weather')\n    const paraFeelsLike = createClassElement('p', 'para-feels-like')\n    const paraWindSpeed = createClassElement('p', 'para-wind-speed')\n    \n    paraLocation.textContent = location\n    paraDate.textContent = `${weatherForecast.day} ${weatherForecast.date}`\n    paraWeather.textContent = weatherForecast.weather.weatherType\n\n    if (unit === 'metric') {\n      paraTemperature.textContent = `${weatherForecast.temp}°C`\n      paraFeelsLike.textContent = `Feels like: ${weatherForecast.feelsLike}°C`\n      paraWindSpeed.textContent = `Wind speed: ${weatherForecast.windSpeed}m/s`\n    } else {\n      paraTemperature.textContent = `${weatherForecast.temp}°F`\n      paraFeelsLike.textContent = `Feels like: ${weatherForecast.feelsLike}°F`\n      paraWindSpeed.textContent = `Wind speed: ${weatherForecast.windSpeed}mph`\n    }\n\n    return forecastInfo.appendChildren(\n      paraLocation,\n      paraDate,\n      paraTemperature,\n      paraWeather,\n      paraFeelsLike,\n      paraWindSpeed\n    )\n  }\n\n  // Update following function with suitable object access notation\n  function createMainForecast(location, weatherForecast, unit) {\n    const wrapperDiv = createClassElement('div', 'current-forecast-container')\n\n    const forecastImage = createClassElement('div', 'current-forecast-image')\n    forecastImage.style.backgroundImage = `url('${retrieveWeatherImage(weatherForecast.weather.weatherID.toString())}')`\n    const forecastInfo = createForecastInfo(location, weatherForecast, unit)\n\n    return wrapperDiv.appendChildren(\n      forecastImage,\n      forecastInfo)\n  }\n\n  // Update following function with suitable object access notation\n  function createCardDeck(weather, units) {\n    const createCardInfo = (day) => {\n      const cardInfo = createClassElement('div', 'card-info')\n      const paraDate = createClassElement('p', 'para-date')\n      const paraWeather = createClassElement('p', 'para-weather')\n      const paraTemperature = createClassElement('p', 'para-temperature')\n      const paraFeelsLike = createClassElement('p', 'para-feels-like')\n      const paraWindSpeed = createClassElement('p', 'paraWindSpeed')\n\n      paraDate.textContent = `${day.day} ${day.date}`\n      paraWeather.textContent = day.weather.weatherType\n\n      if (units === 'metric') {\n        paraTemperature.textContent = `${day.temp}°C`\n        paraFeelsLike.textContent = `Feels like: ${day.feelsLike}°C`\n        paraWindSpeed.textContent = `Wind speed: ${day.windSpeed}m/s`\n      } else {\n        paraTemperature.textContent = `${day.temp}°F`\n        paraFeelsLike.textContent = `Feels like: ${day.feelsLike}°F`\n        paraWindSpeed.textContent = `Wind speed: ${day.windSpeed}mph`\n      }\n\n      return cardInfo.appendChildren(\n        paraDate,\n        paraWeather,\n        paraTemperature,\n        paraFeelsLike,\n        paraWindSpeed\n      )\n         \n    }\n\n    const createForecastCard = (weatherInfo, containerElement) => {\n      weatherInfo.forEach((day) => {\n        console.log(day)\n        const card = createClassElement('div', 'forecast-card')\n        const cardImage = createClassElement('div', 'card-image')\n        cardImage.style.backgroundImage = `url('${retrieveWeatherImage(day.weather.weatherID.toString())}')`\n        const cardInfo = createCardInfo(day)\n\n        card.appendChildren(\n          cardImage,\n          cardInfo,\n        )\n        containerElement.appendChild(card)\n      })\n    }\n\n    const cardStack = createClassElement('div', 'forecast-card-stack')\n    console.log(weather)\n    createForecastCard(weather, cardStack)\n    return cardStack\n  }\n\n  function createMainElement() {\n    return document.createElement('main')\n  }\n\n  function createNavElement() {\n    const navElement = document.createElement('nav')\n    const header = createHeaderElement()\n    const locationSearch = createSearchInput()\n    return navElement.appendChildren(header, locationSearch[0], locationSearch[1])\n  }\n\n  function createStartupPage() {\n    const startupContainer = createClassElement('div', 'startup-container')\n    const startupImage = document.createElement('div')\n    const startupInput = createSearchBar('startup-location-input')\n    const searchButton = createTextElement('button', 'Search')\n    searchButton.classList.add('search-button')\n    startupImage.appendChildren(startupInput, searchButton)\n    startupContainer.appendChild(startupImage)\n    return startupContainer\n  }\n\n  function createForecastContainer(weatherInfo, units) {\n    const forecastContainer = createClassElement('div', 'forecast-container')\n    return forecastContainer.appendChildren(\n      createMainForecast(weatherInfo.name, weatherInfo.forecast[0], units),\n      createCardDeck(weatherInfo.forecast.slice(1), units),\n    )\n  }\n\n  function createLoadingContainer() {\n    const loadingContainer = createClassElement('div', 'loading-container')\n    const loadingIcon = createClassElement('div', 'loading-icon')\n    loadingContainer.append(loadingIcon)\n    return loadingContainer\n  }\n\n  function showDashboard() {\n    layoutWrapper.appendChild(createNavElement())\n    layoutWrapper.appendChild(createMainElement())\n  }\n\n  function showStartupMain() {\n    let main = document.querySelector('main')\n    if (!main) {\n      main = document.createElement('main')\n      layoutWrapper.appendChild(main)\n    }\n    main.appendChild(createStartupPage())\n  }\n\n  // Return functions\n\n  function initHome() {\n    showDashboard()\n    showStartupMain()\n  }\n\n  function showCurrentForecast(weatherInfo, unitInfo) {\n    const units = unitInfo || 'metric'\n\n    let main = document.querySelector('main')\n    if (!main) {\n      main = document.createElement('main')\n      layoutWrapper.appendChild(main)\n    }\n    main.appendChild(createForecastContainer(weatherInfo, units))\n  }\n\n  function showLoading() {\n    let main = document.querySelector('main')\n    if (!main) {\n      main = document.createElement('main')\n      layoutWrapper.appendChild(main)\n    }\n    main.appendChild(createLoadingContainer())\n  }\n\n  function showErrorModal() {\n    \n  }\n\n  function updateUnitText(newUnits) {\n    const unitButtons = document.querySelectorAll('.unit-button')\n    unitButtons.forEach(button => {\n      button.textContent = newUnits\n    })\n  }\n\n  function removeMain() {\n    document.querySelector('main').remove()\n  }\n\n  return {\n    initHome,\n    showCurrentForecast,\n    showLoading,\n    updateUnitText,\n    removeMain,\n  }\n\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);\n\n//# sourceURL=webpack://weather-app/./src/utilities/domManager.js?");

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2183e701601ebf91b856.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/background.jpg?");

/***/ }),

/***/ "./src/assets/images/loading-icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/loading-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1c3f82d15fc1212c5ef.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/loading-icon.png?");

/***/ }),

/***/ "./src/assets/webfonts/moonlesssc-regular_1-webfont.woff":
/*!***************************************************************!*\
  !*** ./src/assets/webfonts/moonlesssc-regular_1-webfont.woff ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd684b1b0a7e67aa7cc5.woff\";\n\n//# sourceURL=webpack://weather-app/./src/assets/webfonts/moonlesssc-regular_1-webfont.woff?");

/***/ }),

/***/ "./src/assets/webfonts/moonlesssc-regular_1-webfont.woff2":
/*!****************************************************************!*\
  !*** ./src/assets/webfonts/moonlesssc-regular_1-webfont.woff2 ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd8496afcdb80a4ca886.woff2\";\n\n//# sourceURL=webpack://weather-app/./src/assets/webfonts/moonlesssc-regular_1-webfont.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;