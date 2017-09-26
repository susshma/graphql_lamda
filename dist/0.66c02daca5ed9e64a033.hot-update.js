exports.id = 0;
exports.modules = {

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dealjacket__ = __webpack_require__("./src/models/dealjacket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql__);

// import { Customer } from './models/customer';

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



var DealJacketType = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
  name: "Dealjacket",
  description: "Represents the deal jacket",
  fields: function fields() {
    return {
      id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      status: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
      applicant: {
        type: CustomerType,
        resolve: function resolve(dealjacket) {
          return Customer;
        }
      },
      coapplicant: {
        type: CustomerType,
        resolve: function resolve(dealjacket) {
          return Customer;
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
      id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
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
        type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLList"](AuthorType),
        description: "List of all Authors",
        resolve: function resolve() {
          return Authors;
        }
      },
      posts: {
        type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLList"](PostType),
        description: "List of all Posts",
        resolve: function resolve() {
          return Posts;
        }
      }
    };
  }
});

// This is the schema declaration
var BlogAppSchema = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLSchema"]({
  query: BlogQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});

/***/ })

};