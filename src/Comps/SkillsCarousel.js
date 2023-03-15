import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap/'
import JSP from "../pictures/JS.png"
import HTMLP from "../pictures/HTML.png"
import CSSP from "../pictures/CSS.png"
import PY3P from "../pictures/pythonThumb.png"
import GITP from "../pictures/GIT.png"
import AWSP from "../pictures/AWS.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function (props) {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIdex, e) => {
        setIndex(selectedIdex)
    }



    return (
        <div id="scroller-window">
            <Carousel onSelect={handleSelect} onSlid={props.handleSlid}>
                <Carousel.Item>
                    <img className='SkillsPic' src={JSP} id="JSP" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SkillsPic' src={HTMLP} id="HTMLP" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SkillsPic' src={CSSP} id="CSSP" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SkillsPic' src={PY3P} id="PY3P" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SkillsPic' src={GITP} id="GITP" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SkillsPic' src={AWSP} id="AWSP" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
