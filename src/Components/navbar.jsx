import  React from 'react';

import avatar from '../Images/avatar.svg'
import '../styles/nav.css'
import { Link } from 'react-router-dom';

function Navbar() {
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src={avatar} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      <a className="navbar-brand" id='Name' href="#"><b>ScanLabs</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{display: "flex" , justifyContent: "start"}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            
            <Link  className="nav-link" to="./Login">Login</Link>
            

          </li>
         
        </ul>
         
      </div>
    </div>
  </nav>
  );
}
export default Navbar;