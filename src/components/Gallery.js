import '../styles/Gallery.css'
import { React } from 'react';
import { Outlet } from 'react-router-dom'
import { Stack, Row, Col, Card } from 'react-bootstrap';

function Gallery() {


    return (
        <>
            {/* Top Section Bakground Image with profile pic, barber name & lic#  */}
            <section>
                <div className='bgCoverGallery'>
                    <div className="container" style={{ minHeight: '620px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <div>
                                <h1 className="galleryh1">Be Inspired. Be Trendy.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Top Creative Styles Section */}
            <section>
                <div>
                    <div className='galleryTitle'>
                        <h1>Top Creative Styles</h1>
                        <h5>of the Season</h5>
                    </div>
                    <div>
                        <Row>
                            <Col className='flip-card' xs={12} md={6} lg={4}>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img className="galleryImg" src={process.env.PUBLIC_URL + '/images/creative3.jpg'} height="450" alt="Haircut" />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>The Handlebars</h1>
                                        <p>First Place</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='flip-card' xs={12} md={6} lg={4}>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img className="galleryImg" src={process.env.PUBLIC_URL + '/images/creative2.jpg'} height="450" alt="Haircut" />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>The Goat</h1>
                                        <p>Second Place</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='flip-card' xs={12} md={6} lg={4}>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img className="galleryImg" src={process.env.PUBLIC_URL + '/images/creative1.jpg'} height="450" alt="Haircut" />
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>The Square</h1>
                                        <p>Third place</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>


            {/* Moustache Section */}
            <section>

                <div className='mustacheSection'>
                    <Card>
                        <div className='mustacheTitle'>
                            <h3>Reveal the Mustache</h3>
                            <h5>Know your styles</h5>
                        </div>

                        <Row>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Chevron</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-chevron.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Handlebars</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-handlebars.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Horse Shoe</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-horseshoe.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Imperial</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-imperial.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Lamp Shade</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-lampshade.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Pencil</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-pencil.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>Walrus</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/mustache-walrus.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3}>
                                <div className='revealCard'>
                                    <h3>ULH</h3>
                                    <img src={process.env.PUBLIC_URL + '/images/uppericon3.png'} width="150" alt="Haircut" />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </div>

            </section>

            {/* <ProfileCoverImage /> */}

            <Stack>
                <Outlet />
            </Stack>
        </>
    )
}

export default Gallery