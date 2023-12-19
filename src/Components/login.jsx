import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import wave  from '../Images/wave.png'
import avatar from '../Images/avatar.svg'
import bg from '../Images/bg.svg'
import '../styles/Login.css';
import { Fade } from "react-awesome-reveal";



const LoginForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", addcl);
        input.removeEventListener("blur", remcl);
      });
    };
  }, []);
  


  

    const [formData, setFormData] = useState({
      User: '',
      Password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log(formData);
        const response = await axios.post('https://localhost:44367/api/usuario', formData);
        console.log('Respuesta de la API:', response.data);
        
        if (response.data === 1) {
          navigate('../campus');
            // Redirigir a otro componente
            // Reemplaza 'NombreComponente' con el nombre de tu componente
           
        } else if (response.data === 0) {
            // Mostrar un mensaje de alerta
            alert('El usuario o la contraseña son incorrectos');
        }
        
        // Aquí puedes manejar la respuesta de la API como lo necesites
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
  }
    return (
      <Fade>
        <div className='eldiv p-0 m-0'>
          <img className="wave h-100 position-fixed bottom-0 left-0 " alt='klk' src={wave}/>
          <div className="container ">
            <div className="img align-items-center justify-content-center">
              <img className='w-100' alt='klk' src={bg}/>
            </div>
            <div className="login-content  align-items-center  justify-content-flex-start">
              <form className='w-75' onSubmit={handleSubmit}>
                <img className='w-25' alt='klk' src={avatar}/>
                <h2 className="title">Welcome</h2>
                <div className="input-div   one top-0 position-relative p-2">
                  <div className=" i align-items-center justify-content-center">
                    <i className="fas fa-user "></i>
                  </div>
                  <div className="div  position-relative ">
                    <h5 className='position-absolute fs-18'>Username</h5>
                    <input
                      id='input1'
                      type="text"
                      className="input"
                      name="User"
                    
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-div  position-relative p-2  pass">
                  <div className="i align-items-center justify-content-center"> 
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div position-relative ">
                    <h5  className='position-absolute fs-18'>Password </h5>
                    <input
                      id='input2'
                      type="password"
                      className="input"
                      name="Password"
                    
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <input type="submit" id='btn' className="btn border-0  fs-1.2rem cursor-pointer w-100 h-100" value="Login"/>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    );
  };
  
  export default LoginForm;
  