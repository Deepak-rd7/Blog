import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail(){
    const [post,setPost]=useState(null);
    const {id}=useParams();


    async function fetchPost() {
        try {
            const response=await axios.get(`http://localhost:3000/api/posts/${id}`);
            setPost(response.data);
        } catch (error)
        {
            console.log("Fetching post");
        }
            
        
    }

    useEffect(()=>{
       fetchPost();
    },[])


    if(!post){
        return <p>Loading...</p>
    }

    const formattedDate=Intl.DateTimeFormat('en-US',{
        month:'long',
        day:"numeric",
        year:"numeric"
    }).format(new Date(post.created_at))


        return <>
                <main class="container my-4">
        <div class="row">
            <article class="col-lg-8">
                <h2 class="blog-post-title">{post.title}</h2> 
                <p class="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>

                <img class="mb-3 img-fluid" src={post.image_path} alt=""/>
                
                <div class="blog-post-content">
                    <p>{post.content}</p>
                  
                </div>
            </article>

        </div>
        <div className="inline-flex">
            
        </div>
    </main>
        
        </>
}

export default PostDetail;