import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function CriadorCarro() {
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
    const [formData, setFormData] = useState({
      isAntigo: true,
      nome: '',
      imgLink: 'public/Antigos/antigo1.PNG',
      km: '',
      marca: '',
      valor: '',
    });
  
    const handleCarChange = (e) => {
      const carId = e.target.value;
      setSelectedCarId(carId);

      const selectedCar = carros.find((car) => car.id === carId);
      if (selectedCar) {
        setFormData(selectedCar);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const updatedCarData = {
          ...formData,
        };

        const response = await fetch(`http://localhost:8000/carros/${selectedCarId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCarData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('Car data updated:', responseData);
          window.location.reload();
        } else {
          console.error('Error updating car data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error updating car data:', error);
      }
    };
  
    return (
    <>
        <Cabecalho />
        <button onClick={handleGoBack}>Voltar</button>
        <div>
        <h2>Modificar carros</h2>
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
        <form onSubmit={handleSubmit}>
        <div>
          <label>Is Antigo:</label>
          <input
            type="checkbox"
            name="isAntigo"
            checked={formData.isAntigo}
            onChange={() => setFormData({ ...formData, isAntigo: !formData.isAntigo })}
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="km">KM:</label>
          <input
            type="text"
            id="km"
            name="km"
            value={formData.km}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor:</label>
          <input
            type="text"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Modificar</button>
      </form>
      </div>
    </>
    );
  }