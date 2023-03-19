import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "../styles/Profile.css";
import { Stack, Button, Row, Col, Card } from "react-bootstrap";
import UserContext from "../context/UserContext";
import GalleryContext from "../context/GalleryContext";
// import ProfileCoverImage from './ProfileCoverImage';

function Profile() {
  let { getBarberById, deleteBarber } = useContext(UserContext);

  let { deleteImage, getImageByBarberId } = useContext(GalleryContext);

  let navigate = useNavigate();
  let params = useParams();

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

  const [img, setImg] = useState([
    {
      title: "",
      description: "",
      barberImageLinkId: 0,
      BarberId: params.barberId,
      imageUrl: "",
    },
  ]);

  let {
    barberId,
    firstName,
    lastName,
    address,
    city,
    state,
    phoneNumber,
    licenseNumber,
    profilePic,
    description,
    email,
  } = oneBarber;

  useEffect(() => {
    if (barberId === undefined) return;
    async function fetch() {
      await getBarberById(barberId).then((oneBarber) =>
        setOneBarber(oneBarber)
      );
      console.log(oneBarber);
    }
    fetch();
  }, [params.barberId]);

  useEffect(() => {
    async function Fetch() {
      await getImageByBarberId(barberId).then((img) => setImg(img));
      console.log(img);
    }
    Fetch();
  }, [params.barberId]);

  function handleDeleteBarber(barberId) {
    deleteBarber(barberId)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDeleteImage(barberImageLinkId) {
    deleteImage(barberImageLinkId);
    window.location.reload();
    navigate(`/Profile/${params.barberId}`);
  }

  let Auth = localStorage.getItem("email");

  function displayGallery() {
    if (Auth === oneBarber.email) {
      return (
        <Row>
          {img.map((i) => {
            return (
              <Col className="flip-card" xs={12} md={6} lg={4}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="galleryImg"
                      src={i.imageUrl}
                      height="450"
                      alt="Haircut"
                    />
                  </div>
                  <div class="flip-card-back">
                    <h1>{i.title}</h1>
                    <p>{i.description}</p>
                    <Button
                      id="deleteButton"
                      onClick={handleDeleteImage.bind(
                        this,
                        i.barberImageLinkId
                      )}
                    >
                      {" "}
                      DELETE PICTURE
                    </Button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      );
    } else {
      return (
        <Row>
          {img.map((i) => {
            return (
              <Col className="flip-card" xs={12} md={6} lg={4}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="galleryImg"
                      src={i.imageUrl}
                      height="450"
                      alt="Haircut"
                    />
                  </div>
                  <div class="flip-card-back">
                    <h1>{i.title}</h1>
                    <p>{i.description}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      );
    }
  }

  function authProfile() {
    if (Auth === oneBarber.email)
      return (
        <>
          <div className="editButtonPosition">
            <Link to={`/EditAccount/${barberId}`}>
              <Button id="editButton"> EDIT PROFILE</Button>
            </Link>
            <Button
              id="deleteButton"
              onClick={handleDeleteBarber.bind(this, oneBarber.barberId)}
            >
              {" "}
              DELETE PROFILE
            </Button>
            <Link to={`/AddImage/${barberId}`}>
              <Button id="addImages"> ADD TO YOUR GALLERY</Button>
            </Link>
          </div>
        </>
      );
  }

  return (
    <>
      {authProfile()}
      {/* Top Section Bakground Image with profile pic, barber name & lic#  */}
      <section>
        <div className="bgCoverProfile">
          <div className="container" style={{ minHeight: "600px" }}>
            <div className="text-center justify-content-center align-self-center">
              <Row>
                <Col
                  id="coverInfo"
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className="text-center justify-content-center align-self-center"
                >
                  <div className="h1">
                    <img
                      id="pic"
                      src={profilePic}
                      class="rounded-circle"
                      height="150"
                      alt=""
                    />
                    <h1>
                      {firstName} {lastName}
                    </h1>
                  </div>

                  <div className="lic">
                    <p>License #: {licenseNumber} </p>
                    <br />
                    <br />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      {/* Description Card*/}

      <div className="cater">
        <img src={profilePic} alt="" id="test" height="450px" width="450px" />

        <div id="p">
          <p>
            <h4 id="name">
              {firstName} {lastName}:
            </h4>
            {description}
          </p>
        </div>
      </div>

      {/* <section>
                <div className='container-{breakpoint} d-flex'>
                    <div class="row g-5 justify-content-evenly">
                        <div className="col-12">


                            <div className="card" >
                                <Row>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <img src={profilePic} height="100%" width="100%" class="card-img-top" alt="" />
                                    </Col>

                                    <Col>
                                        <div className="card-body"></div>
                                        <br></br>
                                        <h1 id='aboutMeTitle'>About Me</h1>
                                        <br></br>
                                        <h4> {firstName} {lastName}</h4>
                                        <p className="card-text">{description}</p>
                                    </Col>
                                </Row>

                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

      {/* Gallery Section */}
      <section>
        <div>
          <div className="galleryTitle">
            <h1>Gallery</h1>
            <h5>A selection of haircuts and beard styles</h5>
          </div>
          <div>{displayGallery()}</div>
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <div className="bgContactCover">
          <div className="contactTitle">
            <h1>Contact Info</h1>
          </div>

          <Row>
            <Col xs={12} md={6} lg={4}>
              <Card className="contactCard">
                <br />
                <img
                  className="contactImg"
                  src={process.env.PUBLIC_URL + "/images/phone-orange.png"}
                  height="100"
                  width="100"
                  alt="Phone Icon"
                />
                <h4> {phoneNumber}</h4>
                <h6>LET'S CHAT! CALL OR TEXT</h6>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="contactCard">
                <br />
                <img
                  className="contactImg"
                  src={process.env.PUBLIC_URL + "/images/location-orange.png"}
                  height="100"
                  width="100"
                  alt="Location Icon"
                />
                <h4>
                  {address}, {city}, {state}{" "}
                </h4>
                <h6>VISIT ME!</h6>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="contactCard">
                <br />
                <img
                  className="contactImg"
                  src={process.env.PUBLIC_URL + "/images/email-orange.png"}
                  height="100"
                  width="100"
                  alt="Email Icon"
                />
                <h4> {email}</h4>
                <h6>SEND ME A MESSAGE!</h6>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div>
          <Row id="coupon" xs={9} md={9} lg={9}>
            <img
              src={process.env.PUBLIC_URL + "/images/promo-ad.png"}
              height="220"
              alt="promo"
            />
            <p> Mention this ad to receive discount.</p>
          </Row>
        </div>
      </section>

      {/* <ProfileCoverImage /> */}

      <Stack>
        <Outlet />
      </Stack>
    </>
  );
}
export default Profile;
