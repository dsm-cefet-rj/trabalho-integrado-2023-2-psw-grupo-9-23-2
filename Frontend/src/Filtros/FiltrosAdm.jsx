import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Cabecalho from '../Layout/Cabecalho';

import CriadorFiltros from './CriadorFiltros';
import DeleterFiltros from './DeleterFiltros';
import UpdaterFiltros from './UpdaterFiltros';


export default function FiltrosAdm() {
    const [marcas, setMarca] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/filtros')
        .then((response) => response.json())
        .then((data) => {
          setMarca(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
const handleGoBack = () => {
  window.history.back();
}; 
      
    return (
        <>
        <Cabecalho />
            <div className="container">
            <button onClick={handleGoBack}>Voltar</button>
                <div className="row ">
                    <h3>Criar nova marca</h3>
                    <CriadorFiltros setMarc={setMarca} />
                    <h3>Deletar marca</h3>
                    <DeleterFiltros setMarc={setMarca} />
                    <h3>Atualizar marca</h3>
                    <UpdaterFiltros setMarc={setMarca} />
                </div>
                <h5>Marcas existentes: </h5> <br />
                <ul>
                  {marcas.map((m) =>
                      <li>{m.marca}</li>
                  )}
                </ul>
            </div>
        </>      
    );
};