// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        maxlenght:10,
        minlenght:3,
        required: true,
    },
    // id: {
    //     type: Number,
    //     unique: true,
    //     required: true,
    //     default:()=> generateCustomId(),
    // },
});


//4)create model
const Category = mongoose.model("Categories", categorySchema);

module.exports = Category;
