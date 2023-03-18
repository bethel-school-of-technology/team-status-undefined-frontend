import { useContext, useState, useEffect, } from 'react'
import { Container, Stack, Button, Form, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import React from 'react';
import '../styles/Home.css'
import Footer from './Footer';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
import { FaUserAlt } from 'react-icons/fa';

function Home() {

    {/* Sign In & Sign Out */ }
    function onSignOut() {
        localStorage.clear();
        navigate('/login')
    }
    function onSignIn() {
        navigate('/login')
    }
    const token = localStorage.getItem('email')
    function authLink() {
        if (token === null)
            return (
                <div className='user'>
                <button className='userButton' variant="link" onClick={onSignIn}>SIGN IN</button>
                </div>
            )
        else {
            return <div className='user'>
                <FaUserAlt /> {token}
                <button className='userButton' variant="link" onClick={onSignOut}>SIGN OUT</button>
            </div>
        }
    }

    {/* Search */ }
    let navigate = useNavigate()
    const handleChange = (event) => {
        if (event.target.value === "") return;
        navigate('Search/' + event.target.value)
    }

    {/* For Hamburger Menu */ }
    const [showAnimated, setShowAnimated] = useState(false);

    return (
        <>
            {/*Top bar with logo*/}
            <div id="navbarTop">
                <Container>
                    <div className="h1head">
                        <Link to="/" class="navbar-brand align-items-center">
                            <img src={process.env.PUBLIC_URL + '/images/upperlip11.png'} height="100" alt="Upper Lip Holstery" />
                        </Link>

                    </div>
                </Container>
            </div>

            {/*Search Nav Bar*/}
            <div id="searchBar">
                <Row>
                    <Col >
                        <Form className="d-flex">
                            <Form.Control
                                id="searchInput"
                                type="search"
                                placeholder="Looking For A Barber?"
                                className="d-sm-flex"
                                aria-label="Search"
                                onChange={handleChange} />
                            <Button id='searchButton' variant="outline-success"><img src={process.env.PUBLIC_URL + '/Images/searchicon.png'} height="20px" alt="Upper Lip Holstery" /></Button>
                            {authLink()}
                        </Form>
                    </Col>
                </Row>
            </div>

            {/*Hamburger Menu*/}
            <section id='dropdown' className='mb-3'>
                <MDBNavbar>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type='button'
                            className='first-button'
                            data-target='#navbarToggleExternalContent'
                            aria-controls='navbarToggleExternalContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowAnimated(!showAnimated)}
                        >
                            <div className={`animated-icon1 ${showAnimated && 'open'}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </MDBNavbarToggler>
                    </MDBContainer>
                </MDBNavbar>

                <MDBCollapse show={showAnimated}>
                    <div className='dropdownbg'>
                        <Link to="/" id="home" className="nav-link m-4" onClick={() => setShowAnimated(!showAnimated)}>HOME</Link>
                        <Link to="/BarberList" id="barbers" className="nav-link m-4" onClick={() => setShowAnimated(!showAnimated)}>BARBERS</Link>
                        <Link to="/Gallery" id="gallery" className="nav-link m-4" onClick={() => setShowAnimated(!showAnimated)}>GALLERY</Link>

                        <Link to="/Login" className="nav-link m-0" onClick={() => setShowAnimated(!showAnimated)}>
                            <Button id='signInButtonDrop' className="mt-4 mb-4 ly-0" >BARBER SIGN IN</Button>
                        </Link>

                        <Link to="/SignUp" className="nav-link mt-0" onClick={() => setShowAnimated(!showAnimated)}>
                            <Button id='signUpButtonDrop' className="mt-4 mb-4 ly-0" > BARBER SIGN UP</Button>
                        </Link>
                    </div>
                </MDBCollapse>
            </section>

            <Stack gap={5} className="col-md-10 mx-auto mt-4">
                <Outlet />
            </Stack>

            {/*Footer Page display*/}
            <Footer />
        </>
    )
}

export default Home