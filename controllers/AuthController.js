const User = require("../models/UserModelDB");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    let user = new User({
        username: req.body.username,
        email: req.body.emaillogin,
        password: req.body.passwordlogin,
    });
    user.save()
        .then((user) => {

            res.redirect('/Accounts')//json({ message: "User Added Successfully" }).redirect("/Accounts");
        })
        .catch((error) => {
            res.status(403).json({ message: "an error occured" });
        });
};

const login = async (req, res,next) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ email:email })
    .then((user) => {
        if (user) {
            if(password==user.password)
            {
                res.redirect('/')
                /* const token = jwt.sign(
                    { _id: user._id },
                    process.env.SECRET,
                    { expiresIn: "60 days" })

                    res.status(200).json({
                    message: "Login Successful",
                    token,
                    });
                    */
            }
            else
            {
                res.status(403).json({
                    message: "invalide username or password",
                    user,
                });
            }
        } else { // insert proper status code
            res.status(404).json({
                message: "No user found!",
            });
        }
    })
}


module.exports = {register,login}