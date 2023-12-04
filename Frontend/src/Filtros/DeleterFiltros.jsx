import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import Cabecalho from '../Layout/Cabecalho.jsx';

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
      alert('Por favor selecione uma marca!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/filtros/${selectedFiltroId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('filtro deletado com sucesso.');
        setSelectedFiltroId(null); 
       

        fetch('http://localhost:8000/filtros')
                .then((response) => response.json())
                .then((data) => {
                  {props.setMarc(data)}
                })
                .catch((error) => {
                  console.error('Error fetching data:', error);
                });
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
    <div>
      <button onClick={handleGoBack}>Voltar</button>
      <div>
        
        <select value={selectedFiltroId || ''} onChange={handleCarChange}  className='form-control'>
          <option value="">Selecione...</option>
          {filtros.map((m) => (
              <option key={m.id} value={m.id}>
              {m.marca}
              
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