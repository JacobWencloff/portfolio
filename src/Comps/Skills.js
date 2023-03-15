import React, { forwardRef } from 'react'
import { useState } from 'react'
import SkillsCarousel from './SkillsCarousel'

function Skills(props, ref) {
  let [skillsIcons, setSkillsIcon] = useState([])


  //  console.log(skillsIcons)
  return (
    <div ref={ref} className='skills'>
      <h3>Skills</h3>
      <div id='scroller-window'>
        <SkillsCarousel />
      </div>
    </div>
  )
}

export default forwardRef(Skills)