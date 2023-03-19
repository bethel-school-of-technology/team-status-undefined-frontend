import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Form, Button, Col, Row } from 'react-bootstrap';
import GalleryContext from '../context/GalleryContext';
import "../styles/AddImages.css";

function AddImage(){
    let navigate = useNavigate();
    let params = useParams()
    let {createImage} = useContext(GalleryContext)

    const [img, setImg] = useState({
        title: "",
        barberImageLinkId: 0,
        barberId: params.barberId,
        description:"",
        imageUrl:""
        
    })

    let {barberId,imageUrl, title, description} = img

    function handleChange(event) {
        setImg((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }

      function handleSubmit(event) {
        event.preventDefault();
        createImage(barberId, imageUrl, title, description)
        navigate(`/profile/${barberId}`)
        window.location.reload()
        .catch(error => {
            console.log(error);
            window.alert('Failed Creating Image: error creating image');
        });
    }

    return (
      <div id="background-addImage" xs={12} md={6} lg={4}> 
    <Form onSubmit={handleSubmit}>
    <h1>ADD AN IMAGE</h1>
      <Form.Group as={Col} >
        <Form.Label>Add Image</Form.Label>
        <Form.Control type="text" name="imageUrl" value={imageUrl} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} placeholder="enter an Image Url" onChange={handleChange} />
      </Form.Group>
      <Button id='addButton' type="submit"  className="mt-4 mb-4 ly-0" >Submit</Button>
    </Form>
    </div>
    )

}
export default AddImage