import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';


import "./signUp.css"




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
      

      // function add() {
         
      //     return createBarber(firstName, lastName, address, city, state, 
      //       phoneNumber, licenseNumber, profilePic,
      //         description, email, password).then(() =>
      //      navigate('/Login'))
        
      // }
    function handleSubmit(event) {
        event.preventDefault();
        CreateBarber(firstName, lastName, address, city, state, 
          phoneNumber, licenseNumber, profilePic, 
           description, email, password)
        console.log(signin)
        navigate('/')
        // .catch(error => {
        //     console.log(error);
        //     window.alert('Failed registration: error creating user');
        // });
    }
    return (


      <div className='SignUp'>
        <Form onSubmit={handleSubmit}>
        
        {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>ProfilePic</Form.Label>
        <Form.Control type="file" name="profilePic" value={profilePic} onChange={handleChange} />
      </Form.Group> */}

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

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select  name="state" defaultValue={state} onChange={handleChange} >
        
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
            <option>AS</option>
            <option>CA</option>
            <option>CO</option>
            <option>CT</option>
            <option>DE</option>
            <option>DC</option>
            <option>FL</option>
            <option>GA</option>
            <option>GU</option>
            <option>HI</option>
            <option>ID</option>
            <option>IL</option>
            <option>IN</option>
            <option>IA</option>
            <option>KS</option>
            <option>KY</option>
            <option>LA</option>
            <option>ME</option>
            <option>MD</option>
            <option>MA</option>
            <option>MI</option>
            <option>MN</option>
            <option>MS</option>
            <option>MO</option>
            <option>MT</option>
            <option>NE</option>
            <option>NV</option>
            <option>NH</option>
            <option>NJ</option>
            <option>NM</option>
            <option>NY</option>
            <option>NC</option>
            <option>ND</option>
            <option>MP</option>
            <option>OH</option>
            <option>OK</option>
            <option>OR</option>
            <option>PA</option>
            <option>PR</option>
            <option>RI</option>
            <option>SC</option>
            <option>SD</option>
            <option>TN</option>
            <option>TX</option>
            <option>UT</option>
            <option>VT</option>
            <option>VA</option>
            <option>VI</option>
            <option>WA</option>
            <option>WV</option>
            <option>WI</option>
            <option>WY</option>
            
            </Form.Select >
            
        </Form.Group > */}

        
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

         <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Submit</Button>
    </Form>

    

    </div>
)};
export default SignUp;
