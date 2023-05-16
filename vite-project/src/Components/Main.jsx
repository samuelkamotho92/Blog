import '.././App.css'
const Main = ({blogs}) => {
  console.log(blogs)
  return (
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
  )
}

export default Main
