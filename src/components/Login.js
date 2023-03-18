import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Form, Button, Col, Row } from "react-bootstrap";

import "../styles/Login.css";

function SignIn() {
  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  let { Login } = useContext(UserContext);
  let navigate = useNavigate();
  let { email, password } = login;

  function handleChange(event) {
    setLogin((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Login(email, password);
    console.log(login);
    navigate("/BarberList");
  }

  return (
    <>
      <div className="register">
        <div className="container">
          <Form onSubmit={handleSubmit}  >
            <Row className=" justify-content-center" >
              <Form.Group className="col-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                 </Form.Group>
                   </Row>

                   <Row className=" justify-content-center" >
              <Form.Group className="col-3" >
                <Form.Label xs={12} sm={4} md={4} lg={4}>password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                 </Form.Group>
                   </Row>
                
                   <Row className=" justify-content-center" >
              <Form.Group className="col-1" >
              <Col xs={12} sm={4} md={4} lg={4}>
                
                 <Button id="formButton" type="submit"> Submit</Button>
                 </Col>
                 </Form.Group>
                   </Row>
          
     
            
           
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
