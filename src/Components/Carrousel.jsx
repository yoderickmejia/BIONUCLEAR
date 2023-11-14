import React from 'react';
import '../styles/Carrousel.css'
import { Fade } from 'react-awesome-reveal';

import image1 from '../Images/Logo.png'
const SWIPER = () => {

 return (
    <Fade>
      <div className="container-fluid Carrousel list ">
            <b>  <p className='Title'>Welcome to   <span>ScanLabs </span> </p></b>
            <img src={image1}  className='img-fluid ImagenLogo' alt="" />
          </div> 
    </Fade>
 );
};

export default SWIPER;
