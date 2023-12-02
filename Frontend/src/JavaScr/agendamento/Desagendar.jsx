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
      <div>
        <select value={selectedFilId || ''} onChange={desmarcar} className='form-select'>
          <option value="">Escolha...</option>
          {AgendamentosComDono.map((f) => (
            <option key={f.id} value={f.id}>
              {f.marca}
            </option>
          ))}
        </select>
      </div>
      {/* Formulário ou outras seções podem ser adicionadas aqui */}
    </>
  );
}
