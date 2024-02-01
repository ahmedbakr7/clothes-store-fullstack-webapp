const Cart = require("../models/CartModelDB");

// create Cart
let addNewCart = (req, res) => {
    const std = new Cart({ ...req.body });


    std.save()
        .then(() => {
            res.json(std);
        })
        .catch((err) => {
            for (let e in err.errors) {
                console.log(err.errors[e].message);
                res.status(403).send("Bad Request.. Some Fields are missed");
            }
        });
};

// let getCarts=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getCartByID
let getCartByID = async (req, res) => {
    let std = await Cart.findById(erq.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Cart with the given ID wasnt found");
    }
};

/*
query:?id=1&name=ahmed&age=20
req.param: /:id
req.body
 */
//getA11Carts
let getAllCarts = async (req, res) => {
    let std = await Cart.findById(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("no users found");
    }
};

// updateCart
let updateCart = async (req, res) => {
    let std = await Cart.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Cart with the given ID wasnt found");
    }
};

//de1eteCart
let deleteCartById = async (req, res) => {
    let std = await Cart.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Cart with the given ID wasnt found");
    }
};

module.exports = {
    getCartByID,
    addNewCart,
    deleteCartById,
    getAllCarts,
    updateCart,
};
