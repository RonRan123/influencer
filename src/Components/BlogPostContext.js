import React, { useState, createContext, useEffect } from "react";

const BlogPostContext = createContext();

export default function BlogPostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    fetch('/blog/get')
        .then(resp => resp.json())
        .then(resp => setPosts(resp));
    console.log("Getpost has been called!")
}
useEffect(()=>{
    getPosts();
}, [])
// getPosts();
  return (
    <BlogPostContext.Provider value={{ posts, setPosts, getPosts }}>
      {children}
    </BlogPostContext.Provider>
  );
}

export { BlogPostContext };