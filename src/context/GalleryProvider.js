import axios from "axios";
import GalleryContext from "./GalleryContext";
import { useState, useEffect } from "react";

export const GalleryProvider = (props) => {
    const [ imageList, setImageList ] = useState([]);
    const baseUrl = "http://localhost:5003/Image/";

useEffect(() => {
    async function getAllImages() {
      await  refreshImageList()
    }
    getAllImages()
  }, []);

  function refreshImageList() {
    return axios.get(baseUrl)
      .then(response => {
        setImageList(response.data)
        console.log(response.data)
      })
  }

    async function getAllImages() {
        const response = await axios.get(baseUrl);
        console.log(response.data)
        return setImageList(response.data);
    }

    async function createImage(barberId, imageUrl, title, description) {       
        let image = {barberId, imageUrl, title, description};
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myMessageToken')}`
        };
        const response = await axios.post(baseUrl, image, { headers: myHeaders });
        console.log('success')
        refreshImageList();
        return await new Promise(resolve => resolve(response.data));
    }
    
    async function getImageByBarberId(barberId) {
        
        return axios.get(baseUrl + barberId).then(response => {
          console.log(response.data)
          return new Promise(resolve => resolve(response.data));
        })
    }

    async function deleteImage(barberImageLinkId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myMessageToken')}`
        };
        const response = await axios.delete(baseUrl + barberImageLinkId, { headers: myHeaders });
        
        return await new Promise(resolve => resolve(response.data));
    }

    return (
        <GalleryContext.Provider value={{
            imageList,
            getImageByBarberId,
            getAllImages,
            createImage,
            deleteImage,
        }}>
            { props.children }
        </GalleryContext.Provider>
    )
}