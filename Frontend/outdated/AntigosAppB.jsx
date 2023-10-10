import Cabecalho from '../src/Layout/Cabecalho.jsx'
import CardCarro from '../src/JavaScr/carros/CardCarro.jsx'
import Formulario from '../src/Layout/Formulario.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import CarrosData from '../src/json/Carros.json'
import React, { useState, useEffect } from 'react'










export default function AntigosApp() {


  
  const [buscaNome, setBuscaNome] = useState('');
  const [buscaMarca, setBuscaMarca] = useState('');
  const [buscaValor, setBuscaValor] = useState('');
  const [buscaKm, setBuscaKm] = useState('');
  
  const lowerBusca = buscaNome.toLowerCase();
  
  const carrosFiltrados = CarrosData.filter(
    (carro) => carro.isAntigo === true &&
    carro.nome.toLowerCase().includes(lowerBusca) &&
    (buscaMarca != "" ? buscaMarca.includes(carro.marca) : carro.marca)&&
    (buscaValor != "" ? parseInt(carro.valor) <= parseInt(buscaValor) : carro.valor) &&  
    (buscaKm != "" ? parseInt(carro.km) <= parseInt(buscaKm) : carro.km)   
  );
  
  return (
    <>
      <Cabecalho />
      <h2>Escolha o carro de sua preferência:</h2>
      <hr mt-3></hr>
      <Formulario 
        buscaNome={buscaNome} setBuscaNome={setBuscaNome}
         buscaMarca ={buscaMarca}  setBuscaMarca = {setBuscaMarca}
        buscaValor = {buscaValor} setBuscaValor = {setBuscaValor}
        buscaKm = {buscaKm} setBuscaKm = {setBuscaKm}
        />
      <hr mt-3></hr>
      <main className="flex-fill">
        <div className="container">
          <div className="row g-3">
            {carrosFiltrados.map((carro, index) => (
              <CardCarro key={index} {...carro}  />))}
          </div>
        </div>
      </main>
    </>
  );
};

