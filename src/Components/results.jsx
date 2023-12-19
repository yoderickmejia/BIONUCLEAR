import React from "react";

import { Fade } from "react-awesome-reveal";

import '../styles/Appbar.css'
const Result = (props)=>{ 
    return (<Fade>
     
     <div className="card-container">
  <h6>{props.Texto}</h6>
  <a href={props.mipdf} target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="#29bf8b" d="M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4z"/></svg>
  </a>
</div>

    </Fade>);};
        

        export default Result
