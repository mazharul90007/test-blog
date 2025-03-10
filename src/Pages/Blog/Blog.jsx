import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 9)));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
      {posts.map((post) => (
        <div key={post.id} className="card bg-base-100 shadow-sm">
          <div className="">
            <div className="card-body">
              <h2 className="card-title text-white">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
