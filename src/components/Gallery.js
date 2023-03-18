import '../styles/Gallery.css'
import { React, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Stack, Row, Col, Card, Button } from 'react-bootstrap';
import GalleryContext from '../context/GalleryContext';

function Gallery() {

let {deleteImage} = useContext(GalleryContext)
let navigate = useNavigate();

    function handleDeleteImage(barberImageLinkId) {
        deleteImage(barberImageLinkId).then(() => {
            navigate('/Gallery');
        }).catch(error => {
            console.log(error);
            
        });
    }

    return (
    <GalleryContext.Consumer>
    {
        ({ imageList }) => {
          return <>
            {/* Top Section Bakground Image with profile pic, barber name & lic#  */}
            <section>
                
                <div className='bgCoverGallery'>
                    <div className="container" style={{ minHeight: '620px' }}>
                        <div className="text-center justify-content-center align-self-center">
                            <div>
                                
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
                            {imageList.map((i) => {
                                return (
                                    <Col className='flip-card' xs={12} md={6} lg={4} >
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <img className="galleryImg" src={i.imageUrl} height="450" width='450' alt="Haircut" />
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>{i.title}</h1>
                                            <p>{i.description}</p>
                                        </div>
                                    </div>
                                </Col>
                                )
                            })}
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
        }}
    </GalleryContext.Consumer>
    )
}

export default Gallery