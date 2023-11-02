import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function DeleterFiltros(props) {
    const [filtros, setFiltros] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/filtros')
        .then((response) => response.json())
        .then((data) => {
          setFiltros(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const handleGoBack = () => {
      window.history.back();
    };

  const [selectedFiltroId, setSelectedFiltroId] = useState(null);

  const handleCarChange = (e) => {
    const filId = e.target.value;
    setSelectedFiltroId(filId);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!selectedFiltroId) {
      alert('Por favor selecione um carro.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/filtros/${selectedFiltroId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('filtro deletado com sucesso.');
        setSelectedFiltroId(null); 
        window.location.reload();

        fetch('http://localhost:8000/filtros')
                .then((response) => response.json())
                .then((data) => {
                  {props.setMarc(data)}
                })
                .catch((error) => {
                  console.error('Error fetching data:', error);
                });

      } else {
        console.error('Error deletando:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error deletando:', error);
    }
  };

  return (
    <>
    <div>
      <div>
        <label>Selecione um carro:</label>
        <select value={selectedFiltroId || ''} onChange={handleCarChange}  className='form-control'>
          <option value="">Selecione...</option>
          {filtros.map((m) => (
              <option key={m.id} value={m.id}>
              {m.id}
            </option>
          ))}
        </select>
      </div>
      <button type="button"  className='btn btn-outline-secondary' onClick={handleDelete}>
        Apagar
      </button>
    </div>
    </>
  );
}