import React from 'react'
import { Fade } from 'react-awesome-reveal';
import '../styles/footer.css'
import logo from '../Images/LogoSample_ByTailorBrands-removebg-preview.png'
const Footer = () => {
  return (
<Fade>
<footer className="pie-pagina ">
    <h1 id="suenelo">klk</h1>
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src={logo} className='laimagen' alt="Logo de SLee Dw"/>
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>DÓNDE ESTAMOS?</h2>
                <p>	
Ave. Tiradentes #74, Ensanche La Fe, Santo Domingo, República Dominicana. T. 809-567-8172</p>
              
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>ScanLabs</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>


</Fade>
  )
}

export default Footer;