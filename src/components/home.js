import { useContext, useState, useEffect, useNavigate } from 'react'
import { Container, Stack, Button, Form } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"
import React from 'react';
import HomeContent from './HomeContent';
import '../styles/Home.css'
import Footer from './Footer';
import Register from './Register';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
import Login from './Login';
// import BarberList from './BarberList';

function Home() {
    

    const [showAnimated, setShowAnimated] = useState(false);

    return (
        <>
            {/*Top bar with logo*/}
            <div id="navbarTop">
                <Container>
                    <div className="h1head">
                        <Link to="/" ><a class="navbar-brand align-items-center" href="#">
                            <img src={process.env.PUBLIC_URL + '/images/upperlip11.png'} height="100" alt="Upper Lip Holstery" /></a>
                        </Link>
                    </div>
                    
                </Container>
                
            </div>
            {/*Hamburger menu*/}
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
                        <img className="dropLogo" src={process.env.PUBLIC_URL + '/Images/upperlip10.png'} height="120" alt="Upper Lip Holstery" />
                        <Link to="/" id="home" className="nav-link m-4">HOME</Link>
                        <Link to="/BarberList" id="barbers" className="nav-link m-4">BARBERS</Link>
                        <Link to="/" id="gallery" className="nav-link m-4">GALLERY</Link>

                        <Link to="/Login" className="nav-link m-0">
                            <Button id='signInButtonDrop' onClick={<Login />} className="mt-4 mb-4 ly-0" >BARBER SIGN IN</Button>
                        </Link>

                        <Link to="/Register" className="nav-link mt-0">
                            <Button id='signUpButtonDrop' onClick={<Register />} className="mt-4 mb-4 ly-0" > BARBER SIGN UP</Button>
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