import { useContext, useState, useEffect } from 'react'
import { Navbar, Nav, Container, Stack, Button, Form } from 'react-bootstrap'
import { Link, Outlet, useNavigate } from "react-router-dom"





function Home() {
    let navigate = useNavigate()
    const handleChange = (event) => {
        if (event.target.value === "") return;
          navigate('Search/' + event.target.value)
    }

    return (
        <>
            <Navbar bg="secondary" variant="danger">
                <Container>
                    <Navbar.Brand href="/">
                    <img
                       src="https://th.bing.com/th/id/OIP.Vb1GPEWp3ukDxM3RoopVvAHaE8?pid=ImgDet&rs=1"
                        width="40"
                        height="40"
                        className="d-inline-block align-center"
                         alt="2022"/>{' '}     
                    </Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/Home">
                    <Link to="/" className="nav-link">Home</Link>
                        <Link to="/SignIn" className="nav-link">Sign In</Link>
                        <Link to="/Register" className="nav-link">Register</Link>
                        <Link to="/AboutUs" className="nav-link">About Us</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}/>
                        <Button variant="danger">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
        </>
    )
}

export default Home
