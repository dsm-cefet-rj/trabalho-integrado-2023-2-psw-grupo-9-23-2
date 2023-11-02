import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function UpdaterFiltros(props) {
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


    const [selectedFilId, setSelectedFilId] = useState(null);
    const [formData, setFormData] = useState({
      id: ""
    });
  
    const handleCarChange = (e) => {
      const filId = e.target.value;
      setSelectedFilId(filId);

      const selectedFil = filtros.find((f) => f.id === filId);
      //if (selectedFil) {
        //setFormData(selectedFil);
      //}
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        marca: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!selectedFilId) {
        alert('Por favor, selecione uma marca!');
        return;
      }
      else if(formData.marca==="")
      {
        alert('Por favor, escolha um novo nome para a marca!');
        return;
      }
      else if(filtros.filter((m)=> m.marca === formData.marca).length > 0)
      {
        alert('Essa marca já existe nos filtros!');
        return;
      }
      try {
        const updatedCarData = {
          ...formData,
          
        };

        const response = await fetch(`http://localhost:8000/filtros/${selectedFilId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCarData),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('filter data updated:', responseData);
          
          fetch('http://localhost:8000/filtros')
          .then((response) => response.json())
          .then((data) => {
            {props.setMarc(data)}
            {setFiltros(data)}
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

        } else {
          console.error('Error updating filter data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error updating filter data:', error);
      }
    };
  
    return (
    <>
        <div>
        <div>
          <select value={selectedFilId || ''} onChange={handleCarChange} className='form-select'>
            <option value="">Escolha...</option>
            {filtros.map((f) => (
                <option key={f.id} value={f.id}>
                {f.marca}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit}>

        <div>
          <input placeholder='Novo nome: ' className='form-control'
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" className='btn btn-outline-secondary'>Modificar</button>
      </form>
      </div>
    </>
    );
  }