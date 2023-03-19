import '../styles/Gallery.css'
import { React } from 'react';
import { Outlet } from 'react-router-dom'
import { Stack, Row, Col, Card } from 'react-bootstrap';
import GalleryContext from '../context/GalleryContext';

function Gallery() {

    return (
        <GalleryContext.Consumer>
            {
                ({ imageList }) => {
                    return <>
                        {/* Top Section Bakground Cover  */}
                        <section>
                            <div className='bgCoverGallery'>
                                <div className="container" style={{ minHeight: '400px' }}>
                                    <div className="text-center justify-content-center align-self-center">
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Top Creative Styles Section */}
                        <section>
                            <div className='galleryTitle'>
                                <h1>Top Styles</h1>
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
                        </section>

                        {/* Moustache Section */}
                        <section>
                            <div className='mustacheSection'>
                                    <div className='mustacheTitle'>
                                        <h1>Reveal the Mustache</h1>
                                        <h5>Know your styles</h5>
                                    </div>

                                    <Row>
                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Handlebars</h3>
                                                        <p>A moustache with particularly lengthy and upwardly curved extremities. These moustache styles are named for their resemblance to the handlebars of a bicycle.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-handlebars.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Lamp Shade</h3>
                                                        <p>The lampshade mustache is a thinner mustache that covers the entire upper lip.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-lampshade.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Pencil</h3>
                                                        <p>A thin moustache found adjacent to, or a little above the lip. The style is neatly clipped, so that the moustache takes the form of a thin line, as if it had been drawn using a pencil.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-pencil.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Chevron</h3>
                                                        <p>A 'tache that is shaped to angle downwards towards the corners of your mouth. It's more subtle than a horseshoe moustache and shorter than a walrus style, but the general direction of growth is the same.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-chevron.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Walrus</h3>
                                                        <p>The walrus moustache is characterized by whiskers that are thick, bushy, and drop over the mouth. The style resembles the whiskers of a walrus, hence the name.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-walrus.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Horseshoe</h3>
                                                        <p>Also known as a biker moustache, is a full moustache with vertical extensions grown on the corners of the lips and down the sides of the mouth to the jawline, resembling an upside-down U or a horseshoe.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-horseshoe.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Imperial</h3>
                                                        <p>a bushy moustache with the tips curled upward. Hair growth beyond the corners of the mouth are shaved whilst the length above the lip is brushed to the sides.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-imperial.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={12} md={6} lg={3}>
                                            <div className='revealCard'>
                                                <div className='revealCard-inner'>
                                                    <div className='revealCard-front'>
                                                        <h3>Fu Manchu</h3>
                                                        <p>A full, straight moustache extending from under the nose past the corners of the mouth and growing downward past the clean-shaven lips and chin in two tapered "tendrils", often extending past the jawline.</p>
                                                    </div>
                                                    <div classNane='revealCard-back'>
                                                        <img src={process.env.PUBLIC_URL + '/images/card-fuManchu.png'} width="250" alt="Haircut" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                        </section>

                        <Stack>
                            <Outlet />
                        </Stack>
                    </>
                }
            }
        </GalleryContext.Consumer>
    )
}

export default Gallery