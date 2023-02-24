import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';


import "./signUp.css"




function SignUp ()  {
    
    const [signin, setSignin] = useState({
        
        FirstName:"",
        LastName:"",
        City:"",
        State:"",
        LicenseNumber:""
        

    });
    let { createBarber, updateBarber, getBarber } = useContext(UserContext);
    let navigate = useNavigate();
    let { FirstName, LastName, City, State,  LicenseNumber} = signin
    
    function handleChange(event) {
        setSignin((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }
      

      function add() {
         {
          return createBarber(FirstName,LastName, City, State, 
             LicenseNumber).then(() =>
           navigate('/Login'))
        }
      }
    function handleSubmit(event) {
        event.preventDefault();
        add()
        navigate('/EditAccount')
        .catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (


      <div className='SignUp'>
        <Form onSubmit={handleSubmit}>
        
        {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" />
      </Form.Group> */}
      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" name="FirstName" value={FirstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" name="LastName" value={LastName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>LicenseNumber</Form.Label>
          <Form.Control type="text" name="LicenseNumber" value={LicenseNumber} onChange={handleChange} />
        </Form.Group>
      </Row>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="City" value={City} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..."value={State} onChange={handleChange} >
        
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
            
        </Form.Group >

        
      </Row>

    

      <Link to="/EditAccount" className="nav-link mt-0">
                            <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Go to Edit Profile</Button>
                        </Link>
    </Form>

    

    </div>
)};
export default SignUp;
