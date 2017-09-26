exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server__ = __webpack_require__("./src/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__("./src/schema.js");





var server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_2__server__["default"]);
var currentApp = __WEBPACK_IMPORTED_MODULE_2__server__["default"];
server.listen(3000, function () {
  console.log('GraphQL-server listening on port 3000.');
});
if (true) {
  module.hot.accept(["./src/server.js", "./src/schema.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__server__ = __webpack_require__("./src/server.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__("./src/schema.js"); (function () {
    server.removeListener('request', currentApp);
    server.on('request', __WEBPACK_IMPORTED_MODULE_2__server__["default"]);
    currentApp = __WEBPACK_IMPORTED_MODULE_2__server__["default"];
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

mongoose.connect('mongodb://localhost:27017/local');
var db = mongoose.connection;
db.on('error', function () {
  console.log('---FAILED to connect to mongoose');
});
db.once('openUri', function () {
  console.log('+++Connected to mongoose');
});

/***/ })

};