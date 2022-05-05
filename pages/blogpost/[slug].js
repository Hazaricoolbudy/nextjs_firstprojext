import { useRouter } from 'next/router'
import React from 'react'


const Slug = () => {
    const router= useRouter()
    const {slug}=router.query
     
  return (
    <>
     {slug} 
    </>
  )
}

export default Slug
