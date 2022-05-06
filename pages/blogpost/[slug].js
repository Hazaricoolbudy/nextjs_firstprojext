import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/BlogPost.module.css";


const Slug = () => {
    const router= useRouter()
    const {slug}=router.query

    // step 1 : find the file crossponding to slug
    //step2 : populate them inside the  page
     
  return (
    <>
    <div className={styles.container}>
    <main className={styles.main}>
     <h1>Title of the page {slug}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus dolores, harum voluptas neque, odio, odit architecto maiores tempora magnam autem. Beatae quod consectetur quia corporis consequatur! Eos magni et minus natus sint perferendis?</p>
     </main>
     </div>
    </>
  )
}

export default Slug
