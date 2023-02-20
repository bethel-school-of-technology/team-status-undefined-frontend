import { useContext, useState, useEffect, } from 'react'
import React from 'react';


const ProfileCoverImage = () => {

    const [displayImages, setDisplayImages] = React.useState({cover1: true, cover2: false, cover3:false});
    return (
        <div>
            <div className="Ccontainer">
            <button onClick={()=>setDisplayImages({...displayImages, cover1:true})} className="ground" >Ground Floor</button>
            <button onClick={()=>setDisplayImages({...displayImages, cover2:true})} className="ground">First Floor</button>
                <button onClick={()=>setDisplayImages({...displayImages, cover3:true})} className="ground">Second Floor</button>
            </div>
                 <div className= "image">
              {displayImages.cover1 &&  <img src={process.env.PUBLIC_URL + '/Images/home-client-info.png'} height="600" alt="" />}
               {displayImages.cover2 && <img src={process.env.PUBLIC_URL + '/Images/home-gallery-info.png'} height="600" alt="" />}
               {displayImages.cover3 && <img src={process.env.PUBLIC_URL + '/Images/home-barber-info.png'} height="600" alt="" />}
                
                </div>
            
            
    </div>
    );
};


  
  export default ProfileCoverImage