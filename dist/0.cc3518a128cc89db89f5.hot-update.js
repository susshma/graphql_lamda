exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_server_express__ = __webpack_require__("graphql-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__("./src/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use('/graphiql', Object(__WEBPACK_IMPORTED_MODULE_2_graphql_server_express__["graphiqlExpress"])({
  endpointURL: '/graphql'
}));
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json(), Object(__WEBPACK_IMPORTED_MODULE_2_graphql_server_express__["graphqlExpress"])({ schema: __WEBPACK_IMPORTED_MODULE_3__schema__["default"] }));
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};