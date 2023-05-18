import React from 'react'
import {Link} from 'react-router-dom'
import '.././App.css'
const MainContent = ({blogs}) => {
  return (
    <div className='mainblogCon'>
    {blogs.map(blog=>(
    
      <div key={blog.id} className='blog'>
        <Link to={{pathname:`/blog/${blog.id}`, state: {data: blog }}}>
          <div style={{margin:'10px'}}>
          <h2 className='blog-title'>Title:{blog.title}</h2>
          <h3>Author:{blog.author}</h3>
          <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
          <p className=''>summary :{blog.content}</p>
          </div>
</Link>
      </div>
    ) )}
    </div>
  )
}

export default MainContent
