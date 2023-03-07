import React, { forwardRef } from 'react'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import JSP from "../pictures/JS.png"
import HTMLP from "../pictures/HTML.png" 
import CSSP from "../pictures/CSS.png"
import PY3P from "../pictures/AWS.png"
import GITP from "../pictures/GIT.png"
import AWSP from "../pictures/AWS.png"

function Skills(props, ref) {
  let [skillsIcons, setSkillsIcon] = useState([])

  let Skills = {
    'JavaScript': JSP,
    'HTML': HTMLP,
    'CSS': CSSP,
    'Python3': PY3P,
    'git / SCM': GITP,
    'AWS Cloud infrastructure': AWSP
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