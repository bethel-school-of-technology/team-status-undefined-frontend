
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/HomeContent.css'
import { Stack, Button, Row, Col } from 'react-bootstrap';
import Register from './Register';

function HomeContent() {

    return (
        <>
            {/* Header section with Background image and Sign In, Sgn Up, Find a barber buttons */}
            <section>
                <div className='bgCover'>
                    <div className="container" style={{ minHeight: '400px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <div className="h1" >
                                <h1>He who seeks "and keeps on seeking" finds!</h1>
                            </div>
                            <br />

                            <Link to="/" className="nav-link m-2">
                                <Button id='signInButton' className="mt-4 mb-4 ly-0" >BARBER SIGN IN</Button>
                            </Link>

                            <Link to="/" className="nav-link m-0">
                                <Button id='signUpButton' onClick={<Register />} className="mt-4 mb-4 ly-0" > BARBER SIGN UP</Button>
                            </Link>

                            <Link to="/" className="nav-link m-0">
                                <Button id='findBarberButton' className="mt-4 mb-4 ly-0" >FIND A BARBER</Button>
                            </Link>

                            <div className="explore" >
                                <p>SCROLL DOWN TO LEARN MORE ABOUT US</p>
                            </div>
                            <div className="v" >
                                <p>V</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotion targeting Barbers */}
            <section>
                <div className='barberTitle'><h1>Are you a Barber?</h1></div>
                <div class='container'>
                    <div className="cardBarbers">
                        <Row>
                            <Col className='div1'>
                                <img src={process.env.PUBLIC_URL + '/images/home-barber-info.png'} height="600" alt="" />
                            </Col>
                            <Col className='div2'>
                                <p>If you are eather a barber startup or an experienced professional, we can help you connect with potential customers that are looking for you! Join our membership to get started... </p>
                                <br></br>
                                <h3 id='membership'>Barbers Membership</h3>
                                <h3 id='membership'>$0.99 only</h3>
                                <br></br>
                                <p>* List your business</p>
                                <p>* Let new client find you</p>
                                <p>* We promote you in external platforms</p>

                                <Link to="/" className="nav-link m-0">
                                    <Button id='signUpButton' onClick={<Register />} className="mt-4 mb-4 ly-0" > SIGN UP</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            {/* Promotion targeting barber's clients */}
            <section>
                <div className='barberTitle'><h1>Looking for a Professional Barber?</h1></div>
                <div class='container'>
                    <div className="cardBarbers">
                        <Row>
                            <Col className='div3'>
                                <p>Our certified and skilled barbers are ready to provide you with an amazing uplifting experience; using the latest technology, high quality products, and creating the finest styles, our professionals are ready to serve you! </p>

                                <br></br>
                                <h3 id='membership'>Start looking awesome</h3>
                                <br></br>
                                <p>* Skilled professionals</p>
                                <p>* Certified</p>
                                <p>* Top Products</p>

                                <Link to="/" className="nav-link m-0">
                                    <Button id='signUpButton' onClick className="mt-4 mb-4 ly-0" > FIND A BARBER</Button>
                                </Link>
                            </Col>
                            <Col className='div4'>
                                <img src={process.env.PUBLIC_URL + '/images/home-client-info.png'} height="600" alt="" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section>
                <div className='bgGalleryCover'>
                    <div className="container" style={{ minHeight: '450px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <div className="h1" >
                                <h1>Trending Now...</h1>
                                <h1>The Upper Lip Holstery</h1>
                            </div>

                            <div className="verse" >
                                <p>To these four young men God gave knowledge and understanding of all kinds of literature and learning.</p>
                            </div>

                            <Link to="/" className="nav-link m-2">
                                <Button id='signInButton' className="mt-4 mb-4 ly-0" >LEARN MORE</Button>
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
            </section>

            <Stack>
                <Outlet />
            </Stack>
        </>
    )
}

export default HomeContent