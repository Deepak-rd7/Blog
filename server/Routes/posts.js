import express from "express";

const router=express.Router();

import db from "../Models/db.js";


//Get all post
router.get("/",async (req,res)=>{
    try {
        const result=await db.query("SELECT * FROM blog");
        res.json(result.rows);
        
    } catch (error) {
        res.status(500).json(error.message);
        
    }
})

//Get a specific post by id

router.get("/:id",async (req,res)=>{
    const id=req.params.id;
    try {

        const result=await db.query("SELECT * FROM blog WHERE id=$1",[id]);

        if(result.rows.length===0){
            return res.status(404).json("Post Not found");
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//create a new post 

router.post("/",async (req,res)=>{
    const {title,content,category,author,image_path}=req.body;
    try {
        const result = await db.query("INSERT INTO blog(title,content,category,author,image_path) VALUES($1,$2,$3,$4,$5)RETURNING *",[title,content,category,author,image_path]);
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json("Error in posting Data");
    }
})

//update the data
router.put("/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        // let currentDate=new Date();
        const response=await db.query("SELECT * FROM blog WHERE id=$1",[id]);
        const s_Row=response.rows[0];
        // console.log(s_Row);
        if(response.rows.length===0){
            res.status(404).json("Post not found");
        }

        const obj={
            title: req.body.title || s_Row.title,
            content: req.body.content || s_Row.content,
            category: req.body.category || s_Row.category,
            author: req.body.author || s_Row.author,
            image_path: req.body.image_path || s_Row.image_path,
            // updated_at:currentDate
        }
        // console.log(obj.content);

        const result=await db.query("UPDATE blog SET title=($1),content=($2),category=($3),author=($4),image_path=($5),updated_at=NOW() WHERE id=$6 RETURNING *" ,
            [obj.title,obj.content,obj.category,obj.author,obj.image_path,id]
        )
        
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//delete a post
router.delete("/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        const response=await db.query("SELECT * FROM blog WHERE id=$1",[id]);
        if(response.rows.length===0){
            res.status(404).json("Post not found");
        }
        await db.query("DELETE FROM blog WHERE id=$1",[id]);
        res.json("Post deleted");

    } catch (error) {
        res.status(500).json("Error in deleting");
    }
})

router.get("/category/:id",async (req,res)=>{
    const id=req.params.id;
    try {
        const response=await db.query("SELECT b.id,b.title,b.content,b.category,b.author,b.image_path,b.created_at  FROM blog AS b LEFT JOIN category as c ON c.slug=b.category ")
        res.json(response.data);
    } catch (error) {
        res.json("error in fetching category")
    }
})

export default router;
// module.exports =route