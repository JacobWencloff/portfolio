import React from 'react'
import  {Form, FloatingLabel }  from 'react-bootstrap'
export default function Contact() {
  return (
    <div>
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
    </div>
  )
}
