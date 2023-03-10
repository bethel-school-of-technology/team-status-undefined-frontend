import { useContext, useState, useEffect, } from 'react'
import { Container, Stack, Button, Form, Row, Col, Nav } from 'react-bootstrap'
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import React from 'react';
import '../styles/Home.css'
import Footer from './Footer';
import UserContext from '../context/UserContext';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
import Login from './Login';
import SignUp from './SignUp';
// import BarberList from './BarberList';

function Home() {
    let params = useParams()
    let [ barber, setBarber] = useState ({
        barberId: params.barberId,
        firstName: "",
    })

    let { getBarberById } = useContext(UserContext)
    useEffect(() => {
        async function fetch() {
            await getBarberById(params.barberId)
                .then((barber) => setBarber(barber))
        }
        fetch()
    },[params.barberId] )
    
     function onSignOut(){
        localStorage.clear();
         setBarber("")
         navigate('/login')
    }
    function onSignIn(){
        navigate('/login')
    }

    function authLink(){
        if (barber.firstName === "")
                    return(
                            <Nav className="justify-content-end">
                            <button variant="link" onClick={onSignIn}>Login</button>
                            </Nav>
                    )
                    else {
                        return<nav>Signed in as: {barber.firstName} <button variant="link" onClick={onSignOut}>Log Out</button></nav>
                         
                    }}

    let navigate = useNavigate()
    const handleChange = (event) => {
        if (event.target.value === "") return;
        navigate('Search/' + event.target.value)
    }

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
                    {/* <Col xs sm md lg={1}>
                       
                    </Col> */}

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
                        </Form>
                        {authLink()}
                    </Col>

                </Row>
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
                        {/* <img className="dropLogo" src={process.env.PUBLIC_URL + '/Images/upperlip10.png'} height="120" alt="Upper Lip Holstery" /> */}
                        <Link to="/" id="home" className="nav-link m-4">HOME</Link>
                        <Link to="/BarberList" id="barbers" className="nav-link m-4">BARBERS</Link>
                        <Link to="/Gallery" id="gallery" className="nav-link m-4">GALLERY</Link>

                        <Link to="/Login" className="nav-link m-0">
                            <Button id='signInButtonDrop'  className="mt-4 mb-4 ly-0" >BARBER SIGN IN</Button>
                        </Link>

                        <Link to="/SignUp" className="nav-link mt-0">
                            <Button id='signUpButtonDrop'  className="mt-4 mb-4 ly-0" > BARBER SIGN UP</Button>
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