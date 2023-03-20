import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Form, Button, Col, Row } from 'react-bootstrap';
import "../styles/EditAccount.css"


{/*Edit Profile Page Functon - Signed Up Barbers can edit profile information*/}
function Edit() {

  let params = useParams()

  const [edit, setEdit] = useState({
    barberId: params.barberId,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
    licenseNumber: "",
    ProfilePic: "",
    description: "",
    email: "",
    password: ""
  });

  let { updateBarber, getBarberById } = useContext(UserContext);

  let navigate = useNavigate();

  let { barberId, firstName, lastName, address, city, state,
    phoneNumber, licenseNumber, profilePic,
    description, email } = edit

  useEffect(() => {
    if (barberId === undefined) return
    async function fetch() {
      await getBarberById(barberId)
        .then((edit) => setEdit(edit))
    }
    fetch()
  }, [barberId])
  function handleChange(event) {
    setEdit((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateBarber(edit)
    navigate(`/profile/${barberId}`)
    window.location.reload()
      .catch(error => {
        console.log(error);
        window.alert('Failed registration: error creating user');
      });
  }

  {/*Form and Button */}
  return (   
    <div className='EditAccount'>
      <Form onSubmit={handleSubmit} id='formWidth'>
        <p id="editProfile">EDIT PROFILE</p>

        <Form.Group as={Col} id="formLabel">
          <Form.Label>Profile Pic</Form.Label>
          <Form.Control type="text" name="profilePic" value={profilePic} placeholder="enter an Image Url" onChange={handleChange} />
        </Form.Group>

        <Row className="mb-3" id="formLabel">
          <Form.Group as={Col} >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3" id="formLabel">
          <Form.Group as={Col} >
            <Form.Label>License Number</Form.Label>
            <Form.Control type="text" name="licenseNumber" value={licenseNumber} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3" id="formLabel">
          <Form.Group as={Col} >
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={address} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={city} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" placeholder='eg...TX' value={state} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3" id="formLabel">
          <Form.Group as={Col} >
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={email} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3" id="formLabel">
          <Form.Group as={Col}>
            <Form.Label >Description</Form.Label>
            <Form.Control type="text" name="description" placeholder='200 max characters' value={description} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Button id='EditAccountSubmitButton' type="submit" className="mt-4 mb-4 ly-0" >EDIT PROFILE</Button>
      </Form>
    </div>
  )
};

export default Edit;