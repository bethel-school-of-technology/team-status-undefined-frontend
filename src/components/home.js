// import { useContext, useState, useEffect } from 'react'
import { Container, Stack, Button } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"
import React, { useState } from 'react';
import HomeContent from './HomeContent';
import '../styles/Home.css'
import Footer from './Footer';
import Register from './Register';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
// import SignIn from './SignIn';
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
                        <img className="dropLogo" src={process.env.PUBLIC_URL + '/images/upperlip10.png'} height="120" alt="Upper Lip Holstery" />

                        <Link to="/" id="home" className="nav-link m-4">HOME</Link>
                        <Link to="/" id="barbers" className="nav-link m-4">BARBERS</Link>
                        <Link to="/" id="gallery" className="nav-link m-4">GALLERY</Link>

                        <Link to="/" className="nav-link m-2">
                            <Button id='signInButton' className="mt-4 mb-4 ly-0" >BARBER SIGN IN</Button>
                        </Link>

                        <Link to="/" className="nav-link m-0">
                            <Button id='signUpButton' onClick={<Register />} className="mt-4 mb-4 ly-0" > BARBER SIGN UP</Button>
                        </Link>
                    </div>
                </MDBCollapse>
            </section>

            {/*HomeContent Page Display*/}
            <HomeContent />

            <Stack gap={5} className="col-md-10 mx-auto mt-4">
                <Outlet />
            </Stack>

            {/*Footer Page display*/}
            <Footer />
        </>
    )
}

export default Home