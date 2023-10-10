import React, { useEffect, useState } from 'react';
import '/bootstrap-5.3.1-dist/css/bootstrap.css';
import Cabecalho from '../../Layout/Cabecalho.jsx';
import CardAgendamento from './CardAgendamento.jsx';

export default function ListaAgendamentos() {
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

  const AgendamentosFiltrados = horarios.filter((horario) => horario.isOcupado === true);

  return (
    <>
      <Cabecalho />
      <h1>Meus Agendamentos</h1>
      <hr className="mt-3" />
      <main className="flex-fill">
        <div className="container">
          <div className="row g-3">
            {AgendamentosFiltrados.map((Horario) => (
              <CardAgendamento key={Horario.id} {...Horario} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}