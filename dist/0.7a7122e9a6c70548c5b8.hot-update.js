exports.id = 0;
exports.modules = {

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_customer__ = __webpack_require__("./src/models/customer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dealjacket__ = __webpack_require__("./src/models/dealjacket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql__);




var DealJacketType = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
  name: "Dealjacket",
  description: "Represents the deal jacket",
  fields: function fields() {
    return {
      _id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      status: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      applicant: {
        type: CustomerType,
        resolve: function resolve(dealjacket) {
          return { id: 1 };
        }
      },
      coapplicant: {
        type: CustomerType,
        resolve: function resolve(dealjacket) {
          return { id: 1 };
        }
      }
    };
  }
});

var CustomerType = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
  name: "Customer",
  description: "This represent a customer",
  fields: function fields() {
    return {
      _id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      name: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      address: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] }
    };
  }
});

// This is the Root Query
var DealJacketQueryRootType = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
  name: 'DealJacketSchema',
  description: "Dealjacket Query Root",
  fields: function fields() {
    return {
      dealjackets: {
        type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLList"](DealJacketType),
        description: "List of all dealjackets",
        resolve: function resolve() {
          return __WEBPACK_IMPORTED_MODULE_1__models_dealjacket__["a" /* default */].find();
        }
      }
    };
  }
});

// This is the schema declaration
var DealJacketSchema = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLSchema"]({
  query: DealJacketQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});

/* harmony default export */ __webpack_exports__["default"] = (DealJacketSchema);

/***/ })

};