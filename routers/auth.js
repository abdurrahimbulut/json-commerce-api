const express = require("express");
const {
    register, getUser, login, logout, imageUpload, forgotPassword, resetPassword, editDetails
} = require("../controllers/auth");
const { profileImageUpload } = require("../middlewares/libraries/profileImageUpload");
const {
    getAccesToRoute
} = require("../middlewares/authorization/auth");
const router = express.Router();
//"api/auth/*"
router.post("/register", register);
router.post("/login", login);
router.get("/logout", getAccesToRoute, logout);
router.get("/profile", getAccesToRoute, getUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.put("/edit", getAccesToRoute, editDetails);


router.post("/upload", [getAccesToRoute, profileImageUpload.single("profile_image")], imageUpload);


module.exports = router;