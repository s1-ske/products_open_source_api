const express=require("express");
const product_router=require("./src/routes/productroute")
const app=express();

app.use(express.json());

app.use("/api/v1",product_router);

module.exports=app;