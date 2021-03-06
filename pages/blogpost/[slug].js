import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'

import styles from "../../styles/BlogPost.module.css";


const Slug = () => {
  const [blog,setBlog]=useState()
  const router= useRouter()
  useEffect(()=>{
    if(!router.isReady) return;
    const {slug}=router.query
  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlog(parsed);
      });

},[router.isReady])
      

    

    // step 1 : find the file crossponding to slug
    //step2 : populate them inside the  page
     
  return (
    <>
    <div className={styles.container}>
    <main className={styles.main}>
     <h1> {blog && blog.title}</h1>
     <p>{ blog && blog.content}</p>
     </main>
     </div>
    </>
  )
}

export default Slug
