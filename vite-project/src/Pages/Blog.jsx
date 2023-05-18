import React from 'react'
import { useLocation } from 'react-router-dom'
const Blog = () => {
  const location = useLocation()
  console.log(location)
  // const { from } = location.state
  // console.log(from);
  return (
    <div className='mainBlog'>
      <div className='blog'>
  <div style={{margin:"10px"}}>

 <h2 className='blog-title'></h2>
<h3>Author:Samuel Kamotho</h3>
<a href='asdas' target="_blank" rel="noopener noreferrer">This is the best blog to study and come out of tutorial hell</a>
<p className=''>Summary</p>
  </div>
      </div>
    </div>
  )
}

export default Blog
