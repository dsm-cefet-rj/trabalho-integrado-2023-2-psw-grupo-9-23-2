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
/*
      function addMarca(pro)
      {
        if(marcas.filter((m) => m.marca == pro).length > 0)
        {
          alert("Essa marca já existe nos filtros!")
        }
        else{
          const nova ={marca:pro};
          const novaMarca=[...marcas, nova];
          setMarca(novaMarca);
          
        }
        
      }
*/     
const handleGoBack = () => {
  window.history.back();
}; 
      function delMarca(pro)
      {
        if(pro == "Escolha...")
        {
          alert("Escolha uma marca a ser excluída");
        }
        else
        {
          const novaMarca = marcas.filter((m)=> m.marca != pro);
          setMarca(novaMarca);
        }
      }
    
      function updtMarca(ant, novo)
      {
        if(ant == "Escolha...")
        {
          alert("Escolha uma marca a ser atualizada!");
        }
       else if(novo == "")
       {
         alert("Escolha um nome para atualizar a marca!");
       }
        else
        {
          if(marcas.filter((m) => m.marca == novo).length > 0)
          {
            alert("Essa marca já existe nos filtros!")
          }
          else
          {
            const nova = {marca: novo};
            const novaMarcas = [...marcas, nova];
            setMarca(novaMarcas.filter((m) => m.marca != ant));
          }     
        }
      }
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