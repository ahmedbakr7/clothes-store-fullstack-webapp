const Contactus = require("../models/ContactusModelDB");

// create Contactus
let addNewContactus = (req, res) => {
    const std = new Contactus({ ...req.body });


    std.save()
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            for (let e in err.errors) {
                console.log(err.errors[e].message);
                res.status(400).send("Bad Request.. Some Fields are missed");
            }
        });
};

// let getContactuss=async (req,res)=>{
//     let stds=req.body
//     let result = await Student.find({stds}) . limit(S) .sort({fn:1}).select({fn:1}) ;    // 1 for ascending, -1 for descending

//     catch((err)=>{
//     for (let e in err.errors){
//     console.log(err.errors[e].message);
//     res.status(400).send("Bad Request.. Some Fields are missed")
//     }
//     })
// }

// getContactusByID
let getContactusByID = async (req, res) => {
    let std = await Contactus.findById(req.params.id);

    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Contactus with the given ID wasnt found");
    }
};

//getA11Contactuss
let getAllContactus = async (req, res) => {
    let std = await Contactus.find(req.body?req.body:{})
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Contactus with the given ID wasnt found");
    }
};


// updateContactus
let updateContactus = async (req, res) => {
    let std = await Contactus.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Contactus with the given ID wasnt found");
    }
};

//de1eteContactus
let deleteContactusById = async (req, res) => {
    let std = await Contactus.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("Contactus with the given ID wasnt found");
    }
};

module.exports = {
    getContactusByID,
    addNewContactus,
    deleteContactusById,
    getAllContactus,
    updateContactus,
};
