import React, { useEffect, useState } from 'react';
import '/bootstrap-5.3.1-dist/css/bootstrap.css';
import Cabecalho from '../../Layout/Cabecalho.jsx';
import CardAgendamento from './CardAgendamento.jsx';

export default function ChecarAgendamentos() {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/horarios')
      .then((response) => response.json())
      .then((data) => {
        setHorarios(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const AgendamentosSemDono = horarios.filter((horario) => horario.isOcupado == false);
  const AgendamentosComDono = horarios.filter((horario) => horario.isOcupado == true);

  console.log("Com dono "+ AgendamentosComDono);
  return (
    <>
      <Cabecalho />
      <h1>Horarios não marcados: </h1>
      <hr className="mt-3" />
      <div className="flex-fill">
        <div className="container">
          <div className="row g-3">
            {AgendamentosSemDono.map((H) => (
              <CardAgendamento key={H.id} {...H} />
            ))}
          </div>
        </div>
      </div>
      <h1>Horarios marcados: </h1>
      <hr className="mt-3" />
      <div className="flex-fill">
        <div className="container">
          <div className="row g-3">
            {AgendamentosComDono.map((H) => (
              <CardAgendamento key={H.id} {...H} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}