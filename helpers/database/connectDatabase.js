const mongose = require("mongoose");

const  connectDatabase=()=>{
    mongose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connected database");
        //connected database
        //veritabanına bağlanıldı
    })
    .catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDatabase;