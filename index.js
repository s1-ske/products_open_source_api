const app=require("./app");
const {connectDb}=require("./connectDb")

require("dotenv").config({path:".env"})

connectDb();




app.listen(process.env.port,()=>{
    console.log(`your server is working at ${process.env.port}`)
})