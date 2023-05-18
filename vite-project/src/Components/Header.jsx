import React from 'react'
import { Link } from 'react-router-dom';
import '../css/blog.css';
const Header = () => {
  return (
    <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/blog/:id">Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="#profile" class="split">Profile</Link>
      </div>
  )
}

export default Header
