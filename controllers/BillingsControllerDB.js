const Billing = require("../models/BillingModelDB");

// create Billing
let addNewBilling = (req, res) => {
    const std = new Billing({ ...req.body });


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

// let getBillings=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getBillingByID
let getBillingByID = async (req, res) => {
    let std = await Billing.findById(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Billing with the given ID wasnt found");
    }
};

/*
query:?id=1&name=ahmed&age=20
req.param: /:id
req.body
 */
//getA11Billings
let getAllBillings = async (req, res) => {
    let std = await Billing.find(req.body?req.body:{})
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("no users found");
    }
};

// updateBilling
let updateBilling = async (req, res) => {
    let std = await Billing.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Billing with the given ID wasnt found");
    }
};

//de1eteBilling
let deleteBillingById = async (req, res) => {
    let std = await Billing.findByIdAndRemove(req.query.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Billing with the given ID wasnt found");
    }
};

module.exports = {
    getBillingByID,
    addNewBilling,
    deleteBillingById,
    getAllBillings,
    updateBilling,
};
