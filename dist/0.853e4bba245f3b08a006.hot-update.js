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

}, { collection: "CustomerList" });

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Customer', customerSchema));

/***/ })

};