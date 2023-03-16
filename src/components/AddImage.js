import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Form, Button, Col, Row } from 'react-bootstrap';
import GalleryContext from '../context/GalleryContext';

function AddImage(){
    let navigate = useNavigate();
    let params = useParams()
    let {createImage} = useContext(GalleryContext)

    const [img, setImg] = useState({
        barberImageLinkId: 0,
        barberId: params.barberId,
        imageUrl:""
        
    })

    let {barberId,imageUrl} = img

    function handleChange(event) {
        setImg((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }

      function handleSubmit(event) {
        event.preventDefault();
        createImage(barberId, imageUrl)
        navigate(`/profile/${barberId}`)
        .catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} >
        <Form.Label>AddImage</Form.Label>
        <Form.Control type="text" name="imageUrl" value={imageUrl} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>
      <Button id='primary' type="submit"  className="mt-4 mb-4 ly-0" >Submit</Button>
    </Form>
    
    )

}
export default AddImage