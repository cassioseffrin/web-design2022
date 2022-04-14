
import './App.css';

import React, { useEffect, useState } from 'react'

import BemVindo from './components/BemVindo';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Vendas from './components/Vendas';
import Locacoes from './components/Locacoes';



// function App() {

// }


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<BemVindo />} />
          <Route path='vendas/:nome/:sobrenome' element={<Vendas />} />
          <Route path='locacoes' element={<Locacoes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;