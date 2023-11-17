import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import fs from 'fs'

export default function CriadorCarro() {
  
  const [formData, setFormData] = useState({
    isAntigo: true,
    nome: '',
    imgLink: '',
    km: '',
    marca: '',
    valor: '',
  });
  let ActualLink = "";
  let ActualFile;
  function createImage()
  {
    if(ActualFile == null)
    {
      alert("Por favor, insira uma imagem para o novo carro");
      return;
    }

    let aux = ActualFile.split(".");
    if(aux[aux.length-1] !== "png")
    {
      alert("Por favor, insira uma imagem no formato png");
      return;
    }
    /*
    ActualLink = "public/Antigos/Carro"+(carros.length+1)+".png"
    fs.writeFile(ActualLink, ActualFile, function (err){
      if(err){
        throw err;
      }
      console.log("Deu certo")
    })
    */
  }

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(value.includes(".png"))
    {
      ActualFile = value;
      console.log(value);
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleGoBack = () => {
    window.history.back();
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      createImage();
      const newEntry = {
        ...formData,
        imgLink: ActualFile
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
          imgLink: '',
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
        <div class="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02" onChange={handleInputChange}/>
          <label className="input-group-text" htmlFor="inputGroupFile02">Imagem do carro(.png)</label>
        </div>
        <button type="submit">Concluido</button>
      </form>
    </div>

    </>
  );
};