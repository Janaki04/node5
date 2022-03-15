const express=require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("LOGIN PROCEDURE")
})

app.listen(8000,()=>{
    console.log("Application started");
})