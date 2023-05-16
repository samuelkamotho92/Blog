import React,{useState} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
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
  return (
            <div className='docblog'> 
            <Navbar />
            <Main blogs={blogs}/>
            <Footer />
            <div>
            </div>
            </div>
  )
}

export default Blogs