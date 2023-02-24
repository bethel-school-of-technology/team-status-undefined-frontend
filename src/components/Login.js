import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';


import "./Register.css"




function Login ()  {
    let params = useParams()
    const [signin, setSignin] = useState({
      BarberId:params.BarberId,
        Email:"",
        Password:""
    });
    let { getBarber } = useContext(UserContext);
    let navigate = useNavigate();
    let {BarberId, Email, Password} = signin
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
      

      
    function handleSubmit(event) {
        event.preventDefault();
         navigate(`/Profile/${BarberId}`)
        .catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (


      <div className='register'>
        <Form onSubmit={handleSubmit}>
        
        
      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" name="Email" value={Email} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" name="Password" value={Password} onChange={handleChange} />
        </Form.Group>

       </Row>

      
  <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Go to Edit Account</Button>
                        
    </Form>

    

    </div>
)};
export default Login;
