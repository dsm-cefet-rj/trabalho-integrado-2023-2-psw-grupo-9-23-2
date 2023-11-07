import React, { useState, useEffect } from 'react';
import Cabecalho from '../../Layout/Cabecalho.jsx'
import { Link } from 'react-router-dom';

export default function DeletarAgenda() {
    const [agendas, setAgendas] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/horarios')
        .then((response) => response.json())
        .then((data) => {
          setAgendas(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const handleGoBack = () => {
      window.history.back();
    };

  const [selectedAgendaId, setSelectedAgendaId] = useState(null);

  const handleAgendaChange = (e) => {
    const agendaId = e.target.value;
    setSelectedAgendaId(agendaId);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!selectedAgendaId) {
      alert('Por favor selecione um horario.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/horarios/${selectedAgendaId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Horario deletado com sucesso.');
        setSelectedAgendaId(null); 
        window.location.reload();
      } else {
        console.error('Error deletando:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error deletando:', error);
    }
  };

  return (
    <>
    <Cabecalho></Cabecalho>
    <button onClick={handleGoBack}>Voltar</button>
    <div>
      <h2>Apagar agendamento</h2>
      <div>
        <label>Selecione um agendamento:</label>
        <select value={selectedAgendaId || ''} onChange={handleAgendaChange}>
          <option value="">Selecione...</option>
          {agendas.map((agenda) => (
              <option key={agenda.id} value={agenda.id}>
              {agenda.data}--{agenda.hora}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={handleDelete}>
        Apagar
      </button>
    </div>
    </>
  );
}