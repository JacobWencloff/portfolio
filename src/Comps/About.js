import React, { forwardRef } from 'react'

function About(props, ref) {
  return (
    <div ref={ref} id='about' className='about'>
      <div id='container'>
        <h3>A bit about myself</h3>
        <p> I’m a Software Engineer from Washington State. I have a background in undergraduate engineering disciplines such as Microelectronics and Aerospace Engineering. My cumulative experience in these fields have taught me how to tackle rather complex problems using the Engineer Design and Development process, allowing me to rapidly develop solutions to any challenge in my way. I am extremely excited to begin my journey in this field and can’t wait to see what the future has in store.</p>
      </div>
    </div>
  )
}

export default forwardRef(About)