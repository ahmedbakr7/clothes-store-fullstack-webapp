// 1) require Mongoose
const mongoose = require("mongoose");
//2) set connection in app.js
//3)create Schema
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        maxlenght: 10,
        minlenght: 3,
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    // id: {
    //     type: Number,
    //     unique: true,
    //     required: true,
    //     default:()=> generateCustomId(),
    // },
});

//4)create model
const Cart = mongoose.model("Carts", cartSchema);

module.exports = Cart;
