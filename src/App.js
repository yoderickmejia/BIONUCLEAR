import React  from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Asegúrate de que el nombre del componente sea correcto
import Home from './Components/home'
import Login from '../src/Components/login';

// Asegúrate de que el nombre del componente sea correcto
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
