import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function CriadorAgenda() {
  
  const [formData, setFormData] = useState({
    data: '',
    hora: '', 
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleGoBack = () => {
    window.history.back();
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newEntry = {
        ...formData,
        isOcupado: false,
        id: "Ho"+ (horarios.length +1)
      };

      const response = await fetch('http://localhost:8000/horarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('New entry created:', responseData);

        setFormData({
            data: '',
            hora: '', 
          });
      } else {
        console.error('Error creating new entry:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error creating new entry:', error);
    }
  };

  return (
    <>
    <Cabecalho />
    <button onClick={handleGoBack}>Voltar</button>
    <div>
      <h2>Criar um novo horário</h2>
      <form onSubmit={handleSubmit}>        
        <div>
          <label htmlFor="data">Data (no formato DD/MM):</label>
          <input
            type="text"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="hora">Hora (No formato HH:MM):</label>
          <input
            type="text"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleInputChange}
            />
        </div>
        <button type="submit">Concluido</button>
      </form>
    </div>

    </>
  );
};