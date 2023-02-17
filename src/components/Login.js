import React, { useState } from "react";
import {Form, Button, Col, Row } from 'react-bootstrap';
import "./Login.css"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login">
       
            <Form className="login-form" onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label >
          Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
         name="email"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label >
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" value={pass} onChange={(e) => setPass(e.target.value)} 
         placeholder="*******" id="password" name="password" />
        </Col>
      </Form.Group>


      <Button variant="primary" type="submit">
      Login
      </Button>

    </Form>
  

        </div>
    )
}

export default Login;