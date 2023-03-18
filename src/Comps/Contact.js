import React ,{forwardRef} from 'react'
import  {Form, FloatingLabel, Button }  from 'react-bootstrap'
import linkedin from '../pictures/linkedin.png'
import github from '../pictures/github.png'

function Contact(props, ref) {
  return (
    <div ref={ref} id='Contact'>
     <div className='contact'>
      <h3>Contact Me</h3>
    <div className='contactForm'>
        <FloatingLabel
            controlId='floatingEmail'
            label="Email address"
            className='contactForumField'
            >
                <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <FloatingLabel controlId="floatingFirstName" label='FirstName'>
                <Form.Control type='Text' placeholder='First Name' />
            </FloatingLabel>
            <FloatingLabel controlId='floatingLastName' label='lastName'>
                <Form.Control type='Text' placeholder='Last Name' />
            </FloatingLabel>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
    </div>
    <div className='contactPics'>
     <a href='https://www.linkedin.com/in/jacob-wencloff-se/' target='_blank'>
      <img src={linkedin}></img>
      </a>
      <a href='https://github.com/JacobWencloff' target='_blank'>
        <img src={github}></img>
      </a>
    </div>
    </div>
    </div>
  )
}

export default forwardRef(Contact)