import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import  image3 from '../Images/pexels-chokniti-khongchum-3938023.jpg'
import '../styles/slides.css'
// import Swiper core and required modules

const Slide =() =>{
    
  
    return(
        <Fade>
         <div className="slider-container">
        <img
          src={image1}
          className='slider-image '
        />
    
    </div>
       
        </Fade>
    );
};

export default Slide;