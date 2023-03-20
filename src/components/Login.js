import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Form, Button, Col, Row } from "react-bootstrap";
import Bored from '../ThirdParty/Bored';
import "../styles/Login.css";


{/* Sign In Page Function */ }
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
      {/* Top Banner with Try Something New advice*/}
      <section >
        <div className="container" style={{ minHeight: '350px' }}>
          <div className='login' >
            <div className="text-center justify-content-center align-self-center">
              <Bored />
            </div>
          </div>
        </div>
      </section>

      {/* Sign In form section*/}
      <div id="background" xs={12} md={6} lg={4}>
        <Form onSubmit={handleSubmit}>
          <Row className=" justify-content-center">

            <h1 className="text-center justify-content-center align-self-center">SIGN IN</h1>
            <p id="linkSignIn">Already a member? <Link id="linkColor" to="/SignUp">Sign Up</Link></p>

            <Form.Group className="mb-3">
              <Form.Label >Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className=" justify-content-center">
            <Form.Group className="mb-3">
              <Form.Label >Password</Form.Label>
              <Form.Control
                type="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Group className="col-1">
              <Col xs={12} sm={4} md={4} lg={4}>
                <Button id="signinFormButton" type="submit">
                  SUBMIT
                </Button>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SignIn;
