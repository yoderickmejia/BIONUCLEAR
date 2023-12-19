import React from 'react';
import '../styles/Home.css'
import { Fade } from 'react-awesome-reveal';
import Navbar from '../Components/navbar'
import SWIPER from  '../Components/Carrousel'
import Problem from '../Components/Problem'
import Slide from './slides'
import Info from './info'
import Footer from './footer'
const Home = () => {
  

 return (
    <Fade>
      <Navbar/>
      <SWIPER/>
      <Slide/>
      <Problem/>
      <Fade>
      <div className='Cualidades'>
        <center>
        <p>Nuestras mejores cualideades</p>
        </center>
       
      </div>
      </Fade>
     
      <Info/>
      <Footer/>
     
     
     
     
         

    </Fade>
 );
};

export default Home;
