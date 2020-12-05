const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../../models/User");
const { isTokenIncluded, getAccesTokenFromHeaders } = require("../../helpers/authorization/tokenHelpers");
const jwt = require("jsonwebtoken");


const getAccesToRoute = (req, res, next) => {
    //console.log(req.headers.authorization);
    const { JWT_SECRET_KEY } = process.env;
    if (!isTokenIncluded(req)) {
        return next(new CustomError("you are not authorization to access this route", 401));
    }
    const accessToken = getAccesTokenFromHeaders(req);
    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("you are not authorization to access this route", 401));
        }

        //console.log(decoded);
        req.user ={
            id : decoded.id,
            name: decoded.name
        }

        next();
    });
}


const getAdminAccess = asyncErrorWrapper(async(req, res, next)=>{
    const {id} = req.user;

    const user = await User.findById(id);

    if (user.role !=="admin") {
        return next(new CustomError("Only admins can access this route",403));
    }
    next();

});



module.exports = {
    getAccesToRoute,getAdminAccess
}