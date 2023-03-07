import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';
import Profile from './Profile';

import "../styles/Register.css"


//change to edit and setEdit

function Edit ()  {
    
    const [signin, setSignin] = useState({
      firstName:"",
        lastName:"",
        address:"",
        city:"",
        state:"",
        phoneNumber:"",
        licenseNumber:"",
        ProfilePic:"",
        description:"",
        email:"",
        password:""
        
        

    });
    let { updateBarber, getBarber } = useContext(UserContext);
    let navigate = useNavigate();
    let {BarberId, firstName, lastName, address, city, state, phoneNumber, licenseNumber, profilePic} = signin
    useEffect(() => {
        if (BarberId === undefined) return
        async function fetch() {
          await getBarber(BarberId)
            .then((signin) => setSignin(signin))
        }
        fetch()
      }, [BarberId])
    function handleChange(event) {
        setSignin((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }
      

      function Update() 
        {
          return updateBarber(signin)
          
        }
      
    function handleSubmit(event) {
        event.preventDefault();
        Update()
        navigate(`/profile/${BarberId}`)
        .catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (


      <div className='register'>
        <Form onSubmit={handleSubmit}>
        
        {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" />
      </Form.Group> */}
      <Form.Group as={Col} >
          <Form.Label>ProfilePic</Form.Label>
          <Form.Control type="text" name="profilePic" value={profilePic} placeholder="enter an Image Url" onChange={handleChange} />
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>LicenseNumber</Form.Label>
          <Form.Control type="text" name="licenseNumber" value={licenseNumber} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" value={address} name="address" placeholder="1234 Main St" onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Phone Number" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" value={city} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="state" placeholder='eg...TX' value={state} onChange={handleChange} />
        </Form.Group>

        
      </Row>

    

      
        <Button id='primary' type="submit" className="mt-4 mb-4 ly-0" >Go to Profile</Button>
                        
    </Form>

    

    </div>
)};
export default Edit;
