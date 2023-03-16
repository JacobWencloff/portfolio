import React, { forwardRef } from 'react'
import { useState } from 'react'
import SkillsCarousel from './SkillsCarousel'

function Skills(props, ref) {
  const text = {
    0 : "JavaScript is a scripting or programming language that allows the developer to implement complex features on web pages such as the one you are seeing now.",
    1 : "HTML is the back bone to practically all web based applications giving all supporting languages a canvis to manipulate",
    2 : "CSS allows the developer to style, format, and animate existing DOM elements",
    3 : "Python give the developer a fast way to integrate systems effectivly ",
    4 : "GIT gives its users a form of source controll that allows a user to better manage its current and past working code base's",
    5 : "AWS gives user fast, streamlined services to deploy, host, and integrate services and pipelines"
  }
  let [skillsIcons, setSkillsIcon] = useState([])
  let [displayText, setDisplayText] = useState(text[0])

  const handleSlid = (e) =>{
    setDisplayText(text[e])
}

  //  console.log(skillsIcons)
  return (
    <div ref={ref} className='skills'>
      <h3>Skills</h3>
      <div id='scroller-window'>
        <SkillsCarousel handleSlid={handleSlid} />
      </div>
      <div id="skillsText">{displayText}</div>
    </div>
  )
}

export default forwardRef(Skills)