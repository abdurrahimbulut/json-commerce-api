const express =require("express");
const dotenv =  require("dotenv");
const routers = require("./routers/index");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const connectDatabase = require("./helpers/database/connectDatabase");
const path = require("path");

//config
dotenv.config({
    path :"./config/env/config.env"
});
const app = express();
const PORT=process.env.PORT;

//Express - body parser middleware
app.use(express.json());

//Mongodb Connect
//Mongodb Bağlantısı
connectDatabase();

//routers middleware
//yönlendirme katmanı
app.use("/api",routers);

//error handler
app.use(customErrorHandler);


//public folders
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT,()=>{
    console.log("Server started ! PORT="+ PORT);
});