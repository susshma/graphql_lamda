import mongoose from 'mongoose';

var dealJacketSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    coapplicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    created_time: {
        type: String
    },
    created_by: {
        type: String
    },
    dealership: {
        type: String
    },
    deal : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deal'
    }
},{ collection: "DealJacketList"});

var DealJacket = mongoose.model('DealJacket', dealJacketSchema);
export default DealJacket
