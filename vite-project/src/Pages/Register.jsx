import React from 'react'

const Register = () => {
  return (
    <div className="container">
    <div className="registartion form">
        <header>Sign up</header>
        <form action="#" className="myform" id="getform">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" placeholder="First Name" />
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" placeholder="Last Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
            <label htmlFor="name">Password</label>
            <input type="password" id="password" placeholder="Password" /> 
            <label htmlFor="name">Password Confirm</label>
            <input type="password" id="password" placeholder="Password Confirm" />           
          <button type="submit">Submit</button>
        </form>
        <div className="signup">
          <span className="signup">Already have an account?
           <label htmlFor="check"> <a href="/login">Sign In</a></label>
          </span>
        </div>
      </div>
  </div> 
  )
}

export default Register
