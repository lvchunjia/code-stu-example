"use strict";
(self["webpackChunkbabel_core_demo"] = self["webpackChunkbabel_core_demo"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


// index.js作为入口
var message = "Hello Main";
console.log(message);
function bar() {
  console.log('bar function exec~');
}
bar();

// 使用axios
axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('http://123.207.32.32:8000/home/multidata').then(function (res) {
  console.log(res);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);