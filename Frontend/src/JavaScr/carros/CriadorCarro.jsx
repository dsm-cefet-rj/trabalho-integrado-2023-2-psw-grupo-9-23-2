import { useDispatch } from 'react-redux';
import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect, } from 'react'
import { useSelector } from 'react-redux';


export default function CriadorCarro() {
  
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
  const handleGoBack = () => { window.history.back(); };

  //const [carros, setCarros] = useState([]);
/*
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
  */
  const handleSubmit = async (e) => {
    const listaCarros = useSelector((state) => state.listaCarros);
    e.preventDefault();
    
    try {
      const newEntry = {
        ...formData,
        //revisar o id para não ficar igual
       id: listaCarros.length +1
      };
      useDispatch(createCarro(newEntry));
      /*
      const response = await fetch('http://localhost:8000/carros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
      */
      if (true) {
       // const responseData = await response.json();
        //console.log('New entry created:', responseData);
        

        
        setFormData({
          isAntigo: true,
          nome: '',
          imgLink: 'public/Antigos/antigo1.PNG',
          km: '',
          marca: '',
          valor: '',
        });
        
      } else {
        //console.error('Error creating new entry:', response.status, response.statusText);
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
};