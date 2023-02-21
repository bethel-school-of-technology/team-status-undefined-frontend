// import { useState, useEffect, } from 'react'
// // import React from 'react';
// // import '../styles/ProfileCoverImage.css'

// import { Container } from "react-bootstrap";
// import { Outlet } from 'react-router-dom'
// import { Stack } from 'react-bootstrap';


// const ProfileCoverImage = () => {

//     const [starterList] = useState([
//         { id: 1, name: "Cover Tim" },
//         { id: 2, name: "Cover Jos" },
//         { id: 3, name: "Cover Aus" },
//     ]);

//     const imgList = useState([
//         { id: 1, image: "{process.env.PUBLIC_URL + '/Images/home-client-info.png'}" },
//         { id: 2, image: "{process.env.PUBLIC_URL + '/Images/home-client-info.png'}" },
//         { id: 3, image: "{process.env.PUBLIC_URL + '/Images/home-client-info.png'}" },
//     ]);

//     // function renderImage() {
//     //     var selected = document.getElementById("selectOption");
//     //     var imgUrl = "";
//     //     if (selected.value == 1) {
//     //         imgUrl = "{process.env.PUBLIC_URL + '/Images/home-client-info.png'}";
//     //     } else if (selected.value == 2) {
//     //         imgUrl = "{process.env.PUBLIC_URL + '/Images/home-client-info.png'}";
//     //     } else {
//     //         imgUrl = "";
//     //     }
//     //     document.getElementById("myImg").src = imgUrl;

//     // }

//     function StarterShower({ imgList }) {
//         return (
//             <section>
//                 {imgList.map((imgList) => {
//                     return <img src={imgList.image} alt={imgList.id}></img>;
//                 })}
//             </section>
//         );
//     }

//     function StarterSelector({ starterList }) {
//         const [selectedPokemon, setSelectedPokemon] = useState();

//         const onChangePokemon = (event) => {
//             setSelectedPokemon(
//                 starterList.find((pokemon) => pokemon.name === event.target.value)
//             );
//         };

//         useEffect(() => {
//             console.log("New pokemon selected: ", selectedPokemon);
//         }, [selectedPokemon]);

//         return (
//             <div>
//                 Pick your favorite pokemon:
//                 <select onChange={onChangePokemon}>
//                     {starterList.map((starterList) => (
//                         <option key={starterList.id} value={starterList.name}>
//                             {starterList.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Container>

//                 <div className="App">
//                     <header className="App-header">
//                         <StarterSelector starterList={starterList} />
//                         <StarterShower imgList={imgList} />
//                     </header>
//                 </div>




//             </Container>

//         </>
//     );
// };



// export default ProfileCoverImage