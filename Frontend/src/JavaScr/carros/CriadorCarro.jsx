import Cabecalho from '../../Layout/Cabecalho.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UploadImage from './uploadImage.jsx'

export default function CriadorCarro() {

  const handleFinishedClick = () =>{

    if( validateEntry() ===false)
    {
      return;
    }
    console.log("hahahaha");
    const isAntigoValue = formData.isAntigo;
    if (isAntigoValue) {
      // Navigate to a different part of the website for isAntigo is true
      window.location.href = '/Antigos';
    } else {
      // Navigate to a different part of the website for isAntigo is false
      window.location.href = '/Seminovos';
    }
  }
  function validateEntry()
  {
    if(isNaN(formData.valor)  || formData.valor === "")
    {
      alert("Por favor, insira um número para o valor do carro!");
      return false;
    }
    if(isNaN(formData.km) || formData.km === "")
    {
      alert("Por favor, insira um valor numérico para a kilometragem do carro!");
      return false;
    }
    if(formData.nome === "")
    {
      alert("Por favor, insira um nome para o carro!");
      return false;
    }
    if(formData.imgLink === "")
    {
      alert("Por favor, insira uma imagem para o carro!");
      return false;
    }
    if(formData.marca === "")
    {
      alert("Por favor, insira uma imagem para o carro!");
      return false;
    }
    return true;
  }
  const [formData, setFormData] = useState({
    isAntigo: true,
    nome: '',
    imgLink: '',
    km: '',
    marca: '',
    valor: '',
  });

  const [AllImages, setAllImages] = useState(null);

  
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
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/upload-image')
      .then((response) => response.json())
      .then((data) => {
        setAllImages(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

    if( validateEntry() ===false)
    {
      return;
    }
    try {
      const newEntry = {
        ...formData
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
        <div>
        
        <select value={formData.imgLink || ''} name="imgLink" id="imgLink" onChange={handleInputChange}  className='form-control'>
          <option value="">Selecione Link da imagem...</option>
          {AllImages == null? "" :AllImages.map((m) => (
              <option key={m.id} value={m.image}>
              {m.image}
              
            </option>
          ))}
        </select>
      </div>
        <button type="submit" onClick={handleFinishedClick}>Concluido</button>
        <button type="submit">Quero colocar Mais</button>
      </form>
      <br/><br/><br/>
      <UploadImage />
      <h3>Imagens disponiveis</h3>
      <main className="flex-fill">
        <div className="container-fluid">
          <div className="row g-3">
            
              {AllImages == null? "" : AllImages.map((img) => (
                <div className="col col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
                  <div className='card text-center bg-light'>
                    <div className="card-header">
                      <h5 className="card-title">{ img.image }</h5>
                    </div>
                    <img src={img.image} className="card-img-top"></img>
                  </div>
                  </div>))       
              }
           
          </div>
        </div>
      </main>
    </div>
    
    </>
  );
};