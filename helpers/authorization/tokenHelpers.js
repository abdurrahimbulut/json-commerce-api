const sendJwtToClient = (user, res) => {
    const token = user.generateJwtFromUser();
    //console.log(token);
    const { JWT_COOKIE, NODE_ENV } = process.env;
    return res
        .status(200)
        .cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60 ),
            secure: NODE_ENV === "development" ? false : true
        })
        .json({
            success: true,
            access_token: token,
            data: {
                name: user.name,
                email: user.email
            }
        });
}


const isTokenIncluded = req => {
    return req.headers.authorization && req.headers.authorization.startsWith("Barer:")
}

const getAccesTokenFromHeaders = req => {
    const authorization = req.headers.authorization;
    let accesToken;
    if (authorization) {

        accesToken = authorization.split(" ")[1];
    }
    return accesToken;
}

module.exports = { sendJwtToClient, isTokenIncluded, getAccesTokenFromHeaders };