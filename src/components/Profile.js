import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom'
import '../styles/Profile.css'

import { Stack, Button, Row, Col, Container, Card } from 'react-bootstrap';
import SignUp from './SignUp';

import UserContext from '../context/UserContext';

// import Login from './Login'
// import ProfileCoverImage from './ProfileCoverImage';
import EditProfile from './EditProfile';
// import { GiScissors, GiOfficeChair } from 'react-icons/gi';
// import { MdPhoneIphone } from 'react-icons/md';



function Profile() {

    let { getBarberById } = useContext(UserContext);

    let params = useParams()
    const [oneBarber, setOneBarber] = useState({
        barberId: params.barberId,
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        phoneNumber: "",
        licenseNumber: "",
        profilePic: "",
        description: "",
    });

    let { barberId, firstName, lastName, address, city, state, phoneNumber, licenseNumber, profilePic, description } = oneBarber

    useEffect(() => {
        if (barberId === undefined) return
        async function fetch() {
          await getBarberById(barberId)
            .then((oneBarber) => setOneBarber(oneBarber))
            console.log(oneBarber);
        }
        fetch()
      }, [barberId])

    return (
        <>
            <div className="editButtonPosition">
                <Link to="/EditProfile" >
                    <Button id='editButton' onClick={<EditProfile />}  > EDIT PROFILE</Button>
                </Link>
            </div>

            <section>
                <div className='bgCoverProfile'>
                    <div className="container" style={{ minHeight: '600px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <div className="h1" >
                                <img id="pic" src={profilePic} class="rounded-circle" height="150" alt="" />
                                <h1>{firstName} {lastName}</h1>
                            </div>

                            <div className="explore" >
                                <p>License NUmber: {licenseNumber} </p>
                                <br /><br />
                                <p> {description} {address} {city} {state} {phoneNumber} {barberId}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotion targeting Barbers */}
            <section>
                <div className='barberTitle'><h1>Contact Me</h1></div>
                <div class='container'>
                    <div className="cardBarbers">
                        <Card>
                            <Row>
                                <Col className='div1'>
                                    <img src={profilePic} height="600" alt="" />
                                </Col>
                                <Col className='div2'>
                                    <br></br>
                                    <h3 id='membership'>{firstName} {lastName}</h3>
                                    <br></br>

                                     {/* <h3 id='membership'> -------------<GiScissors />-------------</h3> */}

                                    <p>* List your business</p>
                                    <p>* Let new client find you</p>
                                    <p>* We promote you in external platforms</p>

                                    <Link to="/SignUp" className="nav-link m-0">
                                        <Button id='signUpButton' onClick={<SignUp />} className="mt-4 mb-4 ly-0" > SIGN UP</Button>
                                    </Link>
                                </Col>
                            </Row>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Promotion targeting barber's clients */}
                <section>
                    <div className='barberTitle'><h1>Looking for a Professional Barber?</h1></div>
                    <div class='container'>
                        <div className="cardBarbers">
                        <Card>
                            <Row>
                                <Col className='div3'>
                                    <p>Our certified and skilled barbers are ready to provide you with an amazing uplifting experience; using the latest technology, high quality products, and creating the finest styles, our professionals are ready to serve you! </p>


                                    <br></br>
                                    <p> (Call or text) {phoneNumber}</p>
                                    <p> {address}, {city}, {state}</p>
                                    <br></br>
                                    <h3 id='membership'> -----------------------------</h3>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Promotion targeting barber's clients */}
            <section>
                <div className='barberTitle'><h1>Gallery</h1></div>
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

                                <Link to="/BarberList" className="nav-link m-0">
                                    <Button id='signUpButton' onClick className="mt-4 mb-4 ly-0" > FIND A BARBER</Button>
                                </Link>
                            </Col>
                            <Col className='div4'>
                                <img src={process.env.PUBLIC_URL + '/Images/home-client-info.png'} height="600" alt="" />
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

                            <Link to="/Gallery" className="nav-link m-2">
                                <Button id='signInButton' className="mt-4 mb-4 ly-0" >LEARN MORE</Button>
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
            </section>

            {/* <ProfileCoverImage /> */}

            <Stack>
                <Outlet />
            </Stack>
            {/* ) */}
        </>

    )
}

export default Profile