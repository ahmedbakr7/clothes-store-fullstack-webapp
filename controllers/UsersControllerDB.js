const User = require("../models/UserModelDB");

// create User
let addNewUser = (req, res) => {

    const std = new User({ ...req.body });
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


// getUserByID
let getUserByID = async (req, res) => {
    let std = await User.findById(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("User with the given ID wasnt found");
    }
};

/*
query:?id=1&name=ahmed&age=20
req.param: /:id
req.body
 */
//getA11Users
let getAllUsers = async (req, res) => {
    let std = await User.find(req.body?req.body:{})
    if (std) {
        res.json(std);
        return std
    } else {
        res.status(404).send("no users found");
    }
};

// updateUser
let updateUser = async (req, res) => {
    let std = await User.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("User with the given ID wasnt found");
    }
};

//de1eteUser
let deleteUserById = async (req, res) => {
    let std = await User.findByIdAndRemove(req.params.id);
    if (std) {
        res.json(std);
    } else {
        res.status(404).send("User with the given ID wasnt found");
    }
};

module.exports = {
    getUserByID,
    addNewUser,
    deleteUserById,
    getAllUsers,
    updateUser,
};
