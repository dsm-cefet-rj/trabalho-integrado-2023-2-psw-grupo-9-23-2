import React, { useState, useEffect } from 'react';
import Cabecalho from '../../Layout/Cabecalho.jsx'
import { Link } from 'react-router-dom';

export default function DeleterCarro() {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/carros')
        .then((response) => response.json())
        .then((data) => {
          setCarros(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const handleGoBack = () => {
      window.history.back();
    };

  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleCarChange = (e) => {
    const carId = e.target.value;
    setSelectedCarId(carId);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!selectedCarId) {
      alert('Por favor selecione um carro.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/carros/${selectedCarId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Carro deletado com sucesso.');
        setSelectedCarId(null); 
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
      <h2>Apagar carro</h2>
      <div>
        <label>Selecione um carro:</label>
        <select value={selectedCarId || ''} onChange={handleCarChange}>
          <option value="">Selecione...</option>
          {carros.map((car) => (
              <option key={car.id} value={car.id}>
              {car.nome}
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