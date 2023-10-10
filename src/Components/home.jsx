
import { Fade } from "react-awesome-reveal";

import Logo from "../Images/Logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import icono from "../Images/icons8-usuario-masculino-en-círculo-48.png"
import "../styles/Home.css"

import Carrousel from "./Carrousel";
const Home = () => {
  return (  
    <Fade>
        
<header >
 
<div className="container-fluid">
  <div className="row">
    <div className="col-12 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <i className="fa-solid fa-house fa-sm"></i>
        <p className="m-1 ml-2">Bienvenidos a labplus online</p>
      </div>
      <div className="d-flex">
    
      <img src={icono} className="icono" alt="icono" />
      </div>
    </div>
  </div>
</div>


<nav className="navbar navbar-expand-lg navbar-light  justify-content-between  ">
  <img className="img-fluid w-25 m-2" src={Logo} alt="Logo" />
  <a className=" boton icono btn-3d btn-square btn-danger p-1 text-xl waves-effect waves-light m-5" href="#dos" data-ancla="dos">Labplus® Online</a>

</nav>
</header>

<main className="main-expand-lg">
<Carrousel></Carrousel>
  
</main>
<footer>

</footer>


        
  </Fade>
  );
};

export default Home;