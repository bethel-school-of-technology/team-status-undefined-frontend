import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Form, Button, Col, Row } from 'react-bootstrap';


import "../styles/Register.css"

function SignIn() {
  const [login, setLogin] = useState({
    Email:"",
    Password:""
    

});
let { Login } = useContext(UserContext);
let navigate = useNavigate();
let {email, password} = login

function handleChange(event) {
    setLogin((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }
  

  
function handleSubmit(event) {
    event.preventDefault();
    Login(email, password)
    console.log(login)
    navigate('/')
}

  // const SignIn = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   let { Login } = useContext(UserContext);
  //   let navigate = useNavigate();

  //   function handleSubmit(event) {
  //       event.preventDefault();
  //       Login(email, password).then(() => {
  //           navigate('/');
  //       }).catch(error => {
  //           console.log(error);
  //           window.alert('Failed login');
  //       });
  //   }
    return (


      <div className='register'>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" name="password" value={password} onChange={handleChange} />
        </Form.Group>

       </Row>

      
  <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Login</Button>
                        
    </Form>

    

    </div>
)};

export default SignIn;
