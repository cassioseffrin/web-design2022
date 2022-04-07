
import './App.css';
import Menu from './Menu';
import Item from './Item';
import React, { useEffect, useState } from 'react'
import Repositories from './components/Repositories';

function App() {
  return (
    <>
      <Menu>
        <Item apertou={(texto) => { console.log(texto) }}> Cadastro </Item>
        <Item apertou={(texto) => { console.log(texto) }}> Relatorios </Item>
        <Item apertou={(texto) => { console.log(texto) }}> Ajuda </Item>
      </Menu>
      <Repositories />
    </>
  );
}
export default App;