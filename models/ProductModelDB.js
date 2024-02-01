// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlenght:50,
        trim: true,
        required: true,
    },
    imgsrc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min:0,
        required: true,
    },
    description: {
        type: String,
        maxlenght:1000,
        trim: true,
    },
    details: {
        type: String,
        trim: true,
        maxLength: 1000,
    },
    producttype: {
        type: String,
        maxLength: 50,
        required: true,
    },
    gender: {
        type: String,
        maxLength: 10,
        required: true,
    },

});


//4)create model
const Product = mongoose.model("Products", productSchema);

module.exports = Product;