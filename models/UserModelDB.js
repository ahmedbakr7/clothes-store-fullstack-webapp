// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxlenght:10,
        minlenght:3,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
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
const User = mongoose.model("Users", userSchema);

module.exports = User;
