import {React, useState, useEffect} from 'react'
import axios from "axios";
import '../styles/Footer.css'


function Bored(){
    let [bored, setBored] = useState("");

   async function getBored(){
    await axios.get("https://www.boredapi.com/api/activity")
    .then((response =>{
        console.log(response)
     setBored(response.data.activity)})
     )
    } 

    useEffect(() => {
        async function fetch() {
           await getBored()}
        fetch()
    },[]);

    return(
    <div id="advice" class="row justify-content-evenly">
       <h1 id="advice" class="row justify-content-evenly">Activity Of The Day</h1>
        {bored}
    </div>)
    
}

export default Bored;