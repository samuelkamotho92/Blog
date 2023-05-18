import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="container">
   <div className='login form'>
   <header>Login</header>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot password?</a>
              <input type="button" className="button" value="Login" ></input>
            </form>
            <div className="signup">
              <span className="signup">Dont have an account?
               <label htmlFor="check">
                <Link to="/register">Sign up</Link>
                </label>
              </span>
            </div>
   </div>
  </div> 
  )
}

export default Login
