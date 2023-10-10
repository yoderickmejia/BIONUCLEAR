import React, { useState } from 'react';

import  "../styles/Login.css"
import Image from "../Images/Image.png"
import axios from 'axios';
import {  Redirect } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la solicitud a la API utilizando Axios
    // Usa formData.username y formData.password para enviar los datos de inicio de sesión
    // Por ejemplo:
    axios.post('https://localhost:44367/api/usuario', formData)
      .then((response) => {
        // Maneja la respuesta de la API según tus necesidades
        console.log(response.data);
        if(response.data===true){
          <navigator to="/home.jsx" />
        }
      })
      .catch((error) => {
        // Maneja los errores de la solicitud, por ejemplo, muestra un mensaje de error
        console.error(error);
      });
  };

  return (
    
    <div className='d-flex p-3 justify-content-center align-items-center vh-100'>
     
    <div className="wrapper m-2 p-2 ">
      <div className="text-center">
        <img src={Image} alt="Logo" />
      </div>
      <div className="text-center mt-4 name">
        LabPlus
      </div>
      <form onSubmit={handleSubmit} >
        <div className="form-field d-flex align-items-center">
          <span className="far fa-lg m-2 fa-user "></span>
          <input    type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
           
           id="userName"
            placeholder="Username" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="m-2 fa-sm fas fa-key"></span>
          <input  type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
           id="pwd" placeholder="Password" />
       
        </div>
       <div>
       <button className="btn  w-100 h-100 ">Login</button>
       </div>
      </form>
    </div>
  </div>
  
  
  );
}

export default LoginForm;
