const validator = require("../util/Usersvalidator");

module.exports = (req, res, next) => {
    let valid = validator({
        username: req.body.username,
        email: req.body.emaillogin,
        password: req.body.passwordlogin,
    });
    if (valid) {
        req.valid = 1; // insert a new property inside the req called valid and give it 1
        next();
    } else {
        res.status(403).send("forbidden command");
    }
};
