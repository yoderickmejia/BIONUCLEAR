import React from "react";
import { Fade } from 'react-awesome-reveal';
import image from '../Images/qTQmsQuNY.png'
import '../styles/Problem.css'
const Problem = () => {
    return (
        <Fade>
            <div className="problem-container-div">
         
            <div className="container-fluid Problem-div  ">
                <div className="div1">
                    <img src={image} className='img-fluid Problem' alt="" />
                </div>
                <div className="div1">
                    <p className="Problem-p "> <b className="b-problem">ScanLabs </b> es una innovadora aplicación diseñada  para proporcionarte    un acceso fácil y seguro a tus resultados médicos.
                        Con ScanLabs, puedes explorar de manera rápida y conveniente los informes de tus pruebas médicas desde la comodidad de tu dispositivo.
                        Facilitamos la comprensión de tu salud al ofrecer una interfaz intuitiva que presenta tus resultados de manera clara y detallada.</p>
                </div>
                </div>


            </div>
        </Fade>
    );
};

export default Problem;