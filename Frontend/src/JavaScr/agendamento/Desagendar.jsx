import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../Layout/Cabecalho.jsx';

export default function Desagendar(props) {
  const [horarios, setHorarios] = useState([]);
  const [selectedFilId, setSelectedFilId] = useState('');

  const desmarcar = (e) => {
    const filId = e.target.value;
    setSelectedFilId(filId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a request to change the value using selectedFilId
    if (selectedFilId) {
      // Example using fetch
      fetch(`http://localhost:8000/horarios/${selectedFilId}`, {
        method: 'PUT', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isOcupado: false }), // Update isOcupado to false or the desired value
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response as needed
          console.log('Successfully updated:', data);
          window.location.reload()
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    }
  };

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

  const AgendamentosComDono = horarios.filter((horario) => horario.isOcupado === true);

  return (
    <>
      <Cabecalho />
      <Link to="/DashBoard">
          <button>Retornar ao dashboard</button>
        </Link>
      <div>
        <form onSubmit={handleSubmit}>
          <select value={selectedFilId || ''} onChange={desmarcar} className='form-select'>
            <option value="">Escolha...</option>
            {AgendamentosComDono.map((f) => (
              <option key={f.id} value={f.id}>
                {f.data + "    " + f.hora}
              </option>
            ))}
          </select>
          <button type="submit">Desmarcar</button>
        </form>
      </div>
      {/* Formulário ou outras seções podem ser adicionadas aqui */}
    </>
  );
}
