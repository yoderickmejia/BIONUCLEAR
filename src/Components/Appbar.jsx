import React from "react";
import avatar from '../Images/avatar.svg'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import '../styles/Appbar.css'

const AppBar = () => {
  return (
    <Fade>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img src={avatar} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <a className="navbar-brand" id='Name'><b>ScanLabs</b></a>
          <Link to={'../'} className="linkStyle">
            <h6>
              LogOut
            </h6>
          </Link>
        </div>
      </nav>
      <div className="container-fluid Search ">
      <h1>Resultados Médicos</h1>
      <h3>Estos son tus resultados médicos disponibles:</h3>
      
 
       
      </div>
    </Fade>
  );
};

export default AppBar;