exports.id = 0;
exports.modules = {

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_customer__ = __webpack_require__("./src/models/customer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dealjacket__ = __webpack_require__("./src/models/dealjacket.js");



var RootQuery = '\n  type RootQuery {\n    dealjackets: String!\n   }\n';
var SchemaDefinition = '\n  schema {\n    query: RootQuery\n  }\n';
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
  typeDefs: [SchemaDefinition, RootQuery],
  resolvers: {
    RootQuery: {
      dealjackets: function dealjackets() {
        return "test";
      }
    }
  }
}));

/***/ })

};