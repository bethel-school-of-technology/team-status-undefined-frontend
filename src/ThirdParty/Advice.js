import {React, useState, useEffect} from 'react'
import axios from "axios";
import '../styles/Footer.css'


function Advice(){
    let [advice, setAdvice] = useState("");

   async function getAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((response =>{
    setAdvice(response.data.slip.advice)})
     )
    } 

    useEffect(() => {
        async function fetch() {
           await getAdvice()}
        fetch()
    },[]);

    return(
    <div id="advice" class="row justify-content-evenly">
        {advice}
    </div>)
    
}

export default Advice;