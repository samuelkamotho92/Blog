import React from 'react'
import '../App.css'
const Footer = () => {
  const date = new Date();
  const result1 = new Date().toLocaleDateString('en-GB');
  return (
    <div className='authorDetails'>
    <div>
Blog Author: Samuel Kamotho
    </div>
<div className='date'>
{result1}
</div>
</div>
  )
}

export default Footer
