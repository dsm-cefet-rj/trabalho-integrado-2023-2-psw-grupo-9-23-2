import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


export default function ChatCarro() {

  const [horarios, setHorarios] = useState([]);
  const [escolhido, setEscolhido] = useState(null);

  function defineEscolhido(i)
  {

    setEscolhido(i);
  }
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const selected = horarios.filter((h)=>h.id == escolhido);
      const updatedCarData = {
        ...selected[0],
        isOcupado: true
      };

      const response = await fetch(`http://localhost:8000/horarios/${escolhido}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCarData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Agenda data updated:', responseData);
        //window.location.reload();
        window.location.href = '/AgendConcl';
      } else {
        console.error('Error updating car data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating car data:', error);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                   
                      <button className="btn btn-primary btn-lg" type="submit" onClick={() =>defineEscolhido(horario.id)}>
                        Dia: {horario.data}
                        <br></br>
                        Horário: {horario.hora}
                      </button>
                  </form>
                </div>
              
            ))
          }

        </div>


      </div>
    </>
  );
};