import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home'
import Login from '../src/Components/login';
import Campus from './Components/Campus'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Campus' element={<Campus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
