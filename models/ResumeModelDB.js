// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const resumeSchema = new mongoose.Schema({
    name: {
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
    birthDate: {
        type: String,
        trim: true,
    },
    cv: {
        type: String,
        maxlenght:20,
        minlenght:4,
        trim: true,
    },
    job: {
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
const Resume = mongoose.model("Resumes", resumeSchema);

module.exports = Resume;
