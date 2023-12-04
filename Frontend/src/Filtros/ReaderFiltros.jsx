import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cabecalho from '../Layout/Cabecalho.jsx';


export default function ReaderFiltros(props) {
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
      <Cabecalho></Cabecalho>
      <button onClick={handleGoBack}>Voltar</button>
        <div>
        <h5>Marcas existentes: </h5> <br />
                <ul>
                  {marcas.map((m) =>
                      <li>{m.marca}</li>
                  )}
                </ul>
      </div>
    </>
    );
  }