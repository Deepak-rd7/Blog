import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import db from "./Models/db.js";
import router from "./Routes/posts.js";
import cors from "cors";
import categoryRouter from "./Routes/category.js";



const app=express();
const port=3000;

//middleware any one is enough
app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
//db connection
 db.connect();

//using rooutes
app.use('/api/posts',router);
app.use('/api/categories',categoryRouter);

app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
})