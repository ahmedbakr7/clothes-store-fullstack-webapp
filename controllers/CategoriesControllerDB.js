const Category = require("../models/CategoryModelDB");

// create Category
let addNewCategory = (req, res) => {
    const std = new Category({ ...req.body });


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

// let getCategories=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getCategoryByID
let getCategoryByID = async (req, res) => {
    let std = await Category.findById(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Category with the given ID wasnt found");
    }
};

//getA11Categories
let getAllCategories = async (req, res) => {
    let std = await Category.find();
    if (std) {
        res.json("this is all categories");
    } else {
        res.status(404).send("Category with the given ID wasnt found");
    }
};

// updateCategory
let updateCategory = async (req, res) => {
    let std = await Category.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Category with the given ID wasnt found");
    }
};

//de1eteCategory
let deleteCategoryById = async (req, res) => {
    let std = await Category.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Category with the given ID wasnt found");
    }
} ;

module.exports = {
    getCategoryByID,
    addNewCategory,
    deleteCategoryById,
    getAllCategories,
    updateCategory,
};
