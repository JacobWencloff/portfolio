import React, { forwardRef } from 'react'
import Headshot from "../pictures/headshot.jpg"

function Home(props, ref) {
  return (
    <div ref={ref} id="home">
        <div className='home-content'>
            <img id='headshot-image' src={Headshot} ></img>
            <div id='home-header'>
              <h1 id='home-title'>
                  Jacob Wencloff
              </h1>
              <p id='home-text'>Full Stack Software Developer</p>
            </div>
        </div>
    </div>
  )
}

export default  forwardRef(Home)