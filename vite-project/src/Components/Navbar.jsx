import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<h1>Best SamKamDev Documentation</h1>  
<Link to='/home '> </Link>
<Link to='/login '> </Link>
<Link to='/register '> </Link>
    </div>  
  )
}

export default Navbar
