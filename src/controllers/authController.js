const {validationResult} = require("express-validator");

exports.getRegister = (req, res) => {
    res.render("register", {errors: []});
}

exports.postRegister = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
       return res.render("register", {
        errors: errors.array()
       })
    }

    res.render("home");
}

exports.getLogin = (req, res) => {
    res.render("login");
}