const express = require("express");
const {
    getAllProducts
}= require("../controllers/products");
const router= express.Router();
//"api/products/*"
router.get("/",getAllProducts);


module.exports = router;