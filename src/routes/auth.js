const express = require("express");
const Router = express.Router();
const authController = require("../controllers/authController");
const {validateRegister} = require("../middlewares/validations/authValidation");

Router.get("/register", authController.getRegister);
Router.post("/register", validateRegister ,authController.postRegister);

Router.get("/login", authController.getLogin);

module.exports = Router;