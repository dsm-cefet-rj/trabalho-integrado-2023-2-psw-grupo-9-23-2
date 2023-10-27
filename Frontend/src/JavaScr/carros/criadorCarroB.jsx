import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cabecalho from '../../Layout/Cabecalho.jsx';
import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function CriadorCarro() {
  //const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    isAntigo: true,
    nome: '',
    imgLink: 'public/Antigos/antigo1.PNG',
    km: '',
    marca: '',
    valor: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const listaCarros = useSelector((state) => state.listaCarros);
      const newEntry = {
        ...formData,
        id: listaCarros.length + 1,
      };
      const response = await fetch('http://localhost:8000/carros', {
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
          isAntigo: true,
          nome: '',
          imgLink: 'public/Antigos/antigo1.PNG',
          km: '',
          marca: '',
          valor: '',
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
        <h2>Criar um novo carro</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            O carro é antigo?
            <input
              type="checkbox"
              name="isAntigo"
              checked={formData.isAntigo}
              onChange={() => setFormData({ ...formData, isAntigo: !formData.isAntigo })}
            />
          </label>
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
        <button type="submit">Concluido</button>
      </form>
      </div>
    </>
  );
}
