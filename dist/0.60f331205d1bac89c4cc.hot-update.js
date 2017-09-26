exports.id = 0;
exports.modules = {

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);

var RootQuery = '\n  type RootQuery {\n    hello_world: String!\n   }\n';
var SchemaDefinition = '\n  schema {\n    query: RootQuery\n  }\n';
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
  typeDefs: [SchemaDefinition, RootQuery],
  resolvers: {
    RootQuery: {
      dealjackets: function dealjackets() {
        return ['Dj one', 'DJ two'];
      },
      customers: function customers() {
        return ['Customer1', 'Customer 2'];
      },
      decisions: function decisions() {
        return ['Decision1', 'Decision2'];
      }
    }
  }
}));

/***/ })

};