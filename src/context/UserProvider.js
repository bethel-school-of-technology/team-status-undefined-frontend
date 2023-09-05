import axios from "axios";
import UserContext from "./UserContext";
import { useState, useEffect } from "react";

export const UserProvider = (props) => {
    const [ barberList, setBarberList ] = useState([]);
    const baseUrl = "http://upperlipapi.azurewebsites.net/Barber/";

useEffect(() => {
    async function getAllBarbers() {
      await  refreshBarberList()
    }
    getAllBarbers()
  }, []);

  function refreshBarberList() {
    return axios.get(baseUrl)
      .then(response => {
        setBarberList(response.data)
        console.log(response.data)
      })
  }

    async function getAllBarbers() {
        const response = await axios.get(baseUrl);
        console.log(response.data)
        return setBarberList(response.data);
    }

    async function CreateBarber( firstName, lastName, address, city, state, phoneNumber, licenseNumber, profilePic, description, email, password) {       
        let barber = { firstName, lastName, address, city, state, phoneNumber, licenseNumber, profilePic, description, email, password };
        
        const response = await axios.post(`${baseUrl}register`, barber);
        refreshBarberList();
        return await new Promise(resolve => resolve(response.data));
    }
     
    async function Login(email, password) {
      let signin = {email, password};
        const response = await axios.post(`${baseUrl}login`, signin);
        localStorage.setItem('myMessageToken', response.data);
        localStorage.setItem('email', email);
        return await new Promise(resolve => resolve(response.data));

    }  
    

    async function getBarberById(barberId) {
        
        return axios.get(baseUrl + barberId).then(response => {
          console.log(response.data)
          return new Promise(resolve => resolve(response.data));
        })
    }

    async function updateBarber(signin) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myMessageToken')}`
        };
        const response = await axios.put(baseUrl, signin, { headers: myHeaders });
        refreshBarberList();
        return await new Promise(resolve => resolve(response.data));
    }

    function searchBarber(search) {

        return axios.get(`${baseUrl}Search/${search}`)
          .then(response =>
            new Promise((resolve) => resolve(response.data))
          )
          .catch((error) =>
            new Promise((_, reject) => reject(error.response.statusText))
          )
      }

    async function deleteBarber(barberId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myMessageToken')}`
        };
        const response = await axios.delete(baseUrl + barberId, { headers: myHeaders });
        localStorage.clear();
        refreshBarberList();
        return await new Promise(resolve => resolve(response.data));
    }

    return (
        <UserContext.Provider value={{
            barberList,
            getBarberById,
            getAllBarbers,
            CreateBarber,
            Login,
            updateBarber,
            deleteBarber,
            searchBarber,
        }}>
            { props.children }
        </UserContext.Provider>
    )
}
