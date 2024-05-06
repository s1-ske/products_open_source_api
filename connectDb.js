const { error } = require("console");
const mongoose=require("mongoose");



exports.connectDb=()=>{
    mongoose.connect(process.env.URI)
    .then((res)=>{
        console.log("Db is connected sucessfully");
    })
    .catch((error)=>{
        console.log("connection failed");
    })
}