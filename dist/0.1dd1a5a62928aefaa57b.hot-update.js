exports.id = 0;
exports.modules = {

/***/ "./src/models/deal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var dealSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    _id: {
        type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId,
        required: true
    },
    deal_type: {
        type: String
    },
    vehilce: {
        year: String,
        make: String,
        model: String,
        trim: String
    },
    finance: {
        product_type: String,
        cash_selling_price: Number,
        unpaid_balance: Number,
        esitmated_monthly_payment: Number
    }
}, { collection: "DealList" });
var Deal = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Deal', dealSchema);
/* harmony default export */ __webpack_exports__["a"] = (Deal);

/***/ })

};