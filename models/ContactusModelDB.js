// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const contactusSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlenght:10,
        minlenght:3,
        required: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    email: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
    subject: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
    message: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
});


//4)create model
const Contactus = mongoose.model("Contactus", contactusSchema);

module.exports = Contactus;
