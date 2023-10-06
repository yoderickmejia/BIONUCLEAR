
import { Fade } from "react-awesome-reveal";

import Logo from "../Images/ImagenLogo.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  return (  
    <Fade>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div >
    <img className="img-fluid w-50" src={Logo}/>
    <h6>LabPlus</h6>
   </div>
  <div></div>

  
</nav>

        
  </Fade>
  );
};

export default Home;