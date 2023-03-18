import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';
import "../styles/signUp.css"


function SignUp ()  {
    
    const [signin, setSignin] = useState({
        
        FirstName:"",
        LastName:"",
        Address:"",
        City:"",
        State:"",
        PhoneNumber:"",
        LicenseNumber:"",
        ProfilePic:"",
        Description:"",
        Email:"",
        Password:""
        

    });
    let { CreateBarber } = useContext(UserContext);
    let navigate = useNavigate();
    let { firstName, lastName, address, city, state, 
      phoneNumber, licenseNumber, profilePic, 
       description, email, password} = signin
    
    function handleChange(event) {
        setSignin((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }
      
    function handleSubmit(event) {
        event.preventDefault();
        CreateBarber(firstName, lastName, address, city, state, 
          phoneNumber, licenseNumber, profilePic, 
           description, email, password)
        console.log(signin)
        navigate('/Login')
    }
    return (
  <div className='SignUp'>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} >
          <Form.Label>ProfilePic</Form.Label>
          <Form.Control type="text" name="profilePic" value={profilePic} placeholder="enter an Image Url" onChange={handleChange} />
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>LicenseNumber</Form.Label>
          <Form.Control type="text" name="licenseNumber" value={licenseNumber} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
        </Form.Group>

        
      </Row>

      

      <Row className="mb-3">

        <Form.Group as={Col} >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={address} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" value={city} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="state" placeholder='eg...TX' value={state} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={email} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" name="password" value={password} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={description} onChange={handleChange} />
        </Form.Group>
      </Row>
         <Button id='submitButton' type="submit"  className="mt-4 mb-4 ly-0" >Submit</Button>
    </Form>
  </div>
)};
export default SignUp;
