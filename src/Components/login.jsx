import React from 'react';
import  "../styles/Login.css"
import Image from "../Images/Image.png"
const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={Image}/>
      </div>
      <div className="text-center mt-4 name">
        BIONUCEAR 
      </div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="text" name="userName" id="userName" placeholder="Username" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" id="pwd" placeholder="Password" />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
     
    </div>
  );
}

export default LoginForm;
