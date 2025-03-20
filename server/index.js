import express from "express";
import { connect } from "./Config/db.js";
import dotenv from "dotenv";
import productRouter from "./Routes/ProductRoute.js"

const app = express();

const port = process.env.PORT || 5050;
dotenv.config()
// http://localhost:5050/api/product/create

app.use(express.json());
// api routes
app.use("/api/product", productRouter)

app.get("/", (req,res)=>{
    res.status(200).json({success:true, message:"server is live"})
})


app.use((req,res)=>{
    res.status(404).json({success:false,errMsg:"route not found"})
})

connect()
.then( (  )=>{
    try{
        app.listen(port,()=>{
            console.log(`http://localhost:${port}`);
            
        })
    } catch (error) {
        console.log("can not connect to server" + error.message);
        
    }
})
.catch((error)=>{
    console.log("invalid database connection" + error.message);
    
})

