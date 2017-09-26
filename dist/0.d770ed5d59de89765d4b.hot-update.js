exports.id = 0;
exports.modules = {

/***/ "./src/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_customer__ = __webpack_require__("./src/models/customer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dealjacket__ = __webpack_require__("./src/models/dealjacket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_deal__ = __webpack_require__("./src/models/deal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);





var DealJacketType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
    name: "Dealjacket",
    description: "Represents the deal jacket",
    fields: function fields() {
        return {
            _id: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            status: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            dealership: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] },
            created_by: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] },
            created_time: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] },
            applicant: {
                type: CustomerType,
                resolve: function resolve(dealjacket) {
                    return __WEBPACK_IMPORTED_MODULE_0__models_customer__["a" /* default */].findById(dealjacket.applicant);
                }
            },
            coapplicant: {
                type: CustomerType,
                resolve: function resolve(dealjacket) {
                    return __WEBPACK_IMPORTED_MODULE_0__models_customer__["a" /* default */].findById(dealjacket.coapplicant);
                }
            },
            deals: {
                type: DealType,
                resolve: function resolve(dealjacket) {
                    return __WEBPACK_IMPORTED_MODULE_2__models_deal__["a" /* default */].findById(dealjacket.deal);
                }
            }
        };
    }
});

var CustomerType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
    name: "Customer",
    description: "This represent a customer",
    fields: function fields() {
        return {
            _id: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            first_name: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            last_name: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            full_name: {
                type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"],
                resolve: function resolve(customer) {
                    return customer.first_name + ' ' + customer.last_name;
                }
            }
        };
    }
});

var DealType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
    name: "Deal",
    description: "This represent a deal",
    fields: function fields() {
        return {
            _id: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            deal_type: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            vehilce: { type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"]) },
            finance: {
                type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"],
                resolve: function resolve(customer) {
                    return customer.first_name + ' ' + customer.last_name;
                }
            }
        };
    }
});

// This is the Root Query
var DealJacketQueryRootType = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"]({
    name: 'DealJacketSchema',
    description: "Dealjacket Query Root",
    fields: function fields() {
        return {
            args: {
                type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLObjectType"],
                status: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] },
                created_by: { type: __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLString"] }
            },
            dealjackets: {
                type: new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLList"](DealJacketType),
                description: "List of all dealjackets",
                // resolve: function(root, args) {
                //     console.log(args)
                //     return DealJacket.find({},function(err, dealjackets){}).exec()
                // }
                resolve: function resolve(args) {
                    return __WEBPACK_IMPORTED_MODULE_1__models_dealjacket__["a" /* default */].find(args.status, function (err, dealjackets) {}).exec();
                }
            }
        };
    }
});

// This is the schema declaration
var DealJacketSchema = new __WEBPACK_IMPORTED_MODULE_3_graphql__["GraphQLSchema"]({
    query: DealJacketQueryRootType
    // If you need to create or updata a datasource,
    // you use mutations. Note:
    // mutations will not be explored in this post.
    // mutation: BlogMutationRootType
});

/* harmony default export */ __webpack_exports__["default"] = (DealJacketSchema);

/***/ })

};