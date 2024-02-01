const Product = require("../models/ProductModelDB");

// create Product
let addNewProduct = (req, res) => {
    let std = new Product({
        title: req.body.title,
        imgsrc: req.body.imgsrc,
        price: req.body.price,
        description: req.body.description?req.body.description:"",
        details: req.body.details?req.body.details:"",
        producttype:req.body.producttype,
        gender:req.body.gender
    });

    std.save()
        .then(() => {
            res.json(std);
        })
        .catch((err) => {
            for (let e in err.errors) {
                console.log(err.errors[e].message);
                res.status(400).send("Bad Request.. Some Fields are missed");
            }
        });
};

// let getProducts=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getProductByID
let getProductByID = async (req, res) => {
    let std = await Product.findById(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Product with the given ID wasnt found");
    }
};

//getA11Products
let getAllProducts = async (req, res) => {
    let std = await Product.find();
    if (std) {
        res?.json(std);
        return std
    } else {
        res.status(404).send("Product with the given ID wasnt found");
    }
};

// updateProduct
let updateProduct = async (req, res) => {
    let std = await Product.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Product with the given ID wasnt found");
    }
};

//de1eteProduct
let deleteProductById = async (req, res) => {
    let std = await Product.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Product with the given ID wasnt found");
    }
};

module.exports = {
    getProductByID,
    addNewProduct,
    deleteProductById,
    getAllProducts,
    updateProduct,
};
