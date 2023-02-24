import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';
import Profile from './Profile';

import "./Register.css"




function SignUp ()  {
    let params = useParams()
    const [signin, setSignin] = useState({
        BarberId: params.BarberId,
        FirstName:"",
        LastName:"",
        Address:"",
        City:"",
        State:"",
        PhoneNumber:0,
        LicenseNumber:"",
        

    });
    let { createBarber, updateBarber, getBarber } = useContext(UserContext);
    let navigate = useNavigate();
    let {BarberId, FirstName, LastName, Address, City, State, PhoneNumber, LicenseNumber, img_url} = signin
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
      

      function addOrUpdate() {
        if (BarberId === undefined) {
          return createBarber(FirstName,LastName, Address, City, State, PhoneNumber,
             LicenseNumber, img_url).then(() =>
           navigate('/Login'))
        } else {
          return updateBarber(signin).then(() =>
          navigate(`/profile/${BarberId}`))
        }
      }
    function handleSubmit(event) {
        event.preventDefault();
        addOrUpdate()
        navigate('/Profile')
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
      <Form.Group className="mb-3" >
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" name="img_url" value={img_url} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="Address" value={Address} name="Address" placeholder="1234 Main St" onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Phone Number" name="PhoneNumber" value={PhoneNumber} onChange={handleChange} />
        </Form.Group>

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

    

      <Link to="/Profile" className="nav-link mt-0">
                            <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Go to Profile</Button>
                        </Link>
    </Form>

    

    </div>
)};
export default SignUp;
