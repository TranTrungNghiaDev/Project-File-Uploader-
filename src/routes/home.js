const express = require("express");
const Router = express.Router();
const homeController = require("../controllers/homeController");


Router.get("/", homeController.getHome);

module.exports = Router;