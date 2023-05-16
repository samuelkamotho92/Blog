import React,{useState} from 'react'
import '../css/blog.css'
const blogs = [
    {
        id: 1,
        title: 'ReactJS',
        author: 'Jonathan',
        url: 'https://reactjs.org/',
        content:'Get started with ReactJs '
    },
    {
        id: 2,
        title: 'AngularJS',
        author: 'Jonathan',
        url: 'https://angularjs.org/',
        content:'Get started with AngularJs'
    },
    {
        id: 3,
        title: 'NodeJS',
        author: 'Jonathan',
        url: 'https://nodejs.org/',
        content:'Get started with NodeJs'
    }
]

const Blogs = () => {
    const date = new Date();

  const result1 = new Date().toLocaleDateString('en-GB');
  return (
            <div className='docblog'>
                <div className='myblogHead'>
                    <div>
            <h1>Best SamKamDev Documentation</h1>   
                    </div>
                </div>
            <div className='myBlog'>
      {blogs.map(blog=>(
        <div key={blog.id} className='blog'>
            <div style={{margin:'10px'}}>
            <h2 className='blog-title'>Title:{blog.title}</h2>
            <h3>Author:{blog.author}</h3>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
            </div>
            <div className='content' style={{margin:'10px'}}>
         Summary : {blog.content}
            </div>
        </div>
      ) )}
            </div>
            <div className='authorDetails'>
                <div>
 Samuel Kamotho
                </div>
            <div className='date'>
{result1}
            </div>
            </div>
            <div>
                
            </div>
            </div>
  )
}

export default Blogs
