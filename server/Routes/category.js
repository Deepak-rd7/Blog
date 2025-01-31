import express from "express";

const router=express.Router();

import db from "../Models/db.js";


// Get all categories

router.get("/",async (req,res)=>{
    try {
        const category=await db.query("SELECT id,slug FROM category ORDER BY slug ASC");
        res.json(category.rows)
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//Get a category by id

router.get("/:id",async (req,res)=>{
    const id=req.params.id;
    try {

        const result=await db.query("SELECT * FROM category WHERE id=$1",[id]);

        if(result.rows.length===0){
            return res.status(404).json("Category Not found");
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//create a new category 

router.post("/",async (req,res)=>{
    const {name,slug,description}=req.body;
    try {
        const result = await db.query("INSERT INTO category(name,slug,description,created_at,updated_at) VALUES($1,$2,$3,NOW(),NOW())RETURNING *",[name,slug,description]);
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json("Error in posting Data");
    }
})

//update existing category
router.put("/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        // let currentDate=new Date();
        const response=await db.query("SELECT * FROM category WHERE id=$1",[id]);
        const s_Row=response.rows[0];
        // console.log(s_Row);
        if(response.rows.length===0){
            res.status(404).json("Post not found");
        }

        const obj={
            name: req.body.name || s_Row.name,
            slug: req.body.slug || s_Row.slug,
            description: req.body.description || s_Row.description,
            // updated_at:currentDate
        }
        // console.log(obj.content);

        const result=await db.query("UPDATE category SET name=($1),slug=($2),description=($3),updated_at=NOW() WHERE id=$6 RETURNING *" ,
            [obj.name,obj.slug,obj.desciption,id]
        )
        
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//delete a Category
router.delete("/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        const response=await db.query("SELECT * FROM category WHERE id=$1",[id]);
        if(response.rows.length===0){
            res.status(404).json("Category not found");
        }
        await db.query("DELETE FROM category WHERE id=$1",[id]);
        res.json("category deleted");

    } catch (error) {
        res.status(500).json("Error in deleting");
    }
})
  





export default router;