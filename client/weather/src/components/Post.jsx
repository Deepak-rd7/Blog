import React from "react";
import {Link} from "react-router-dom";

function Post({post}) {
  return   <div class="card mb-4">
  <div class="row">
      <div class="col-sm-12 col-md-3">
          <img class="img-fluid h-100 card-img-top" src={post.image_path}
               alt="..." style={{ objectFit: "cover", height: "100px" }}/>
      </div>
      <div class="card-body col-md-8">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.content.substring(0,80)}...</p>
          <Link  to={`/posts/${post.id}`} class="btn btn-primary">Read More</Link>
      </div>
  </div>

</div>
}

export default Post;
