import * as React from 'react';

import imagen1 from '../Images/6.jpg';
import imagen2 from '../Images/pexels-pixabay-60504.jpg';
import imagen3 from '../Images/pexels-chokniti-khongchum-3938023.jpg';
import '../styles/info.css' // Asegúrate de importar tu archivo de estilos CSS

function Info() {
  return (
    <div className='div-card'>
      <div className="c">
        <img src={imagen1} className="c-img-top" alt="" />
        <div className="c-body">
            <center>
            <p className="c-title">Interfaz Intuitiva y muy  Amigable</p>
          <p className="c-text">ScanLabs ofrece una web fácil de usar para encontrar análisis médicos. Su plataforma simplifica la búsqueda y comprensión de resultados.</p>

            </center>
        

        </div>
      </div>

      <div className="c">
        <img src={imagen2} className="c-img-top" alt="" />
        <div className="c-body">
            <center>
          <p className="c-title">Protección de Datos Garantizada</p>
          <p className="c-text">La seguridad es prioritaria en ScanLabs. Implementan medidas estrictas para salvaguardar la información médica y personal de sus usuarios.</p>
          </center>
        </div>

      </div>

      <div className="c">
        <img src={imagen3} className="c-img-top" alt="" />
        <div className="c-body">
            <center>
          <p className="c-title">Variedad de Servicios Médicos</p>
          <p className="c-text">ScanLabs brinda acceso a una amplia gama de análisis médicos. Desde pruebas básicas hasta análisis especializados, cubren diversas necesidades de salud.</p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Info;
