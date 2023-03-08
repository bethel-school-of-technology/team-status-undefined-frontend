import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom'
import '../styles/Profile.css'
import { Stack, Button, Row, Col, Card } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import EditProfile from './EditProfile';
// import ProfileCoverImage from './ProfileCoverImage';


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
            {/* Edit Profile Button */}
            <div className="editButtonPosition">
                <Link to="/EditProfile" >
                    <Button id='editButton' onClick={<EditProfile />}  > EDIT PROFILE</Button>
                </Link>
            </div>

            {/* Top Section Bakground Image with profile pic, barber name & lic#  */}
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
            <section>
                <div className="descriptionSection">
                    {/* <Card> */}
                        <Row>
                            <Col className='div1'>
                                <img src={profilePic} height="300" width="300" alt="" />
                            </Col>
                            <Col className='div2'>
                                <br></br>
                                <h3 id='aboutMeTitle'>About Me</h3>
                                <br></br>

                                <p className='description'> {description}</p>
                                <h4>~ {firstName}{lastName}</h4>
                            </Col>
                        </Row>
                    {/* </Card> */}
                </div>
            </section>

            {/* Gallery Section */}
            <section className='contactSection'>
                <div className='bgContactCover'>
                    <div className='contactTitle'><h1>Work Gallery</h1></div>
                </div>
            </section>

            {/* Contact Info */}
            <section>
                <div className='bgContactCover'>
                    <div className='contactTitle'><h1>Contact Info</h1></div>

                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Card className="contactCard">
                                <br />
                                <img className="contactImg" src={process.env.PUBLIC_URL + '/images/phone-orange.png'} height="100" width="100" alt="Phone Icon" />
                                <h4> {phoneNumber}</h4>
                                <h6>LET'S CHAT! CALL OR TEXT</h6>
                            </Card>
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Card className="contactCard">
                                <br />
                                <img className="contactImg" src={process.env.PUBLIC_URL + '/images/location-orange.png'} height="100" width="100" alt="Location Icon" />
                                <h4>{address}, {city}, {state} </h4>
                                <h6>VISIT ME!</h6>
                            </Card>
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Card className="contactCard">
                                <br />
                                <img className="contactImg" src={process.env.PUBLIC_URL + '/images/email-orange.png'} height="100" width="100" alt="Email Icon" />
                                <h4> {email}</h4>
                                <h6>SEND ME A MESSAGE!</h6>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                <div >
                    <Row id="coupon" xs={9} md={9} lg={9}>
                        <img src={process.env.PUBLIC_URL + '/images/promo-ad.png'} height="220" alt="promo" />
                        <p> Mention this ad to receive discount.</p>
                    </Row>
                </div>
            </section>

            {/* <ProfileCoverImage /> */}

            <Stack>
                <Outlet />
            </Stack>
        </>
    )
}

export default Profile