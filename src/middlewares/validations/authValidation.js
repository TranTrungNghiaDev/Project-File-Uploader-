const {body} = require("express-validator");

const validateRegister = [
    body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({min: 6, max: 16}).withMessage("Username must be between 6 and 16 characters long")
    ,
    body("password")
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({min: 6, max: 16}).withMessage("Password must be between 6 and 16 characters long")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase character")
    .matches(/\d/).withMessage("Password must contain at least one number")
    ,
    body("confirmPassword")
    .trim()
    .custom((value, {req}) => {
        if(value !== req.body.password) {
            throw new Error("Confirm password does not match password");
        }
        return true;
    })
    ,
    body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email is not valid")
    ,
    body("displayName")
    .trim()
    .notEmpty().withMessage("Display name is required")
    .isLength({min: 6, max: 16}).withMessage("Display name must be between 6 and 16 characters long")
]

module.exports = {validateRegister}