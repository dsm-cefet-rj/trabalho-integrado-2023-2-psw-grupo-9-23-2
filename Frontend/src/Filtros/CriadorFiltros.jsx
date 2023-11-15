import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Cabecalho from '../Layout/Cabecalho';
export default function CriadorFiltros(props)
{
    
    const [formData, setFormData] = useState({
        marca: '',
        
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const [mar, setMar] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:8000/filtros')
          .then((response) => response.json())
          .then((data) => {
            setMar(data);
          })
          .catch((error) => {
            
            console.error('Error fetching data:', error);
          });
      }, []);
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {

          if(mar.filter((m)=> m.marca === formData.marca).length > 0)
          {
            alert('Essa marca já existe nos filtros!');
            return;
          }
          else if(formData.marca == "")
          {
            alert('Insira o nome da marca a ser criada');
            return;
          }
          const newEntry = {
            ...formData,
                        
          };
    
          const response = await fetch('http://localhost:8000/filtros', {
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
                marca: '',              
              });
           
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
            console.error('Error creating new entry:', response.status, response.statusText);
            if(response.status == 500)
            {
                alert("Essa marca já existe nos filtros!");
            }
          }
        } catch (error) {
            if(error == 500)
            {
                alert("Essa marca já existe nos filtros!");
            }
          console.error('Error creating new entry:', error);
        }
      };
    
      return (
        <>
        
        <div>
        
        <div className='input-group mb-3'>
          <form onSubmit={handleSubmit}>        
                      
              <input className='form-control' placeholder='Insira marca a ser criada...'
                type="text"
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
              />
            
            
            <button className="btn btn-outline-secondary" type="submit">Adicionar</button>
          </form>
          </div>
        </div>
    
        </>
      );
};