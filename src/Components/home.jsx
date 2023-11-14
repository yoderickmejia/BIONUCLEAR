import React from 'react';
import '../styles/Carrousel.css'
import { Fade } from 'react-awesome-reveal';
import Navbar from '../Components/navbar'
import SWIPER from  '../Components/Carrousel'
import Problem from '../Components/Problem'
import Slide from './slides'
const Home = () => {
  

 return (
    <Fade>
     <Navbar></Navbar>
     <SWIPER></SWIPER>
     <Slide></Slide>
     <Problem/>

    </Fade>
 );
};

export default Home;
