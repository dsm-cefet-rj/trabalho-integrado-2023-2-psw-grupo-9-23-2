import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


export default function ChatCarro() {

  const [horarios, setHorarios] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/horarios')
      .then((response) => response.json())
      .then((data) => {
        setHorarios(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const AgendamentosFiltrados = horarios.filter((horario) => horario.isOcupado === false);
  const atualizarAtributo = (indice, atributo, novoValor) => {

    const novosHorarios = [...horarios];
    novosHorarios[indice].isOcupado = novoValor;
    setHorarios(novosHorarios);
    
  };
/*
  useEffect(() => {
    console.log('JSON Atualizado:', horarios);
  }, [horarios]);
*/

  return (
    <>
      <Cabecalho />
      <br></br>
      <div className='container-fluid'>
        <div className="row">
          <div className="col text-center">
            <h2>Dias Disponíveis</h2>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          {
            AgendamentosFiltrados.map((horario, index) => (             
                <div className="col text-center" key={index}>
                  <Link to="/AgendConcl">
                    <button className="btn btn-primary btn-lg"
                      onClick={() => atualizarAtributo(index, 'isOcupado', true)}
                    >
                      Dia: {horario.data}
                      <br></br>
                      Horário: {horario.hora}
                    </button>
                  </Link>
                </div>
              
            ))
          }

        </div>


      </div>
    </>
  );
};