import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = () => {
  //step 1 : collect all the files from blogdata directory
  // step 2: iterate through them and display them
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  return (
    <>
      <div className="blogs">
      
      <div className="blogItem"></div>
        <main className={styles.main}>
        <h2>Popular Blogs</h2>
          {blogs.map((blogitem) => {
            return (
              <>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <a>
                    <h2 className={styles.blogItemh3}>{blogitem.title}</h2>
                  </a>
                </Link>
                <p>{blogitem.content.substr(0,400)}</p>
              </>
            );
          })}
          
          
          
        </main>
      </div>
    </>
  );
};

export default Blog;
