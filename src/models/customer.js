import mongoose from 'mongoose';

var customerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
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
}, {collection:"CustomerList"});
var Customer = mongoose.model('Customer', customerSchema);
export default Customer;
