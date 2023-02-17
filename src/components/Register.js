import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';
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
        ProfilePic:"",
        Description:"",
        AuthSignInId:0


    });
    let { createUser, updateUser, getUser } = useContext(UserContext);
    let navigate = useNavigate();
    let {BarberId, FirstName, LastName, Address, City, State, PhoneNumber, LicenseNumber, ProfilePic, Description, AuthSignInId} = signin
    useEffect(() => {
        if (BarberId === undefined) return
        async function fetch() {
          await getUser(BarberId)
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
          return createUser(FirstName,LastName, Address, City, State, PhoneNumber,
             LicenseNumber, ProfilePic).then(() =>
           navigate('/Login'))
        } else {
          return updateUser(signin).then(() =>
          navigate(`/profile/${BarberId}`))
        }
      }
    function handleSubmit(event) {
        event.preventDefault();
        addOrUpdate()
        .catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (


      <div className='register'>
        <Form onSubmit={handleSubmit}>
        
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
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
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="Address" value={Address} name="Address" placeholder="1234 Main St" onChange={handleChange}/>
      </Form.Group>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="City" value={City} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..."value={State} onChange={handleChange} >
        
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
            
            </Form.Select >
            
        </Form.Group >

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Phone Number" name="PhoneNumber" value={PhoneNumber} onChange={handleChange} />
        </Form.Group>
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    

    </div>
)};
export default SignUp;
