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
        type: CustomerType
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
      address: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] },
      author: {
        type: AuthorType,
        resolve: function resolve(post) {
          return _.find(Authors, function (a) {
            return a.id == post.author_id;
          });
        }
      }
    };
  }
});

/***/ })

};