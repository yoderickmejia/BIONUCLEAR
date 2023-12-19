import React from "react";
import '../styles/Appbar.css'
import { Fade } from "react-awesome-reveal";
import pdf10 from '../pdfs/REAL TESTS-10.pdf'
import pdf2 from '../pdfs/REAL TESTS-2.pdf'
import pdf3 from '../pdfs/REAL TESTS-3.pdf'
import pdf4 from '../pdfs/REAL TESTS-4.pdf'
import pdf5 from '../pdfs/REAL TESTS-5.pdf'
import pdf6 from '../pdfs/REAL TESTS-6.pdf'
import pdf7 from '../pdfs/REAL TESTS-7.pdf'
import pdf8 from '../pdfs/REAL TESTS-8.pdf'
import pdf9 from '../pdfs/REAL TESTS-9.pdf'
import pdf1 from '../pdfs/Coagulacion Sanguinea.pdf'




import AppBar from './Appbar'
import Results from './results'
const  Campus = ()=>{
    return(
        <Fade> 
              <AppBar/> 
            <div className=" Resultados mt-4 d-flex justify-content-center align-items-center h-100 w-100">
            <Results
            mipdf={pdf1}
            Texto="Coagulacion Sanguinea Test"
            /> 
            <Results
             mipdf={pdf2}
             Texto="Colesterol Test"
           
/>
            </div>
            <div className=" Resultados mt-1 d-flex justify-content-center align-items-center h-100 w-100">
            <Results
            mipdf={pdf3}
            Texto="Radiografía de Tórax Test"
            /> 
            <Results
             mipdf={pdf4}
             Texto="Hematocrito  Test"
           
/>
            </div>
            <div className=" Resultados mt-1 d-flex justify-content-center align-items-center h-100 w-100">
            <Results
            mipdf={pdf5}
            Texto=" Vitaminas Test"
            /> 
            <Results
             mipdf={pdf6}
             Texto=" Perfil Hepático Test"
           
/>
            </div>
            <div className=" Resultados mt-1 d-flex justify-content-center align-items-center h-100 w-100">
            <Results
            mipdf={pdf7}
            Texto="Gases sanguíneos Test"
            /> 
            <Results
             mipdf={pdf8}
             Texto="Función tiroidea Test"
           
/>
            </div>
            <div className="Resultados mt-1 d-flex justify-content-center align-items-center h-100 w-100">
            <Results
            mipdf={pdf9}
            Texto="Función renal avanzada Test"
            /> 
            <Results
             mipdf={pdf10}
             Texto="Electrocardiograma Test"
           
/>
            </div>

            
            
    
            
            
        </Fade>
    );};


export default  Campus;

