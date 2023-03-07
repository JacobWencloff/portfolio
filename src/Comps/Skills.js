import React, { forwardRef } from 'react'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Skills(props, ref) {
  let [skillsIcons, setSkillsIcon] = useState([])

  let Skills = {
    'JavaScript': '/pictures/JS.png',
    'HTML': '/pictures/HTML.png',
    'CSS': '/pictures/CSS.png',
    'Python3': '/pictures/AWS.png',
    'git / SCM': '/pictures/GIT.png',
    'AWS Cloud infrastructure': '/pictures/AWS.png'
  }



  skillsIcons = []
  for (let skill in Skills) {
    skillsIcons.push(
      (
        <div key={skill} className='skill-item'>
          <img src={Skills[skill]}></img>
        </div>
      )
    )
  }

  //  console.log(skillsIcons)
  return (
    <div ref={ref} className='skills'>
      <h3>Skills</h3>
      <div id='scroller-window'>
        <Carousel 
        id='test' 
        showThumbs={false} 
        infiniteLoop={true}
        centerMode={false} 
        showIndicators={false} 
        showStatus={false}>

          {skillsIcons}
        </Carousel>
      </div>
    </div>
  )
}

export default forwardRef(Skills)