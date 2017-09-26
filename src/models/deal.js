import mongoose from 'mongoose';

var dealSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    deal_type: {
        type: String
    },
    vehilce: {
        year: Number,
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
}, {collection:"DealList"});
var Deal = mongoose.model('Deal', dealSchema);
export default Deal;
