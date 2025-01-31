import React from "react";
import PostList from "./components/PostList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryPosts from "./components/CategoryPosts";

function App() {
  return (
    <div>
      
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail/>} />
        
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
