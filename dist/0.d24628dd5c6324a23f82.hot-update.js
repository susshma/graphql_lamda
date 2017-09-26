exports.id = 0;
exports.modules = {

/***/ "./src/models/customer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var customerSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    _id: {
        type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    address_line_1: {
        type: String
    },
    address_line_2: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    zip: {
        type: String
    }

});

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Customer', customerSchema));

/***/ }),

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_customer__ = __webpack_require__("./src/models/customer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dealjacket__ = __webpack_require__("./src/models/dealjacket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);



// const RootQuery = `
//   type RootQuery {
//     dealjackets: String!
//    }
// `;
// const SchemaDefinition = `
//   schema {
//     query: RootQuery
//   }
// `;
// export default makeExecutableSchema({
//  typeDefs: [SchemaDefinition, RootQuery],
//  resolvers: {
//    RootQuery: {
//     dealjackets: () => "test"
//    }
//  }
// });
//
// //Authors and Posts get data from JSON Arrays in the respective files.
// const Authors = require('./data/authors');
// const Posts = require('./data/posts');


/* Here a simple schema is constructed without using the GraphQL query language.
  e.g. using 'new GraphQLObjectType' to create an object type
*/



var DealJacketType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
  name: "Dealjacket",
  description: "Represents the deal jacket",
  fields: function fields() {
    return {
      id: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
      status: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
      applicant: {
        type: CustomerType,
        resolve: function resolve(dealjacket) {
          return __WEBPACK_IMPORTED_MODULE_1__models_customer__["Customer"];
        }
      },
      coapplicant: {
        type: CustomerType
      }
    };
  }
});

var CustomerType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
  name: "Customer",
  description: "This represent a customer",
  fields: function fields() {
    return {
      id: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
      name: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
      address: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] }
    };
  }
});

/***/ })

};