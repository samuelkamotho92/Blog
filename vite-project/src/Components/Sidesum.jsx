import React from 'react'
import '.././App.css'
const Sidesum = ({blogs}) => {
  return (
    <div className='sideBlog'>
    <p>Summary</p>
    <p>My blogs summary includes the following</p>
    <ol className='blogSummary' type='1'>
      {blogs.map(blog=>(
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ol>
          </div>
  )
}

export default Sidesum
