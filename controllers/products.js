const getAllProducts =(req,res,next) =>{
    res
    .json({
        success:true
    });
}


module.exports = {
    getAllProducts
};