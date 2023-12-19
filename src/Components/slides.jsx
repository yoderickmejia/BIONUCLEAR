import React  from "react";
import { Fade } from "react-awesome-reveal";
import image1 from '../Images/1.jpg'

import '../styles/slides.css'
// import Swiper core and required modules

const Slide =() =>{
    
  
    return(
        <Fade>
            <div className="slider-container">
            <img src={image1} className='slider-image' alt="klk"/>
            <div className="div-glass">    </div>
           <div className="container-text-slider">

           
                <center className="text-slider">
                <h1 id="h1-slider" >
                    <i className="">
                    Precision in Diagnostics, Excellence in Care.
                    </i>
              
                </h1>
                <p id="p-slider">
                En   <b>ScanLabs </b> , nos dedicamos a ofrecer resultados médicos de alta precisión  <br />
                para una atención de excelencia. Nuestra tecnología de vanguardia y nuestro  
                compromiso con la calidad garantizan que cada resultado sea confiable y útil para  
                el cuidado de la salud de nuestros pacientes. Confía en ScanLabs para obtener resultados <br />
                 precisos que marcan la diferencia en tu bienestar.
                </p> 
                </center>
                
            </div>
            </div>
        </Fade>
    );
};

export default Slide;