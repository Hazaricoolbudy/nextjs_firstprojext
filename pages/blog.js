import React , {useEffect}from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = () => {
  //step 1 : collect all the files from blogdata directory  
  // step 2: iterate through them and display them
  useEffect(()=>{
    console.log('useeffect is running');
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      a.then(data=>{
        parsed=data.json()
        console.log(parsed);
      })
    })
  })
  return (
    <>
      <div className="blogs">
        <main className={styles.main}>
          <h2>Popular Blogs</h2>
          <div className="blogItem">
          <Link href={'/blogpost/learn-javascript'}><a>
            <h2 className={styles.blogItemh3}>How to learn javascript</h2></a></Link>
            <p>Javascript is a language to design a web application</p>
            {/*<Image src="https://unsplash.com/photos/i25aqE_YUZs" alt="image of javascript logo"/>*/}
          </div>
            </main>
      </div>
    </>
  );
};

export default Blog;
