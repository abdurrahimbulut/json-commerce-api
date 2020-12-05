const express = require("express");
const {
    blockUser,deleteUser
} = require("../controllers/admin");
const {
    getAccesToRoute,getAdminAccess
} = require("../middlewares/authorization/auth"); 
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();
router.use([getAccesToRoute,getAdminAccess]);
router.get("/block/:id",checkUserExist,blockUser);
router.delete("/:id",checkUserExist,deleteUser);




module.exports = router;