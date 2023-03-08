import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom'
import '../styles/Profile.css'
import { Stack, Button, Row, Col, Container, Card } from 'react-bootstrap';
import SignUp from './SignUp';
import UserContext from '../context/UserContext';
// import ProfileCoverImage from './ProfileCoverImage';
import EditProfile from './EditProfile';
// import { GiScissors, GiOfficeChair } from 'react-icons/gi';
// import { GiScissors, GiOfficeChair } from 'react-icons/gi';
// import { MdPhoneIphone } from 'react-icons/md';
// import MdPhonelinkRing from 'react-icons/md';
// import ImLocation from 'react-icons/im';


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
        email: "",
    });

    let { barberId, firstName, lastName, address, city, state, phoneNumber, licenseNumber, profilePic, description, email } = oneBarber

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
                        <div id='coverInfo' className="text-center justify-content-center align-self-center">
                            <div className="h1" >
                                <img id="pic" src={profilePic} class="rounded-circle" height="150" alt="" />
                                <h1>{firstName} {lastName}</h1>
                            </div>

                            <div className="lic" >
                                <p>License #: {licenseNumber} </p>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Description Card*/}

            {/* <section>
                <div class='container'>
                    <div className="cardBarbers">
                        <Card>
                            <Row>
                                <Col className='div1'>
                                    <img src={profilePic} height="600" alt="" />
                                </Col>
                                <Col className='div2'>
                                    <br></br>
                                    <h3 id='membership'>About Me</h3>
                                    <br></br>

                                    <p className='description'> {description}</p>
                                    <h4>~ {firstName}{lastName}</h4>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </section> */}

            <section>
                <div class='flip-card'>
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <Row>
                                <Col className='div1'>
                                    <img src={profilePic} alt="" />
                                </Col>
                                <Col className='div2'>
                                    <h3>About Me</h3>
                                </Col>
                            </Row>
                        </div>

                        <div class="flip-card-back">
                            {/* <img src={profilePic} alt="" /> */}
                            <p class='description'> {description}</p>
                            {/* <h4>~ {firstName}{lastName}</h4> */}
                            {/* </Col> */}
                        </div>
                    </div>
                </div>
            </section>





            {/* Gallery Section */}
            <section className='contactSection'>
                <div className='bgContactCover'>
                    <div className='contactTitle'><h1>Work Gallery</h1></div>

                </div>
            </section>

            <div className="contactSectionBg">

                {/* Contact Info */}
                <section className='contactSection'>
                    <div className='bgContactCover'>
                        <div className='contactTitle'><h1>Contact Info</h1></div>

                        <Row>
                            <Col xs={12} md={6} lg={4}>
                                <Card className="contactCard">
                                    <div className="contactInfo">
                                        <br />
                                        <img className="contactImg" src={process.env.PUBLIC_URL + '/images/phone-orange.png'} height="100" width="100" alt="Phone Icon" />
                                        {/* <p><MdPhonelinkRing /></p> */}
                                        {/* <img id="pic" src={profilePic} class="rounded-circle" height="150" alt="" /> */}
                                        <h4> {phoneNumber}</h4>
                                        <h6>LET'S CHAT! CALL OR TEXT</h6>
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Card className="contactCard">
                                    <div className="contactInfo">
                                        <br />
                                        <img className="contactImg" src={process.env.PUBLIC_URL + '/images/location-orange.png'} height="100" width="100" alt="Phone Icon" />
                                        <h4>{address}, {city}, {state} </h4>
                                        <h6>VISIT ME!</h6>
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Card className="contactCard">
                                    <div className="contactInfo">
                                        <br />
                                        <img className="contactImg" src={process.env.PUBLIC_URL + '/images/email-orange.png'} height="100" width="100" alt="Phone Icon" />
                                        <h4> {email}</h4>
                                        <h6>SEND ME A MESSAGE!</h6>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>

            </div>

            <section>
                <div >
                    <Row id="coupon" xs={9} md={9} lg={9}>
                        <img src={process.env.PUBLIC_URL + '/images/promo-ad.png'} height="220" alt="Phone Icon" />
                        <p> Mention this ad to receive discount.</p>
                    </Row>
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