const express = require("express");
const products = require("./products");
const auth = require("./auth");
const user = require("./user");
const admin = require("./admin");


const router = express.Router();

//"api/*"

router.use("/products",products);

router.use("/auth",auth);

router.use("/user",user);

router.use("/admin",admin);




module.exports = router;