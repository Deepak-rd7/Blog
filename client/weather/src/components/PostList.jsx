import React, { useEffect, useState } from "react";
import Post from "./Post.jsx";
import axios from "axios";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
function PostList() {

  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  async function fetchPost() {
    const response = await axios.get("http://localhost:3000/api/posts");
    setPosts(response.data);
  }


  useEffect(() => {
    fetchPost();
   
  }, []);

  // console.log(category);

  return (
    <>
      <main>
        <div class="container mt-4">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="mb-4">Latest Posts</h1>

              {posts.length > 0 ? (
                posts.map((post) => <Post post={post} key={post.id} />)
              ) : (
                <h2>No posts Available</h2>
              )}
            </div>

            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title" style={{fontWeight:"bold"}}>About Me</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title" style={{fontWeight:"bold"}}>Categories</h5>
                  <ul class="list-group">
                    {posts.map((post) => 
                      <li class="list-group-item" style={{fontFamily:"initial"}} >
                       
                       <b>{post.category}</b>
                     
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default PostList;
