import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function CriadorAgenda() {
  
  function validateEntry()
  {
    if(formData.data == null)
    {
      alert("Por favor, insira um valor para a Data");
      return false;
    }
    if(formData.hora == "")
    {
      alert("Por favor, insira um valor para a hora");
      return false;
    }
    let aux = formData.hora.split(":");
    if(aux.length == 2)
    {
      if(parseInt(aux[0]) < 0 || parseInt(aux[0]) > 23)
      {
        alert("Por favor, insira um valor válido para as horas");
        return false;
      }
      else if(parseInt(aux[1]) < 0 || parseInt(aux[1]) > 59)
      {
        alert("Por favor, insira um valor válido para os minutos");
        return false;
      }
    }
    else
    {
      alert("Por favor, insira um valor para a hora no formato HH:MM");
      return false;
    }
    return true;
  }

  const [formData, setFormData] = useState({
    data: null,
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

    if(validateEntry() == false)
    {
      return;
    }
    try {
      const newEntry = {
        ...formData,
        isOcupado: false,
        
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
            data: null,
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
          <label htmlFor="data">Data:   </label>
          <input
            type="date"
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