// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const billingSchema = new mongoose.Schema({
    cardnumber: {
        type: String,
        minlenght:3,
        required: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
    zipcode: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
    // id: {
    //     type: Number,
    //     unique: true,
    //     required: true,
    //     default:()=> generateCustomId(),
    // },
});


//4)create model
const Billing = mongoose.model("Billings", billingSchema);

module.exports = Billing;
